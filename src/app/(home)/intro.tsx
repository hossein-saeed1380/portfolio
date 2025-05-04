import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { BsMouse } from "react-icons/bs";

export default async function Intro() {
  const t = await getTranslations("home");

  return (
    <section
      id="intro"
      className="relative flex h-full w-full justify-center gap-[5%] lg:gap-[10%]"
    >
      <div className="my-auto flex w-[60%] flex-col gap-6">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <h2 className="text-justify text-2xl grayscale-50">
          {t("description1")}
        </h2>
        <Link href={"/#projects"} className="link-bg-slider w-[14rem]">
          <span>{t("projects")}</span>
        </Link>
      </div>
      <div className="flex-grow-1"></div>
      <div className="my-auto flex w-[40%] flex-col items-end gap-2">
        <div className="bg-background-paper outline-divider relative h-[20rem] w-[20rem] overflow-hidden rounded-full border-4 border-transparent outline-4">
          <Image alt="profile image" src="/profile-image.jpg" fill />
        </div>
      </div>
      <Link
        href={"/#about"}
        className="hover:text-secondary-main absolute bottom-6 animate-bounce duration-300"
      >
        <BsMouse className="text-4xl" />
      </Link>
    </section>
  );
}
