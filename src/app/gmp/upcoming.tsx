import UpcomingCard from './upcoming-card'

export default function Upcoming(props: { data: any }) {
  const data = props.data
  return (
    <div>
      <div>
        <h1 className="text-[35px] font-bold text-secondary">Upcoming IPOs</h1>

        <div className="flex flex-wrap justify-around items-center">
          {/* {props.data.map((item: any) => {
            return <UpcomingCard data={item} />
          })} */}
          <UpcomingCard data={data[0]} />
          <UpcomingCard data={data[1]} />
          <UpcomingCard data={data[2]} />
        </div>
      </div>
    </div>
  )
}
