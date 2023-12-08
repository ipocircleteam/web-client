import UpcomingCard from './upcoming-card'

export default function Upcoming(props: { data: any }) {
  const data = props.data
  return (
    <div>
      <div>
        <h1 className="text-[35px] font-bold text-secondary">Upcoming IPOs</h1>

        <div className="flex flex-wrap justify-center items-center">
          {props.data.map((item: any) => {
            return <UpcomingCard key={item.name} data={item} />
          })}
        </div>
      </div>
    </div>
  )
}
