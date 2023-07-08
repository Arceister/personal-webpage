interface ChangeThemeProps {
    theme?: string,
    setTheme: (theme: string) => void
}

export const changeTheme = ({
    theme, 
    setTheme
}: ChangeThemeProps) => {
    if (theme === "dark") {
        setTheme("light")
    } else if (theme === "light") {
        setTheme("dark")
    }
}