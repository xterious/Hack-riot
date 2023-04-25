import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/jwtVerifier";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isTokenValid(token)) router.push("/home");
  });

  return (
    <main className='flex justify-center items-center py-10'>
      <section
        id='login'
        className='px-6 py-14 flex w-1/3  flex-col space-y-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 border'>
        <h1 className='text-xl font-bold text-center text-orange-500'>
          Student Register
        </h1>
        <div className='flex flex-col space-y-3 w-4/5 mx-auto'>
          <TextField
            id='outlined-controlled'
            label='First Name'
            color='warning'
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id='outlined-controlled'
            label='Last Name'
            color='warning'
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id='outlined-controlled'
            label='College Name'
            color='warning'
            required
            onChange={(e) => setCollege(e.target.value)}
          />
          <TextField
            id='outlined-controlled'
            label='Degree'
            color='warning'
            required
            onChange={(e) => setDegree(e.target.value)}
          />
          <TextField
            id='outlined-controlled'
            label='Department'
            color='warning'
            required
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextField
            id='outlined-controlled'
            label='Year of Study'
            color='warning'
            required
            onChange={(e) => setYear(e.target.value)}
          />
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
            Signup
          </Button>
        </div>
        <Link href='/' className='text-right text-sm text-gray-500'>
          Already have account? Login now!
        </Link>
      </section>
    </main>
  );
}
