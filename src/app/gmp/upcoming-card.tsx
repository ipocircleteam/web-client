import Linegraph from './linegraph'

export default function UpcomingCard(props: { data: any }) {
  return (
    <div className=" w-[320px] h-[300px] rounded-lg shadow-md p-2 overflow-hidden">
      <div className="w-[100%] h-[200px] border rounded-sm">
        <Linegraph data={props.data} />
      </div>
      <h1>{props.data.name}</h1>
      <p>
        Opening date:{' '}
        <label className=" text-green-600 ">{props.data.opening_date}</label>
      </p>
      <p>
        Closing date:{' '}
        <label className=" text-red-500 ">{props.data.closing_date}</label>
      </p>
    </div>
  )
}
