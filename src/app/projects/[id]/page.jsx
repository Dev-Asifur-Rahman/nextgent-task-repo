import ProjectDetails from "@/components/ProjectDetails";

const page = async ({params}) => {
  const res = await fetch(
    `https://nextgent-server-pxnx.vercel.app/projects?id=${params.id}`
  );
  const project = await res.json();
  return <ProjectDetails project={project}></ProjectDetails>;
};

export default page;
