import { Sun, Moon } from "lucide-react"
import {useState} from 'react'

export default function ThemeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleTheme() {
        if (isDarkMode)
            document.documentElement.classList.remove("dark");
        else
            document.documentElement.classList.add("dark");
        
        setIsDarkMode(prev => !prev);
    }

    return <button onClick={toggleTheme}>{isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
}