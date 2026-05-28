const stats = [
  { value: 'MIT', label: 'License' },
  { value: '3', label: 'Core primitives' },
  { value: '∞', label: 'Agent uptime' },
  { value: '0', label: 'State loss on crash' },
]

export default function Stats() {
  return (
    <div className="relative border-y border-white/[0.06] bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-[#71717a]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
