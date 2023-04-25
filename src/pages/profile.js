import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/jwtVerifier";
import Navbar from "@/components/navbar";
import logo from "../images/logo_main.png";
import ProfileCard from "@/components/profile";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/client/viewProfile",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setProfile(response.data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !isTokenValid(token)) router.push("/");
    else getProfile();
  }, []);

  if (loading)
    return (
      <div className='z-50 h-screen w-screen overflow-hidden'>
        <div className='h-[100vh] bg-[#383635]  w-full text-center flex justify-center items-center text-white font-black p-5'>
          <Image src={logo} className='animate-bounce h-52 w-52' />
        </div>
      </div>
    );

  return (
    <div>
      <section className='flex flex-col'>
        <Navbar />
        <div className='h-[95vh] flex items-center justify-center py-4 bg-gray-200'>
          <ProfileCard profile={profile} />
        </div>
      </section>
    </div>
  );
}
