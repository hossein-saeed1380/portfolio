import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

export default async function Projects() {
  const t = await getTranslations("projects");

  const projects = [
    {
      image: "/project.png",
      title: "1",
      description: "",
      website: "",
      github: ""
    },
    {
      image: "/project.png",
      title: "2",
      description: "",
      website: "",
      github: ""
    },
    {
      image: "/project.png",
      title: "3",
      description: "",
      website: "",
      github: ""
    }
  ];

  return (
    <section id="projects" className="mt-15 flex h-fit w-full">
      <div className="my-auto flex w-full flex-col items-center gap-2">
        <h1 className="text-4xl">{t("title")}</h1>
        <p className="text-2xl">{t("description")}</p>
        <div className="mt-10 flex w-full flex-wrap justify-center gap-[5rem]">
          {projects.map((project) => {
            return (
              <article
                key={project.title}
                className="relative flex h-fit w-full gap-4"
              >
                <div className="outline-divider relative h-[8rem] w-[16rem] rounded-sm border-2 border-transparent outline-2">
                  <Image src={project.image} alt="" fill className="w-full" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl">sdfsdf sdf</h3>
                  <p className="">
                    {" "}
                    sdfsd sd sd sdfewt kl;js do dfgdfg dfg dfg
                  </p>
                  <div className="flex-grow-1"></div>
                  <div className="flex gap-2">
                    <a href={project.website} className="button-icon">
                      <FaGlobe className="text-[1.2rem]" />
                    </a>
                    <a href={project.github} className="button-icon">
                      <FaGithub className="text-[1.2rem]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
