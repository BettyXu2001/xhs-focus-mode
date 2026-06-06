export interface ContentCard {
  id: string
  title: string
  description: string
  content: string
  author: string
  authorTag?: string
  likes: number
  imageHeight: string
  time: string
  image: string
  comments: number
  category?: string
}

export type ContentItem = ContentCard

export interface CommentItem {
  id: string
  author: string
  content: string
  likes: number
  time: string
  location: string
  replies?: CommentItem[]
}

export interface InterestItem {
  name: string
  value: number
  percentage: number
  color: string
}

export interface SettingItem {
  id: string
  label: string
  icon?: string
  description?: string
  type: 'switch' | 'navigate' | 'action' | 'timeLimit'
  value?: boolean | string
  hasSwitch?: boolean
  isOn?: boolean
  action?: string
  duration?: number
  options?: number[]
}

export const homeCards: ContentCard[] = [
  {
    id: '1',
    title: 'AI时代的个人竞争力',
    description: '昨天晚上被GPT写了一篇，意识到搞AI行动...',
    content: '在AI时代，个人竞争力不再仅仅取决于知识储备，更重要的是如何与AI协作，发挥人类独特的创造力和情感智慧。',
    author: 'Monos',
    authorTag: '你的关注',
    likes: 4017,
    imageHeight: 'h-48',
    time: '2小时前',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=AI%20technology%20concept%20with%20neural%20network%20visualization&image_size=landscape_16_9',
    comments: 234,
    category: '科技'
  },
  {
    id: '2',
    title: '实习篇-如何快速融入团队',
    description: '作为职场新人，第一周的表现至关重要...',
    content: '作为职场新人，第一周的表现至关重要。本文分享了如何快速适应企业文化、建立良好的同事关系。',
    author: '职场达人',
    likes: 826,
    imageHeight: 'h-56',
    time: '5小时前',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20office%20workspace%20with%20team%20collaboration&image_size=landscape_16_9',
    comments: 56,
    category: '职场'
  },
  {
    id: '3',
    title: '周末一人食 | 奶油培根意面',
    description: '简单又美味的周末料理',
    content: '周末给自己做一顿美味的奶油培根意面，简单又治愈。',
    author: '美食日记',
    likes: 1200,
    imageHeight: 'h-40',
    time: '昨天',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=creamy%20bacon%20pasta%20on%20white%20plate%20food%20photography&image_size=landscape_16_9',
    comments: 89,
    category: '美食'
  },
  {
    id: '4',
    title: '川西秘境 | 遇见最美的日照金山',
    description: '一次难忘的川西之旅',
    content: '川西之旅，遇见最美的日照金山，大自然的壮丽令人震撼。',
    author: '流浪地球',
    likes: 3500,
    imageHeight: 'h-52',
    time: '3天前',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=golden%20sunrise%20over%20snow%20mountains%20western%20sichuan%20china&image_size=landscape_16_9',
    comments: 156,
    category: '旅行'
  }
]

export const focusModeCards: ContentCard[] = [
  {
    id: '5',
    title: '深度思考：AI时代的个人竞争力',
    description: '深度剖析AI对职场的影响',
    content: '深度思考：AI时代的个人竞争力。如何在人工智能时代保持独特价值，成为不可替代的人才。',
    author: 'Monos',
    likes: 4017,
    imageHeight: 'h-48',
    time: '1小时前',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=deep%20thinking%20person%20with%20digital%20brain%20concept&image_size=landscape_16_9',
    comments: 189,
    category: '科技'
  },
  {
    id: '6',
    title: '年度书单：改变认知的10本书',
    description: '精选年度最有价值的书籍',
    content: '年度书单推荐，这10本书将改变你的认知方式，帮助你成为更好的自己。',
    author: '智者',
    likes: 2100,
    imageHeight: 'h-48',
    time: '4小时前',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=stack%20of%20books%20with%20glowing%20light%20knowledge%20concept&image_size=landscape_16_9',
    comments: 134,
    category: '阅读'
  }
]

export const hotSearchList = [
  { rank: 1, title: '沈阳文旅局长在线听劝', views: '128.5w', hot: true },
  { rank: 2, title: 'NotebookLM 核心玩法', views: '95.2w', new: true },
]

export const guessSearchList = [
  '大模型应用开发',
  '沈阳旅游攻略',
  'GPT-4o 使用技巧',
  '莫斯科餐厅推荐',
]

export const commentsData: CommentItem[] = [
  {
    id: '1',
    author: '星野遥',
    content: '最后一个莫斯科吧',
    likes: 5,
    time: '7小时前',
    location: '江苏'
  },
  {
    id: '2',
    author: '极客公园',
    content: '这篇分析真的很透彻，尤其是关于 PMF 的部分。',
    likes: 128,
    time: '12小时前',
    location: '同城'
  }
]

export const categories = ['推荐', '视频', '直播', '短剧', '穿搭', '美食']

export const homeContent = homeCards
export const discoverCategories = categories

export const interestData: InterestItem[] = [
  { name: '科技', value: 45, percentage: 45, color: '#6366f1' },
  { name: '美食', value: 25, percentage: 25, color: '#f97316' },
  { name: '旅行', value: 15, percentage: 15, color: '#10b981' },
  { name: '其他', value: 15, percentage: 15, color: '#94a3b8' },
]

export const screenTimeOptions = [15, 30, 60, 90, 120]


