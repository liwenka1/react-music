export default function SvgIcon({
  className,
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}: {
  className: string
  name: string
  prefix?: string
  color?: string
}) {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true" className={className}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}
