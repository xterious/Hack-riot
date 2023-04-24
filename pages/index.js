import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Login from '../components/login';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Head>
      <title>Mugirar Corp</title>
      <link rel="icon" href="/logo1.ico" />
    </Head>
      <div>
        <Login/>
      </div>
  </div>
  )
}
