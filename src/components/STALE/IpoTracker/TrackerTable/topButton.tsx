export default function TopButton(props: {
  text: string
  function: () => void
}) {
  return (
    <button
      onClick={() => {
        props.function()
      }}
      id="all-ipo-tracker"
      className="text-primary cursor-pointer p-1 px-2 lg:mx-2 my-2 hover:font-semibold border"
    >
      {props.text}
    </button>
  )
}
