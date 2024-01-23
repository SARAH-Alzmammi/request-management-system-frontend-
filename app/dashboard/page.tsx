'use client';
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link';
import List from '../components/list';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
  const { data: session } = useSession()
  return (
    <div className="w-full">
      <div
        className='flex justify-around p-2'>
        <p>Hello {session?.user?.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
      <hr/>
      <div  className='flex justify-around p-2 mt-16'>
      <h1 className='text-2xl font-bold p-2'>Requests Dashboard</h1>
      {/* button for creating a new request */}
      <Link href="/request/create" className='text-md font-bold px-1 py-2 border-2 rounded-md border-black text-center items-center'>Create Request</Link>
</div>
      {/* list of all the request*/}
      <List token={ session?.user?.access_token}/>
    </div>
  )
}

export default Dashboard

