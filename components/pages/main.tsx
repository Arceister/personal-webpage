import { FC } from "react";

const Main: FC = () => {
  return (
    <div className="pt-[10%] pb-[35%] sm:pb-[20%] mx-[20%] lg:py-[7%] text-slate-900 text-[#1B1C1E] dark:text-[#FEFEFE]">
      <div>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold pb-[1rem]">Hello there!</p>
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold"><span className="text-lg sm:text-xl lg:text-2xl pr-[5px] lg:pr-[8px] font-normal">I&apos;m</span>Jagad Nabil Tuah Imanda</p>
      </div>
      <p className="mt-[10%] lg:mt-[6%] text-xl sm:text-2xl lg:text-3xl text-center">I&apos;m a <span className="font-extrabold">self-proclaimed Software Engineer</span> that can do <span className="font-extrabold">Frontend Development</span> and <span className="font-extrabold">Backend Development</span> well. Through, right now I&apos;m mainly focusing on <span className="font-extrabold">Server-Side</span> and <span className="font-extrabold">Infrastructure Engineering</span> because I work as an <span className="font-extrabold">IT Engineer (API Gateway)</span> at <span className="font-extrabold">IT Group</span>.</p>
    </div>
  )
}

export default Main;