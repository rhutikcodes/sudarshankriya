import { NextPage } from 'next'

interface Props {}

const DownArrow: NextPage<Props> = ({}) => {
  return   <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={79}
  fill="none"
 
>
  <path
    fill="#E31010"
    d="M10.94 78.06a1.5 1.5 0 0 0 2.12 0l9.547-9.545a1.5 1.5 0 1 0-2.122-2.122L12 74.88l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122l9.546 9.546ZM10.5 0v77h3V0h-3Z"
  />
</svg>
}

export default DownArrow