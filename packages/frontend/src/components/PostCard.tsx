import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/TextArea'
import { NewPost } from '@/app/types/types'

interface PostWorkoutProps {
  onPost: (newPost: NewPost) => void
}

export function PostCard({ onPost }: PostWorkoutProps) {
  const [content, setContent] = useState('')
  const [gym, setGym] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim() && gym.trim()) {
      onPost({ content, gym })
      setContent('')
      setGym('')
    }
  }

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>新しい投稿</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="今日の筋トレは？"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Input
            placeholder="ジム名"
            value={gym}
            onChange={(e) => setGym(e.target.value)}
            required
          />
          <Button type="submit">
            <Send className="mr-2 h-4 w-4" />
            投稿する
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
