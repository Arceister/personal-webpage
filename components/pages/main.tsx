import { FC } from "react";
import Typewriter from "../../hooks/type-writer";

const Main: FC = () => {
  return (
    <div className="pt-[10%] pb-[35%] sm:pb-[20%] mx-[20%] lg:py-[7%] text-slate-900 text-[#1B1C1E] dark:text-[#FEFEFE]">
      <div>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold pb-[1rem]"><Typewriter text="Hello there!" delay={100}/></p>
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold"><span className="text-lg sm:text-xl lg:text-2xl pr-[5px] lg:pr-[8px] font-normal">I&apos;m</span>Jagad Nabil Tuah Imanda</p>
      </div>
      <p className="mt-[10%] lg:mt-[6%] text-xl sm:text-2xl lg:text-3xl text-center">I&apos;m a <span className="font-bold">Software Engineer</span> that can do <span className="font-bold">Backend Development</span> and <span className="font-bold">Frontend Development</span>. I&apos;m also interested in <span className="font-bold">Server-Side</span> and <span className="font-bold"> Infrastructure Engineering</span> related things. Currently, I&apos;m working as a <span className="font-bold">Software Engineer</span> at <span className="font-bold">Tokopedia</span>.</p>
    </div>
  )
}

export default Main;