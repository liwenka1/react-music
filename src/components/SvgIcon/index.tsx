import { SyntheticEvent } from 'react'

interface Props {
  className?: string
  name: string
  prefix?: string
  color?: string
  onClick?: (e: SyntheticEvent) => void
}

const SvgIcon: React.FC<Props> = ({
  className,
  name,
  prefix = 'icon',
  color,
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
