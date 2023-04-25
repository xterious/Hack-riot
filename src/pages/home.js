import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/jwtVerifier";
import Navbar from "@/components/navbar";
import logo from "../images/logo_main.png";
import ProjectCard from "@/components/project-card";
import axios from "axios";
import { headers } from "../../next.config";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);

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

  const getAllProjects = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/client/getAllProjects?pageNo=0&pageSize=10",
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
    }, 2000);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !isTokenValid(token)) router.push("/");
    else {
      getProfile();
      getAllProjects();
    }
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
    <>
      <Navbar name={profile.firstName} />
      <div className='flex flex-col'>
        <div className='p-6 space-y-3'>
          <h1 className='font-bold text-3xl text-gray-600'>
            All Students Projects
          </h1>
          <div className='flex flex-wrap justify-center space-x-3 space-y-3'>
            {projects &&
              projects.map((project) => (
                <ProjectCard title={project.title} project={project} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
