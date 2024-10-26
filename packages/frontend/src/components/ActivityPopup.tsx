import { Popup } from 'react-map-gl'
import { MapPin, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar'
import { ActivityPopupProps } from '@/app/types/types'

export function ActivityPopup({
  activity,
  onClose,
  onLike,
}: ActivityPopupProps) {
  return (
    <Popup
      longitude={activity.lng}
      latitude={activity.lat}
      anchor="top"
      onClose={onClose}
    >
      <Card className="w-64">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${activity.userId}`}
                />
                <AvatarFallback>{activity.userId.slice(0, 2)}</AvatarFallback>
              </Avatar>
              ID:{activity.userId}
            </div>
            <span className="text-sm text-muted-foreground">
              {activity.timestamp}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{activity.message}</p>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {activity.location}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLike(activity.id)}
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            応援する ({activity.likes})
          </Button>
        </CardFooter>
      </Card>
    </Popup>
  )
}
