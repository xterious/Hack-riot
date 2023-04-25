import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isTokenValid } from '@/utils/jwtVerifier';

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token && isTokenValid(token))
      router.push("/home");
  })

  return (
    <main className='h-[100vh] flex justify-center items-center'>
      <section
        id='login'
        className='p-6 flex w-1/3  flex-col space-y-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 border'>
        <h1 className='text-xl font-bold text-center text-orange-500'>
          Student Login
        </h1>
        <div className='flex flex-col space-y-6 w-4/5 mx-auto'>
          <TextField
            id='outlined-controlled'
            label='Email'
            color='warning'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='outlined-controlled'
            label='Password'
            type='password'
            color='warning'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant='outlined'
            color='warning'
            type='submit'
            onClick={() => alert(email + " " + password)}>
            Login
          </Button>
        </div>
        <Link href="/register" className='text-right text-sm text-gray-500'>
          New here? Signup now!
        </Link>
      </section>
    </main>
  );
}
