import React, { useEffect, useState} from 'react'
import { BsMoonFill, BsSunFill } from "react-icons/bs"

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    )

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') {
            root.classList.add ('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button onClick={toggleTheme}className="cursor-pointer absolute right-0 px-1 mx-4 py-1 
        rounded-full bg-primary/20 dark:bg-accent/20 border-none
        transition-all duration-300 z-10">
            {theme === 'dark' ? (
                <BsSunFill className="text-yellow-400 text-xl" />
            ): (
                <BsMoonFill className="text-primary-dark text-xl" />
            )}
        </button>
    )

};

export default DarkMode;

// This component is a placeholder for the dark mode toggle functionality. It currently returns a simple div with the text "Dark Mode". In the future, this component can be expanded to include a toggle switch that allows users to switch between light and dark themes.