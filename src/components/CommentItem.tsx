import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react'
import { CommentItem as CommentItemType } from '@/data/mockData'
import { useState } from 'react'

interface CommentItemProps {
  comment: CommentItemType
  level?: number
}

export function CommentItem({ comment, level = 0 }: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(comment.likes)

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className={`border-b border-light-100 py-4 ${level > 0 ? 'pl-8' : ''}`}>
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
          {comment.author.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm text-light-800">{comment.author}</span>
            <span className="text-xs text-light-400">{comment.time}</span>
          </div>
          <p className="text-sm text-light-700 mb-2 break-words">{comment.content}</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-1 text-xs ${liked ? 'text-accent-primary' : 'text-light-400'} hover:text-accent-primary transition-colors`}
            >
              <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-1 text-xs text-light-400 hover:text-accent-primary transition-colors">
              <MessageCircle size={14} />
              <span>回复</span>
            </button>
            {comment.replies && comment.replies.length > 0 && (
              <button 
                onClick={() => setShowReplies(!showReplies)}
                className="text-xs text-accent-primary"
              >
                {showReplies ? '收起' : `展开 ${comment.replies.length} 条回复`}
              </button>
            )}
            <button className="ml-auto p-1 text-light-400 hover:text-light-600">
              <MoreHorizontal size={16} />
            </button>
          </div>
          {showReplies && comment.replies && (
            <div className="mt-3 space-y-3">
              {comment.replies.map(reply => (
                <CommentItem key={reply.id} comment={reply} level={level + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
