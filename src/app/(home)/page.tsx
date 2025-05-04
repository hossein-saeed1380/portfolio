import { getTranslations } from "next-intl/server";
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="flex h-full flex-col overflow-auto scroll-smooth px-[5%] lg:px-[10%]">
      <div className="min-h-full">
        <Intro />
      </div>
      <div id="about" className="flex min-h-full items-center">
        <div className="flex gap-[5%] lg:gap-[10%]">
          <About />
          <Skills />
        </div>
      </div>
      <div className="min-h-full">
        <Projects />
      </div>
    </div>
  );
}
