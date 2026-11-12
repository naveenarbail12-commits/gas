/**
 * Web Audio API synthesizer for the Village Gas Vehicle Arrival Siren / Horn.
 * Plays a loud, melodic dual-tone alert typical of LPG delivery mini-trucks
 * visiting rural villages to signal arrival to households.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playArrivalAlertSound(): Promise<void> {
  return new Promise((resolve) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Create a master gain for smooth volume control
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
      masterGain.connect(ctx.destination);

      // Distinct melodic 4-tone chime sequence (e.g., C5 - E5 - G5 - C6)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const durations = [0.18, 0.18, 0.22, 0.45];
      let stepTime = now;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Pleasant brassy / horn harmonic mix
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, stepTime);

        // Sub harmonic oscillator for depth
        const subOsc = ctx.createOscillator();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(freq / 2, stepTime);

        noteGain.gain.setValueAtTime(0.01, stepTime);
        noteGain.gain.exponentialRampToValueAtTime(0.35, stepTime + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.001, stepTime + durations[i]);

        osc.connect(noteGain);
        subOsc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(stepTime);
        subOsc.start(stepTime);

        osc.stop(stepTime + durations[i]);
        subOsc.stop(stepTime + durations[i]);

        stepTime += durations[i] + 0.06;
      });

      // Repeat second chime phrase
      stepTime += 0.15;
      const notesRepeat = [659.25, 783.99, 1046.50];
      notesRepeat.forEach((freq) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, stepTime);

        noteGain.gain.setValueAtTime(0.01, stepTime);
        noteGain.gain.exponentialRampToValueAtTime(0.35, stepTime + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.001, stepTime + 0.25);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(stepTime);
        osc.stop(stepTime + 0.25);
        stepTime += 0.28;
      });

      // Ramp down master
      masterGain.gain.exponentialRampToValueAtTime(0.001, stepTime + 0.3);

      setTimeout(() => {
        resolve();
      }, (stepTime - now + 0.3) * 1000);
    } catch {
      resolve();
    }
  });
}
