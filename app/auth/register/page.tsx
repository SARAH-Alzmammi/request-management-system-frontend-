import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return (
    
    <div className="flex flex-col items-center mt-6 bgR">
    <p className="text-5xl p-10 text-black font-medium">
      Welcome
    </p>
    <Form />
  </div>
)
}