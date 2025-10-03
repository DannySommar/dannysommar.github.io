import { X, Menu, Download } from "lucide-react"
import { useEffect, useState } from 'react';

import {cn} from '../lib/utils'

import ThemeToggle from './ThemeToggle';

const resume = "/documents/Danny_CV.docx"

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Experience", href: "#experience"},
    {name: "Contact", href: "#contact"},
]

export default function Navbar () {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/50 shadow-border shadow-xs" : "py-5",
            !isMenuOpen && "backdrop-blur-md"
        )} >

            <div className='container flex items-center justify-between'>
                <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Danny</span> Portfoilio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    <div className="bg-card border-1 border-border backdrop-blur-sm px-6 py-2 rounded-lg space-x-8">
                        {navItems.map((item, key) => (
                            <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                            {item.name}
                            </a>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <a className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full",
                            "bg-primary text-primary-foreground font-medium",
                            "hover:bg-primary/90 transition-colors",
                            "text-sm sm:text-base"
                            )}
                        href={resume}
                        terget="_blank">
                            <Download className="w-4 h-4" />
                            View My CV
                        </a>
                        
                        <ThemeToggle />
                    </div>
                </div>

                
                {/* mobile nav */}

                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/50 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl items-center">
                        {navItems.map((item, key) => (
                            <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {item.name}
                            </a>
                        ))}

                        <ThemeToggle />
                    </div>
                </div>

            </div>

            
        </nav>
    )
}