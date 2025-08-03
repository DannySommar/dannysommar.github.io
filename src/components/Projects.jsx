import { Github } from "lucide-react";
import CardPanel from "./CardPanel";


export default function Projects () {
    return (
        <CardPanel id="projects" title="My Projects" highlightWord="My">
            

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https:github.com/DannySommar">
                    GitHub <Github  />
                </a>
            </div>
        </CardPanel>
    )
}