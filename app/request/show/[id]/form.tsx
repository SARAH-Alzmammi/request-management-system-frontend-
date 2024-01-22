'use client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useSession } from 'next-auth/react'

export default function Form({id,status}:any) {
  const router = useRouter();
  const { data: session } = useSession()


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`http://127.0.0.1:8000/api/request/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.user?.access_token}`,
        "Accept":"application/json"
    
      },
      body: JSON.stringify({
        status: formData.get('status'),
      }),
    });
    router.push('/dashboard');
    router.refresh();
  };
  return (
    <div >
        <form
      onSubmit={handleSubmit}
      className="flex flex-col text-black items-center gap-7 w-full m-1 "
    >
    <select name="status" id="select" defaultValue={status} >
      <option value="pending" >Pending</option>
      <option value="in_progress">In progress</option>
      <option value="completed">completed</option>
    </select>
            <button type="submit" className='border-2 rounded-md border-black text-black hover:bg-opacity-85  p-2     w-full sm:w-8/12'>Save</button>
            
    </form>
</div>
  );
}