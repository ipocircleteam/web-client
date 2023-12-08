import Linegraph from './linegraph'

export default function UpcomingCard(props: { data: any }) {
  return (
    <div className=" w-[320px] h-[300px] rounded-lg shadow-md p-2 overflow-hidden mx-4 text-center">
      <div className="w-[100%] h-[200px] overflow-hidden border rounded-sm">
        <Linegraph data={props.data.gmp} />
      </div>
      <h1 className="text-primary text-[18px] font-semibold">
        {props.data.name}
      </h1>
      <p>
        Opening date:
        <label className=" text-green-600 ">{props.data.opening_date}</label>
      </p>
      <p>
        Closing date:
        <label className=" text-red-500 ">{props.data.closing_date}</label>
      </p>
    </div>
  )
}
