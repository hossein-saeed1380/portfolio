import { getTranslations } from "next-intl/server";

export default async function Skills() {
  const t = await getTranslations("skills");

  const skills = [
    {
      title: "HTML",
      category: ""
    },
    {
      title: "CSS",
      category: ""
    },
    {
      title: "Tailwind CSS",
      category: ""
    },
    {
      title: "MUI",
      category: ""
    },
    {
      title: "Javascript",
      category: ""
    },
    {
      title: "Typescript",
      category: ""
    },
    {
      title: "ReactJs",
      category: ""
    },
    {
      title: "NextJs",
      category: ""
    },
    {
      title: "NodeJs",
      category: ""
    },
    {
      title: "ExpressJs",
      category: ""
    },
    {
      title: "SQL",
      category: ""
    },
    {
      title: "MongoDB",
      category: ""
    },
    {
      title: "Git",
      category: ""
    }
  ];

  return (
    <section className="flex h-fit w-full">
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-4xl">{t("title")}</h1>
        <hr />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            return (
              <span className="group hover:text-secondary-main border-divider relative flex justify-center rounded-full border-2 p-2 duration-300">
                {skill.title}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
