import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Header() {
  const t = await getTranslations("header");

  const links = [
    {
      name: "About",
      unit: "01",
      path: "#about"
    },
    {
      name: "Projects",
      unit: "02",
      path: "#projects"
    }
  ];

  return (
    <header className="border-divider sticky top-0 z-100 flex h-[60px] min-h-[50px] w-full items-center border-b px-[5%] lg:px-[10%]">
      <Link
        href={"#intro"}
        className="hover:text-secondary-main hover:bg-primary-main relative flex items-center justify-center duration-300"
      >
        {t("logo")}
      </Link>
      <div className="flex-grow-1"></div>
      <div className="flex gap-18">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.path}
              className="link-underline-slider"
            >
              <span className="text-sm">{link.unit}. </span>
              <span>{t(link.name)}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
