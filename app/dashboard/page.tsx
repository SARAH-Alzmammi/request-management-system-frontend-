'use client';
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link';
import List from '../components/list';
import {redirect} from "next/navigation";

const Dashboard = () => {
  const { data: session } =  useSession() as any
    if (!session) {
        redirect('/');
    }
  return (
    <div className="w-full p-5">
      <div
        className='flex justify-between p-2'>
        <p>Hello <span className="text-purple-500">{session?.user?.user?.name}</span></p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
      <hr/>
      <div  className='flex justify-between p-2 mt-16'>
      <h1 className='text-2xl font-bold p-2'>Requests Dashboard</h1>
      {/* button for creating a new request */}
      <Link href="/request/create" className='text-md font-bold px-2 py-2 border-2 rounded-md border-black text-center items-center hover:bg-purple-500  hover:text-white hover:border-none '>Create Request</Link>
</div>
      {/* list of all the request*/}
      <List/>
    </div>
  )
}

export default Dashboard

