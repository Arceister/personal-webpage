import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { changeTheme } from "../utils/changeTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="rounded text-2xl sm:text-2xl lg:text-3xl cursor-pointer py-4 sm:p-4 lg:p-0"
      onClick={() => changeTheme({theme, setTheme})}>
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </div>
  )
}

export default ThemeSwitcher