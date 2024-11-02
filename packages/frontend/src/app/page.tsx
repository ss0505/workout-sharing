'use client'

import { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { MapPin, List } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PostCard } from '@/components/PostCard'
import { WorkoutCard } from '@/components/WorkoutCard'
import { Workout, NewPost } from '@/app/types/types'

const mapContainerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 35.6895,
  lng: 139.6917,
}

const initialWorkouts: Workout[] = [
  {
    id: 1,
    user: 'ユーザー1',
    avatar: '/placeholder.svg?height=40&width=40',
    gym: 'XXジム',
    time: '8時間前',
    content: '筋トレなう',
    likes: 5,
    cheers: 3,
    lat: 37.326,
    lng: 139.193,
  },
  {
    id: 2,
    user: 'ユーザー2',
    avatar: '/placeholder.svg?height=40&width=40',
    gym: 'YYジム',
    time: '30分前',
    content: 'レッグデイ！',
    likes: 2,
    cheers: 1,
    lat: 36.326,
    lng: 139.193,
  },
]

export default function WorkoutSharingApp() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list')
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const handleNewPost = (newPost: NewPost) => {
    const newWorkout: Workout = {
      id: workouts.length + 1,
      user: 'あなた',
      avatar: '/placeholder.svg?height=40&width=40',
      gym: newPost.gym,
      time: 'たった今',
      content: newPost.content,
      likes: 0,
      cheers: 0,
      lat: center.lat + (Math.random() - 0.5) * 0.1,
      lng: center.lng + (Math.random() - 0.5) * 0.1,
    }
    setWorkouts([newWorkout, ...workouts])
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">筋トレ共有アプリ</h1>
        <div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode('map')}
            className="mr-2"
          >
            <MapPin className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <PostCard onPost={handleNewPost} />

      {viewMode === 'map' ? (
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {workouts.map((workout) => (
              <Marker
                key={workout.id}
                position={{ lat: workout.lat, lng: workout.lng }}
                title={workout.user}
              />
            ))}
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div className="space-y-4">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </div>
  )
}
