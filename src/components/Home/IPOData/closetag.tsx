export default function Closetag(props: { width: number | undefined }) {
  return (
    <div className="flex items-center justify-center rounded-lg">
      {props.width && props.width > 600 ? (
        <label className="text-center w-[100px] text-[12px] border border-red-500 text-red-500 ml-2 px-[3px] rounded-lg">
          Closing Today
        </label>
      ) : (
        <label className="text-center text-white px-[3px] rounded-full ml-1 bg-red-500 font-semibold text-[8px]">
          Closing
        </label>
      )}
    </div>
  )
}
