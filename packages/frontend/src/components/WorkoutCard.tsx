import { ThumbsUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Workout } from '@/app/types/types'

interface WorkoutCardProps {
  workout: Workout
}

export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={workout.avatar} alt={workout.user} />
            <AvatarFallback>{workout.user[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{workout.user}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {workout.time} - {workout.gym}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{workout.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          <ThumbsUp className="mr-2 h-4 w-4" />
          いいね！ ({workout.likes})
        </Button>
        <Button variant="ghost" size="sm">
          <Zap className="mr-2 h-4 w-4" />
          ファイト！ ({workout.cheers})
        </Button>
      </CardFooter>
    </Card>
  )
}
