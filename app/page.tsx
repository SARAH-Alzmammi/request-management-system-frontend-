import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <h1 className="font-bold pb-5">Welcome to the Request management system</h1>
             <ul className="flex justify-end flex-col items-center w-full">
              <li>
          <Link href="/auth/login" className="hover:text-gray-900  transition duration-150 ease-in-out w-full" >
            <button type="submit" className='border-2 rounded-md border-black text-black    p-2  px-10 mb-5   '>Sign in</button>
            </Link>
              </li>
              <li>
          <Link href="/auth/register" className="hover:text-gray-900  transition duration-150 ease-in-out">
          <button type="submit" className='border-2 rounded-md border-black text-black    p-2   px-10  w-full '>Sign up</button>
            
                </Link>
              </li>
            </ul>
    </main>
  );
}
