import Image from 'next/image'

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  dark?: boolean
  iconOnly?: boolean
}

const heights = { xs: 36, sm: 48, md: 60, lg: 72 }

export function Logo({ size = 'md', dark = true, iconOnly = false }: LogoProps) {
  const h = heights[size]

  const src = iconOnly
    ? (dark ? '/assets/runflo_icon_light.png' : '/assets/runflo_icon_monochrome.png')
    : (dark ? '/assets/runflo_horizontal_dark.png' : '/assets/runflo_horizontal_light.png')

  return (
    <Image
      src={src}
      alt="runflo"
      width={h * 4}
      height={h}
      style={{ height: h, width: 'auto' }}
      className="flex-shrink-0"
      priority
    />
  )
}
