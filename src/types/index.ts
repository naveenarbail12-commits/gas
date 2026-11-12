export type Language = 'en' | 'kn';

export interface VillageDeliveryInfo {
  id: string;
  district: string;
  districtKn: string;
  taluk: string;
  talukKn: string;
  villageName: string;
  villageNameKn: string;
  scheduledDay: string;
  scheduledDayKn: string;
  scheduledTime: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone: string;
  status: 'on_route' | 'arrived' | 'scheduled' | 'completed';
  statusEn: string;
  statusKn: string;
  currentLocationEn: string;
  currentLocationKn: string;
  etaMinutes: number;
  remainingCylinders: number;
  totalCylinders: number;
  routeStops: {
    name: string;
    nameKn: string;
    time: string;
    completed: boolean;
    current?: boolean;
  }[];
}

export interface DeliveryHistoryItem {
  id: string;
  customerName: string;
  village: string;
  date: string;
  cylinderType: string;
  subsidyStatus: 'Credited' | 'Pending';
  subsidyAmount: string;
  driverName: string;
  rating: number;
}
