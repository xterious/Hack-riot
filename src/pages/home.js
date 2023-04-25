import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/jwtVerifier";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token == null || !isTokenValid(token))
  //       router.push("/");
  // }, []);

  return (
    <div>
      <section className="flex flex-col">
        <Navbar />  
      </section>
    </div>
  );
}
