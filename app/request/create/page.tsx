import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  return (
    
    <div className="flex flex-col items-center mt-6 bgR">
        <p className="text-5xl m-10 text-dark_blue font-medium">
   Create a request
  </p>
    <Form />
  </div>
)
}