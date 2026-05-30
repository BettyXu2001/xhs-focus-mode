import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { ContentItem } from '@/data/mockData'

interface CardProps {
  content: ContentItem
  onClick?: () => void
}

export function Card({ content, onClick }: CardProps) {
  return (
    <div 
      className="content-card bg-white rounded-2xl overflow-hidden border border-light-100 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-purple flex items-center justify-center text-white text-sm font-semibold">
            {content.author.charAt(0)}
          </div>
          <span className="text-sm font-medium text-light-800">{content.author}</span>
          <span className="text-xs text-light-400 ml-auto">{content.time}</span>
        </div>
        <h3 className="text-lg font-semibold text-light-900 mb-2 line-clamp-2">
          {content.title}
        </h3>
        <p className="text-sm text-light-500 line-clamp-3 mb-3">
          {content.content}
        </p>
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
        <div className="flex items-center gap-4 text-sm">
          <button className="flex items-center gap-1 text-light-500 hover:text-accent-primary transition-colors">
            <Heart size={18} />
            <span>{content.likes > 1000 ? `${(content.likes / 1000).toFixed(1)}k` : content.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-light-500 hover:text-accent-primary transition-colors">
            <MessageCircle size={18} />
            <span>{content.comments}</span>
          </button>
          <button className="flex items-center gap-1 text-light-500 hover:text-accent-primary transition-colors ml-auto">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
