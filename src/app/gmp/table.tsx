export default function Gmptable(props: { data: any }) {
  return (
    <div className="my-[50px] w-[100%] md:w-[80%] lg:w-[70%] mx-auto border rounded-lg p-1 md:p-4">
      <table className="w-[100%] border text-[12px] md:text-[18px] lg:text-[20px]">
        <tr className="grid grid-cols-6 border-collapse border font-bold text-primary items-center p-1 min-h-[50px] text-center">
          <td>IPO Name</td>
          <td>GMP(%)</td>
          <td>GMP (absolute)</td>
          <td>Issue Price</td>
          <td>Issue Size</td>
          <td>Retail Portion</td>
        </tr>
        {props.data.map((item: any) => {
          return (
            <tr
              key={item.name}
              className="grid grid-cols-6 border-collapse border items-center p-1 min-h-[50px] text-center"
            >
              <td className="">{item.name}</td>
              <td>{item.gmp_per}</td>
              <td>{item.gmp_abs}</td>
              <td>Rs. {item.issue_price}</td>
              <td>{item.issue_size}</td>
              <td>{item.retail}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
