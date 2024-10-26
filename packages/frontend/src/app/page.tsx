"use client"

import { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { MapPin, List, ThumbsUp, Zap } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

// 仮のデータ
const workouts = [
  { id: 1, user: 'ユーザー1', avatar: '/placeholder.svg?height=40&width=40', gym: 'XXジム', time: '8時間前', content: '筋トレなう', likes: 5, cheers: 3, lat: 35.6895, lng: 139.6917 },
  { id: 2, user: 'ユーザー2', avatar: '/placeholder.svg?height=40&width=40', gym: 'YYジム', time: '30分前', content: 'レッグデイ！', likes: 2, cheers: 1, lat: 35.6828, lng: 139.7530 },
]

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 35.6895,
  lng: 139.6917
}

export default function WorkoutSharingApp() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list')
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">筋トレ共有アプリ</h1>
        <div>
          <Button variant="outline" size="icon" onClick={() => setViewMode('map')} className="mr-2">
            <MapPin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setViewMode('list')}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

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
        ) : <div>Loading...</div>
      ) : (
        <div className="space-y-4">
          {workouts.map((workout) => (
            <Card key={workout.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={workout.avatar} alt={workout.user} />
                    <AvatarFallback>{workout.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{workout.user}</CardTitle>
                    <p className="text-sm text-muted-foreground">{workout.time}</p>
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
          ))}
        </div>
      )}
    </div>
  )
}