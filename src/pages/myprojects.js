import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/jwtVerifier";
import Navbar from "@/components/navbar";
import logo from "../images/logo_main.png";
import UploadProject from "@/components/upload-modal";
import ProjectCard from "@/components/project-card";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

const inter = Inter({ subsets: ["latin"] });
export default function Myproject() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(false);

  const getMyProjects = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/client/getMyProjects?pageNo=0&pageSize=10",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setProjects(response.data.content);
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
    else getMyProjects();
  }, []);

  if (loading)
    return (
      <div className='z-50 h-screen w-screen overflow-hidden'>
        <div className='h-[100vh] bg-[#383635]  w-full text-center flex justify-center items-center text-white font-black p-10'>
          <Image src={logo} className='animate-bounce h-52 w-52' />
        </div>
      </div>
    );

  return (
    <div>
      <section className='flex flex-col'>
        <Navbar />
        <div className='p-6'>
          <UploadProject />
        </div>
        <div className='p-6 space-y-3'>
          <h1 className='font-bold text-3xl text-gray-600'>My Projects</h1>
          <div className='flex flex-wrap justify-center space-x-3 space-y-3'>
            {projects &&
              projects.map((project) => (
                <ProjectCard title={project.title} project={project} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
