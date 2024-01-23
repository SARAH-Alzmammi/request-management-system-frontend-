
import Card from './card';
async function getData(token: String) {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/requests`)
 const res = await await fetch(`${process.env.NEXT_PUBLIC_API_URL}requests`, {
  method: 'GET',
  mode: 'cors',
   headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  next: {
   revalidate: 60
 }
 });

 if (!res.ok) {
   throw new Error('Failed to fetch data')
 }
 return res.json()
}
export default async function Page({ token }: any) {

  const data = await getData(token)
  console.log(token)
  console.log(data)
 return <main className="flex justify-around flex-wrap  p-5 max-w-5/6">
  <div className="flex justify-start flex-wrap  p-5">
{
   data?.data?.map((item: { title: string; status: string; description: string; id: number }) => {
    return (
     <Card key={item.id} id={item.id} title={item.title} description={item.description} status={item.status} />)
   })
     }
     </div>
 </main>
}