import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/dashboard');
  }
  return(
  <div className="flex flex-col items-center mt-6 bgR  h-screen ">
  <p className="text-5xl m-10 text-dark_blue font-medium">
    Welcome back!
  </p>
  <Form />
</div> )
}