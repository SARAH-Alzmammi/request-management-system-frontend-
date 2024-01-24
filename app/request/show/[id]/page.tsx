import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants"
import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { notFound } from "next/navigation"
import Form from "./form";
// export const dynamicParams = TURBO_TRACE_DEFAULT_MEMORY_LIMIT

async function getRequest(id:number,access_token:String) {

 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}request/${id}`, {
  headers: {
   "Content-Type": "application/json",
   "Accept": "application/json",
   "Authorization": `Bearer ${access_token}`,
 },
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }
  console.log(res)

  return res.json()
}


export default async function RequestDetails({ params }:any) {
  const session = await getServerSession() as  any
  const request = await getRequest(params.id, session?.user?.access_token)
  return (
   <main className="items-center p-3">
   
    <Link href="/dashboard" className='text-md font-bold px-1 py-2 border-2 rounded-md border-black text-center mx-auto'>Back</Link>
    <div className="max-w-lg rounded overflow-hidden shadow-lg justify-around mx-auto mt-16 p-5">
    <nav>
     <h2 className="font-semibold text-xl">Request Details</h2>
     <hr/>
      </nav>
      <div className=" card font-semibold text-lg mb-2 p-2">
        <h3  >Title: <span className="font-normal">{request.data.title}</span></h3>
          <p>Description: <span className="font-normal">{request.data.description}</span></p>
        </div>
        <Form id={ params.id} status={request.data.status} />

 </div>
</main>
  )
}