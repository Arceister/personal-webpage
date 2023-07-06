import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
  //TODO: Change local useState to a global state (Context)
  const [activeIndicator, setActiveIndicator] = useState(0)

  const activeCondition = (child: number) => activeIndicator === child ? "font-extrabold" : "font-semibold"

  return (
    <header className="bg-black">
      <nav className="flex justify-center lg:justify-between flex-wrap sm:p-3 lg:p-5">
        <div className="w-full block">
          <div className="flex justify-around sm:text-xl lg:text-2xl">
            <Link 
              href='/' 
              className={`block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4 ${activeCondition(0)}`} 
              onClick={() => {setActiveIndicator(0)}}>
              Home
            </Link>
            <Link 
              href='/blog' 
              className={`block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4 ${activeCondition(1)}`}
              onClick={() => {setActiveIndicator(1)}}>
              Blog
            </Link>
            <Link 
              href='/projects' 
              className={`block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4 ${activeCondition(2)}`}
              onClick={() => {setActiveIndicator(2)}}>
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;