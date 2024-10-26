import { Activity } from '@/app/types/types'

export const mockActivities: Activity[] = [
  { id: '1', userId: 'GUNMA001', message: '高崎城址公園でジョギング中', location: '高崎城址公園', timestamp: '30分前', likes: 5, lat: 36.3270, lng: 139.0019 },
  { id: '2', userId: 'GUNMA002', message: '前橋公園でヨガセッション', location: '前橋公園', timestamp: '1時間前', likes: 3, lat: 36.3891, lng: 139.0637 },
  { id: '3', userId: 'GUNMA003', message: '伊香保温泉で温泉トレーニング', location: '伊香保温泉', timestamp: '2時間前', likes: 7, lat: 36.4816, lng: 138.9222 },
  { id: '4', userId: 'GUNMA004', message: '赤城山でトレイルランニング', location: '赤城山', timestamp: '3時間前', likes: 10, lat: 36.5606, lng: 139.1928 },
  { id: '5', userId: 'GUNMA005', message: '桐生が岡公園でストレッチ', location: '桐生が岡公園', timestamp: '4時間前', likes: 2, lat: 36.4053, lng: 139.3303 },
]