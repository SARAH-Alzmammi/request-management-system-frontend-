import Link from "next/link"


type CardType = {
 id:number,
 title: string,
 description: string,
 status: string,
}

export default function Card({id,title,description,status}:CardType) {
  return (
   <Link href={`/request/show/${id}`} className="block w-1/2 sm:w-3/12 flex-grow min-h-fit  rounded overflow-hidden shadow-lg shadow-purple-200 flex flex-col justify-between">

  <div className="px-6 py-4 h-full ">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
{description}
    </p>
  </div>

  <div className="px-6 pt-4 pb-2 ">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{status}</span>
  </div>

    </Link>
  )
}