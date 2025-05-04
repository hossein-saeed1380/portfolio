import { getTranslations } from "next-intl/server";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaUpwork } from "react-icons/fa6";

export default async function About() {
  const t = await getTranslations("about");

  const links = [
    {
      title: "github",
      path: "https://github.com/saeed00014",
      icon: <FaGithub className="text-2xl" />
    },
    {
      title: "linkedin",
      path: "https://www.linkedin.com/in/hosein-saeed-b21077275/",
      icon: <FaLinkedin className="text-2xl" />
    },
    {
      title: "upwork",
      path: "https://www.upwork.com/",
      icon: <FaUpwork className="text-2xl" />
    }
  ];

  return (
    <section className="flex h-fit w-full flex-col gap-2">
      <h1 className="text-4xl">{t("title")}</h1>
      <hr />
      <p className="text-2xl">{t("description")}</p>
      <div className="mt-4 flex gap-6">
        {links.map((link) => {
          return (
            <a href={link.path} key={link.title} className="button-icon">
              {link.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
}
