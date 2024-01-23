'use client';
import { FormEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter()
  const { data: session } = useSession()


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}request`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.user?.access_token}`,
          "Accept":"application/json"
    
      },
      body: JSON.stringify({
        title: formData.get('title'),
        description: formData.get('description'),
        status: formData.get('status'),
      }),
    });

    router.push('/dashboard');
    router.refresh();
  };
  return (
    <div className="bg-white w-3/4 sm:w-96 rounded-lg drop-shadow-xl s p-5 text-center">
          <form
      onSubmit={handleSubmit}
      className="flex flex-col text-black items-center gap-7 w-full m-1 "
      >
              <input
        name="title"
          className="bg-transparent border-2 rounded-md border-black p-2  "
          placeholder='Enter request title'
        type="name"
      />
      <input
        name="description"
          className="bg-transparent border-2 rounded-md border-black p-2  "
          placeholder='Enter request description'

        type="description"
        />
        <select name="status" id="select" defaultValue='pending'>
   <option value="pending" >Pending</option>
   <option value="in_progress">In progress</option>
   <option value="completed">completed</option>
</select>
      <button type="submit" className='border-2 rounded-md border-black text-black hover:bg-opacity-85  p-2     w-full sm:w-8/12'>Create</button>
    </form>
</div>
  );
}