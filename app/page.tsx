import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800 mb-10">Welcome to the Request Management System</h1>
        <ul className="flex flex-col items-center w-3/4 md:w-1/2 lg:w-1/3">
            <li className="w-full">
          <Link href="/auth/login" className="hover:text-gray-900  transition duration-150 ease-in-out w-full" >
            <button type="submit" className="w-full py-3 px-6 text-lg font-medium text-black border border-black rounded-md shadow-sm hover:bg-purple-500  hover:text-white hover:border-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out mb-3">Sign in</button>
            </Link>
              </li>
            <li className="w-full">
          <Link href="/auth/register" className="hover:text-gray-900  transition duration-150 ease-in-out">
          <button type="submit" className="w-full py-3 px-6 text-lg font-medium text-black border border-black rounded-md shadow-sm hover:bg-purple-500  hover:text-white hover:border-none  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out">Sign up</button>
            
                </Link>
              </li>
            </ul>
    </main>
  );
}
