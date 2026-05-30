import { 
  ChevronRight, User, Settings, Bell, Lock, HardDrive, 
  Sliders, PieChart, Layers, Video, MapPin, Layout, Users, Sparkles 
} from 'lucide-react'
import { SettingItem as SettingItemType } from '@/data/mockData'
import { Switch } from './Switch'

interface SettingItemProps {
  item: SettingItemType
  onSwitchChange?: (id: string, isOn: boolean) => void
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
}

export function SettingItem({ item, onSwitchChange, onClick }: SettingItemProps) {
  const Icon = iconMap[item.icon] || Settings

  return (
    <div 
      className="setting-item flex items-center gap-4 px-4 py-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-xl bg-light-100 flex items-center justify-center text-light-600">
        <Icon size={20} />
      </div>
      <span className="flex-1 text-left text-light-800 font-medium">{item.label}</span>
      {item.value && (
        <span className="text-sm text-light-400 mr-2">{item.value}</span>
      )}
      {item.hasSwitch ? (
        <Switch 
          isOn={item.isOn || false} 
          onChange={(isOn) => onSwitchChange?.(item.id, isOn)} 
        />
      ) : (
        <ChevronRight size={20} className="text-light-400" />
      )}
    </div>
  )
}
