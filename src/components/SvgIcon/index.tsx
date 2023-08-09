export default function SvgIcon({
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}: {
  name: string
  prefix?: string
  color?: string
}) {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true" className="inline-block w-5 h-5">
      <use href={symbolId} fill={color} />
    </svg>
  )
}
