import { PlayListDetail } from '@/api/playlist/type'

interface Props {
  playListDetail: PlayListDetail
}

const Header: React.FC<Props> = (props) => {
  const { playListDetail } = props
  console.log(playListDetail)

  return <div className="col-span-full">这里是header</div>
}

export default Header
