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
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="cursor-pointer right-0 p-2 mx-2 rounded-full 
            bg-black/5 hover:bg-black/10 text-stone-700
            dark:bg-white/10 dark:hover:bg-white/20 dark:text-yellow-400
            border border-black/10 dark:border-white/15
            transition-all duration-300 z-10 flex items-center justify-center hover:scale-105"
        >
            {theme === 'dark' ? (
                <BsSunFill className="text-yellow-400 text-lg" />
            ): (
                <BsMoonFill className="text-secondary text-lg" />
            )}
        </button>
    )

};

export default DarkMode;

// This component is a placeholder for the dark mode toggle functionality. It currently returns a simple div with the text "Dark Mode". In the future, this component can be expanded to include a toggle switch that allows users to switch between light and dark themes.