import { ObjectIssueType } from '../../../app/ipo/data.types'

export default function ObjectIssue(props: { data: ObjectIssueType }) {
  return (
    <div id="objectOfIssue" className="my-[40px] mb-[50px] w-[95%]">
      <label className="text-primary text-[1.2rem] font-bold">
        Object of the issue
      </label>
      <p className="w-[100%] mx-auto">{props.data.text}</p>
    </div>
  )
}
