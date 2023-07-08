import Link from "next/link";
import { FC, useState } from "react";
import ThemeSwitcher from "../themeSwitcher";

const Header: FC = () => {
  const [activeIndicator, setActiveIndicator] = useState("home")
  const activeCondition = (child: string) => activeIndicator === child ? "font-extrabold" : "font-semibold"

  return (
    <header className="dark:bg-black">
      <nav className="flex justify-center lg:justify-between flex-wrap sm:p-3 lg:p-5">
        <div className="flex justify-around sm:text-xl lg:text-2xl w-[80%] sm:w-[85%] lg:w-[90%]">
          {NavbarChilds.map(item => (
            <Link
              key={item.key}
              href={item.link}
              className={`block mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-black dark:text-slate-200 dark:hover:text-white mr-4 ${activeCondition(item.key)}`}
              onClick={() => {setActiveIndicator(item.key)}}>
              {item.name}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}

const NavbarChilds = [
  {
    key: "home",
    name: "Home",
    link: "/",
  },
  {
    key: "blog",
    name: "Blog",
    link: "/blog",
  },
  {
    key: "projects",
    name: "Projects",
    link: "/projects",
  },
]

export default Header;