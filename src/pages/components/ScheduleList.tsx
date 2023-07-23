import { NextPage } from 'next'

interface Props {
  date:string
  list:string []
}

const ScheduleList: NextPage<Props> = ({date,list}) => {
  return <div className="border py-5 pl-5 rounded w-[365px]">
    <div className="text-secondary text-lg font-semibold">
      {date}
    </div>
    <ul className="list-disc pl-5 space-y-[14px] mt-[14px]">
     {list.map((item,ind)=><li className="opacity-70" key={ind}>{item}</li>)}
    </ul>
  </div>
}

export default ScheduleList