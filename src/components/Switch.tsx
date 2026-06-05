interface SwitchProps {
  isOn: boolean
  onChange?: (isOn?: boolean) => void
}

export function Switch({ isOn, onChange }: SwitchProps) {
  return (
    <button
      onClick={() => onChange?.(!isOn)}
      className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 ${
        isOn ? 'bg-accent-secondary' : 'bg-light-300'
      }`}
    >
      <span
        className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
