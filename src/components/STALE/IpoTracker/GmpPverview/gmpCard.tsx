export default function GmpCard(props: { data: any }) {
  var bgColor
  var titleColor

  if (props.data.name === 'Mainline IPOs') {
    bgColor = 'bg-blue-50'
    titleColor = 'text-primary'
  } else if (props.data.name === 'SME IPOs') {
    bgColor = 'bg-yellow-50'
    titleColor = 'text-yellow-600'
  } else {
    bgColor = 'bg-green-50'
    titleColor = 'text-green-500'
  }

  return (
    <div className={`border rounded-md m-2 mx-auto shadow-md w-[300px] `}>
      <div className="border-b text-[20px]">
        <h1 className={`${titleColor} font-bold p-2 ${bgColor}`}>
          {props.data.name}
        </h1>
      </div>
      <div className="flex justify-around p-2">
        <div>
          <p>No. of. IPOs</p>
          <p>Positive Listing</p>
          <p>Negative Listing</p>
          <p>Above GMP Listing</p>
          <p>Below GMP Listing</p>
        </div>
        <div>
          <p>{props.data.stats.ipos}</p>
          <p className="text-green-700 font-semibold">
            {props.data.stats.positive}
          </p>
          <p className="text-red-700 font-semibold">
            {props.data.stats.negative}
          </p>
          <p className="text-green-700 font-semibold">
            {props.data.stats.above_gmp}
          </p>
          <p className="text-red-700 font-semibold">
            {props.data.stats.below_gmp}
          </p>
        </div>
      </div>
    </div>
  )
}
