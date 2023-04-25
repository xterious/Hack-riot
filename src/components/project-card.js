import ProjectDetails from "./project-detaill";

export default function ProjectCard({ title, project }) {
  const l1 = ["Heading1", "Heading 2", "Heading 3", "Heading 4", "Heading 5"];

  return (
    <div className='flex flex-col w-1/4 rounded-2xl bg-white space-y-5 border p-7 shadow-xl'>
      <h1>{title}</h1>
      <ProjectDetails project={project} />
    </div>
  );
}
