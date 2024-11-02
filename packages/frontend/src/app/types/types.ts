export interface Workout {
  id: number
  user: string
  avatar: string
  gym: string
  time: string
  content: string
  likes: number
  cheers: number
  lat: number
  lng: number
}

export type ActivityMarkerProps = {
  activity: Workout
  onClick: (activity: Workout) => void
}

export type WorkoutPopupProps = {
  activity: Workout
  onClose: () => void
  onLike: (id: string) => void
}

export interface NewPost {
  content: string
  gym: string
}
