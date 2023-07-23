import { NextPage } from 'next'

interface Props {}

const UpArrow: NextPage<Props> = ({}) => {
  return  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={79}
  fill="none"

>
  <path
    fill="#17C834"
    d="M13.06.94a1.5 1.5 0 0 0-2.12 0l-9.547 9.545a1.5 1.5 0 1 0 2.122 2.122L12 4.12l8.485 8.486a1.5 1.5 0 1 0 2.122-2.122L13.06.94ZM13.5 79V2h-3v77h3Z"
  />
</svg>
}

export default UpArrow