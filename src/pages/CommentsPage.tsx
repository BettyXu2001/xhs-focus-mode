import { ArrowLeft, Share2, Heart, MessageCircle, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { CommentItem } from '@/components/CommentItem'
import { commentsData } from '@/data/mockData'
import { useState } from 'react'

export function CommentsPage() {
  const navigate = useNavigate()
  const [commentText, setCommentText] = useState('')
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(932)

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className="page-content bg-light-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-light-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-light-100 flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-light-600" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-primary to-accent-purple flex items-center justify-center text-white text-sm font-semibold">
                玩
              </div>
              <span className="font-medium text-light-800">玩梗加工资</span>
              <button className="ml-auto px-4 py-1.5 bg-accent-primary text-white text-sm font-medium rounded-full">
                关注
              </button>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs text-light-400">共 {likes} 条评论</span>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-light-100 flex items-center justify-center">
            <Share2 size={18} className="text-light-600" />
          </button>
        </div>
      </header>
      <div className="bg-white px-4 py-3 border-b border-light-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-orange to-accent-primary flex items-center justify-center text-white text-sm font-semibold">
            爱
          </div>
          <div className="flex-1">
            <span className="text-sm font-medium text-light-700">爱评论的人运气都不差</span>
            <div className="flex items-center gap-2 mt-1">
              <button className="px-3 py-1 bg-light-100 rounded-full text-xs text-light-500">
                @
              </button>
              <button className="w-6 h-6 rounded-full bg-light-100 flex items-center justify-center">
                <MessageCircle size={14} className="text-light-500" />
              </button>
              <button className="w-6 h-6 rounded-full bg-light-100 flex items-center justify-center">
                <Share2 size={14} className="text-light-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="px-4 py-4">
        {commentsData.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        <div className="pt-4">
          <p className="text-sm font-medium text-light-600 mb-3">猜你想搜</p>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 bg-light-100 rounded-full text-sm text-light-600">
              莫斯科耳朵是什么？
            </button>
            <button className="px-3 py-1.5 bg-light-100 rounded-full text-sm text-light-600">
              为什么第一个是焦耳？
            </button>
          </div>
        </div>
      </main>
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-light-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-light-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="写下你的评论..."
              className="flex-1 bg-transparent outline-none text-sm text-light-700 placeholder:text-light-400"
            />
            <button 
              onClick={handleLike}
              className={`p-2 rounded-full transition-colors ${liked ? 'text-accent-primary' : 'text-light-400'}`}
            >
              <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
            </button>
          </div>
          <button className="w-10 h-10 rounded-full bg-light-100 flex items-center justify-center">
            <Send size={18} className="text-light-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
