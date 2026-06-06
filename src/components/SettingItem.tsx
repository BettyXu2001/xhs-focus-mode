import { useState } from 'react'
import { 
  ChevronRight, User, Settings, Bell, Lock, HardDrive, 
  Sliders, PieChart, Layers, Video, MapPin, Layout, Users, Sparkles, Clock, ChevronDown 
} from 'lucide-react'
import { SettingItem as SettingItemType } from '@/store/appStore'
import { Switch } from './Switch'

interface SettingItemProps {
  item: SettingItemType
  onSwitchChange?: (id: string, isOn: boolean) => void
  onDurationChange?: (id: string, duration: number) => void
  onClick?: () => void
}

const iconMap: Record<string, typeof User> = {
  User,
  Settings,
  Bell,
  Lock,
  HardDrive,
  Sliders,
  PieChart,
  Layers,
  Video,
  MapPin,
  Layout,
  Users,
  Sparkles,
  Clock,
}

export function SettingItem({ item, onSwitchChange, onDurationChange, onClick }: SettingItemProps) {
  const [showDurationPicker, setShowDurationPicker] = useState(false)
  const Icon = iconMap[item.icon] || Settings

  const handleClick = () => {
    if (item.type === 'timeLimit' && item.options && item.isOn) {
      setShowDurationPicker(!showDurationPicker)
    } else {
      onClick?.()
    }
  }

  return (
    <div>
      <div 
        className="setting-item flex items-center gap-4 px-4 py-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="w-10 h-10 rounded-xl bg-light-100 flex items-center justify-center text-light-600">
          <Icon size={20} />
        </div>
        <div className="flex-1 text-left">
          <span className="text-light-800 font-medium">{item.label}</span>
          {item.description && (
            <p className="text-xs text-light-400 mt-0.5">{item.description}</p>
          )}
        </div>
        {item.type === 'timeLimit' && item.isOn && item.duration && (
          <div className="flex items-center gap-1 mr-2">
            <span className="text-sm text-light-500">{item.duration}分钟</span>
            <ChevronDown size={16} className={`text-light-400 transition-transform ${showDurationPicker ? 'rotate-180' : ''}`} />
          </div>
        )}
        {item.value && item.type !== 'timeLimit' && (
          <span className="text-sm text-light-400 mr-2">{item.value}</span>
        )}
        {item.hasSwitch ? (
          <Switch 
            isOn={item.isOn || false} 
            onChange={(isOn) => {
              onSwitchChange?.(item.id, isOn)
              if (!isOn) {
                setShowDurationPicker(false)
              }
            }} 
          />
        ) : (
          <ChevronRight size={20} className="text-light-400" />
        )}
      </div>
      {showDurationPicker && item.options && (
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2 bg-light-50 rounded-xl p-3">
            {item.options.map((option) => (
              <button
                key={option}
                onClick={(e) => {
                  e.stopPropagation()
                  onDurationChange?.(item.id, option)
                  setShowDurationPicker(false)
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  item.duration === option
                    ? 'bg-accent-primary text-white'
                    : 'bg-white text-light-600 hover:bg-light-100'
                }`}
              >
                {option}分钟
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
