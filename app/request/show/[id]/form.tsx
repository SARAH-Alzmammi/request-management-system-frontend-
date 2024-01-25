'use client';
import {redirect, useRouter} from 'next/navigation';
import { FormEvent } from 'react';
import { useSession } from 'next-auth/react'
import { useMutation } from "@tanstack/react-query";

const updateRequest = async (id,status,access_token) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}request/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`,
      "Accept":"application/json"

    },
    body: JSON.stringify({
      status: status,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update user');
  }

  return response.json();
}

export default function Form({id,status}:any) {
  const router = useRouter();
  const { data: session } = useSession()

  const {mutate, isLoading, isError, error } = useMutation({
    mutationFn: ({ id,status,access_token }) =>updateRequest(id,status,access_token),
    onSuccess: () => {
      console.log(
          'sent request creation request...',
      );
    },
    onError: (err: Error) => console.log('ERROR RECEIVED:', err.message),
  });


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const  status= formData.get('status')

    const access_token=session?.user?.access_token
    mutate({ id,status,access_token })
    router.push('/dashboard');
    router.refresh();

  };
  if (!session?.user?.access_token) {
    return <div>Loading session...</div>;
  }
  if (!session) {
    redirect('/');
  }
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