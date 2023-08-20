interface Props {
  className: string
  name: string
  prefix?: string
  color?: string
  onClick?: () => void
}

const SvgIcon: React.FC<Props> = ({
  className,
  name,
  prefix = 'icon',
  color = '#333',
  onClick,
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true" className={className} onClick={onClick}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
