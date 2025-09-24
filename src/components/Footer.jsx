import { ArrowUp } from "lucide-react";


export default function Footer () {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Danylo Shevchuk. Copyleft.
            </p>
            <p className="text-xs mt-2 max-w-100 leading-relaxed">
                <span className="font-bold">Disclaimer:</span> This portfolio was created by following a YouTube
                tutorial, which originally contained many bugs and was likely written by AI. <br/>
                The progress bars in the "Skills" section are randomly generated,
                since I don't know the upper bound of how much I don't know.
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors">
                <ArrowUp />
            </a>
        </footer>
    )
}