'use client';
import {FormEvent} from 'react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useMutation } from "@tanstack/react-query";

const addRequest = async (title,description,status,access_token) => {
    console.log("from addRequest ",access_token)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}request`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`,
            "Accept":"application/json"

        },
        body: JSON.stringify({
            title: title,
            description:description,
            status: status,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to update user');
    }

    return response.json();
}
export default function Form() {
    const router = useRouter()
  const { data: session } = useSession()
  const {mutate, isLoading, isError, error } = useMutation({
        mutationFn: ({ title,description,status,access_token }) =>addRequest(title,description,status,access_token),
        onSuccess: () => {
            console.log(
                'sent request creation request...',
            );
        },
        onError: (err: Error) => console.log('ERROR RECEIVED:', err.message),
    });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
      const title= formData.get('title')
      const description= formData.get('description')
      const  status= formData.get('status')
      const access_token=session?.user?.access_token
      mutate({title, description, status, access_token})
      router.push('/dashboard');
      router.refresh();
  };
    if (!session?.user?.access_token) {
        return <div>Loading session...</div>;
    }
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