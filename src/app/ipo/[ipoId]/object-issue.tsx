import { ObjectIssueType } from '../data.types'

export default function ObjectIssue(props: { data: ObjectIssueType }) {
  return (
    <div id="objectOfIssue" className="my-[40px] mt-[60px] mb-[50px] w-[95%]">
      <label className="text-primary text-[1.2rem] font-bold">
        Object of the issue
      </label>
      <p className="w-[90%] mx-auto">{props.data.text}</p>
    </div>
  )
}
