export function StatusBar() {
  return (
    <div className="status-bar">
      <span>12:00</span>
      <div className="flex items-center gap-1">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <path d="M1 4.5C1 3.67 1.67 3 2.5 3h2C5.33 3 6 3.67 6 4.5v3C6 8.33 5.33 9 4.5 9h-2C1.67 9 1 8.33 1 7.5v-3z" />
          <path d="M7 2.5C7 1.67 7.67 1 8.5 1h2c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-2c-.83 0-1.5-.67-1.5-1.5v-7z" />
          <path d="M13 0.5C13 0.22 13.22 0 13.5 0h2c.28 0 .5.22.5.5v11c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-11z" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2C5.79 2 4 3.79 4 6c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zm0 5.5C7 7.5 6 6.73 6 6c0-.73 1-1.5 2-1.5s2 .77 2 1.5c0 .73-1 1.5-2 1.5z" />
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" fill="none" />
          <rect x="2" y="2" width="17" height="8" rx="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}