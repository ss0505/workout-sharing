export type Activity = {
  id: string
  userId: string
  message: string
  location: string
  timestamp: string
  likes: number
  lat: number
  lng: number
}

export type ActivityMarkerProps = {
  activity: Activity
  onClick: (activity: Activity) => void
}

export type ActivityPopupProps = {
  activity: Activity
  onClose: () => void
  onLike: (id: string) => void
}
