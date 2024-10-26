import { Marker } from 'react-map-gl'
import { Dumbbell } from 'lucide-react'
import { ActivityMarkerProps } from '@/app/types/types'

export function ActivityMarker({ activity, onClick }: ActivityMarkerProps) {
  return (
    <Marker
      longitude={activity.lng}
      latitude={activity.lat}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation()
        onClick(activity)
      }}
    >
      <Dumbbell className="h-6 w-6 text-primary" />
    </Marker>
  )
}