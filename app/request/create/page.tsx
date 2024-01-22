import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }
  return (
    
    <div className="flex flex-col items-center mt-6 bgR">
    <Form />
  </div>
)
}