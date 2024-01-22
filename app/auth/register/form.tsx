'use client';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
       password: formData.get('password'),
        name: formData.get('name'),
      }),
    });
    console.log({ response });
  };
  return (
    <div className="bg-white w-3/4 sm:w-96 rounded-lg drop-shadow-xl s p-5 text-center">
          <form
      onSubmit={handleSubmit}
      className="flex flex-col text-black items-center gap-7 w-full m-1 "
      >
              <input
        name="name"
          className="bg-transparent border-2 rounded-md border-black p-2  "
          placeholder='Enter your name'
        type="name"
      />
      <input
        name="email"
          className="bg-transparent border-2 rounded-md border-black p-2  "
          placeholder='Enter your email'

        type="email"
      />
      <input
        name="password"
          className="bg-transparent border-2 rounded-md border-black p-2  "
          placeholder='Enter your password'

        type="password"
      />
      <button type="submit" className='border-2 rounded-md border-black text-black hover:bg-opacity-85  p-2     w-full sm:w-8/12'>Register</button>
    </form>
</div>
  );
}