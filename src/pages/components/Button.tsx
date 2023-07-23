import RightArrow from '@/Svg/RightArrow'
import { NextPage } from 'next'

interface Props {}

const Button: NextPage<Props> = ({}) => {
  return <button className="text-white w-[330px] h-[42px] rounded bg-secondary">
  Join WhatsApp Group Now <RightArrow />
</button>
}

export default Button