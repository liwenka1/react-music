export default function SvgIcon({
  className,
  name,
  prefix = 'icon',
  color = '#333',
  onClick,
  ...props
}: {
  className: string
  name: string
  prefix?: string
  color?: string
  onClick?: () => void
}) {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true" className={className} onClick={onClick}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}
