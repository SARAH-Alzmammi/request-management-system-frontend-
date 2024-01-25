'use client';

import Card from './card';
import { useQuery } from "@tanstack/react-query";
import { useSession } from 'next-auth/react'

async function fetchRequests(token: String) {
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}requests`, {
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

export default function Page() {
    const { data: session } =  useSession() as any
    const query= useQuery({ queryKey: ['requests_',session?.user?.access_token], queryFn: () => fetchRequests(session?.user?.access_token),
        enabled: !!session?.user?.access_token })
    const {data, isLoading, error } = query;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;
 return <main className="flex justify-around flex-wrap  p-5 max-w-5/6">
  <div className="flex justify-start flex-wrap  p-5 w-full">
{
    data?.data?.map((item: { title: string; status: string; description: string; id: number }) => {
    return (
     <Card key={item.id} id={item.id} title={item.title} description={item.description} status={item.status} />)
   })
     }
     </div>
 </main>
}