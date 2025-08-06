import { Sun, Moon } from "lucide-react"
import {useEffect, useState} from 'react'

import {cn} from '../lib/utils'

export default function ThemeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [])


    function toggleTheme() {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        
        setIsDarkMode(prev => !prev);
    }

    return <button 
        className={cn("p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}
        onClick={toggleTheme}>
        {isDarkMode ? <Sun className="h-7 w-7 text-yellow-300"/> : <Moon className="h-7 w-7 text-blue-900"/>}
    </button>
}