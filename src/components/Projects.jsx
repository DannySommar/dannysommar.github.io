import { Github } from "lucide-react";
import CardPanel from "./CardPanel";


const projects =[
    {
        id: 1,
        title: "Chess",
        description: "Allows you to play normal chess, chess 960 and others with wacky moves. 90% finished.",
        image: "/projects/java-chess.png",
        githubUrl: "https://github.com/DannySommar/java-chess-maven",
        tags: ["Java"]
    },

    // {
    //     id: 2,
    //     title: "Picture classifier",
    //     description: "Allows you to pass in images or a folder to be categorised with an OpenAI key. Currently under development.",
    //     image: "/projects/image-categoriser.png",
    //     githubUrl: "https://github.com/PavloMatveiev/Pictures-AI-Classifier",
    //     tags: ["Python, AI"]
    // },

    {
        id: 3,
        title: "Django game",
        description: "An adventure web-game made with Django where you can also earn achivements and view othe player's scores",
        image: "/projects/adventure-game.png",
        githubUrl: "https://github.com/DannySommar/django_adventure_game",
        tags: ["Python, js, css, html, Django"]
    },

    {
        id: 4,
        title: "Poor mans social media",
        description: "A full stack application where you can make posts, wrapped in Docker. Currently under development.",
        image: "/projects/showcase-app-docker.png",
        githubUrl: "https://github.com/DannySommar/showcase-app-docker",
        tags: ["Express.js, React, postgreSQL, Docker"]
    },
]

export default function Projects () {
    return (
        <CardPanel id="projects" title="My Projects" highlightWords="My">

            {/* desktop nav */}
            <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
                    <div key={project.id}
                        className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 h-64"
                    >
                        
                        <img src={project.image} alt={`${project.title} thumbnail`} className="w-full h-full object-cover" />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            
                            <div className="flex justify-between items-center">
                                <a className="text-primary hover:text-primary-foreground transition-colors"
                                target="_blank"
                                href={project.githubUrl}>
                                    <Github className="w-5 h-5" />
                                </a>
                                <span className="text-xs text-gray-400">{project.tags}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* mobile nav */}

            <div className='grid grid-cols-1 gap-8 md:hidden'>
                {projects.map((project) => (
                    <div key={project.id}
                        className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 h-64"
                    >
                        
                        <img src={project.image} alt={`${project.title} thumbnail`} className="w-full h-full object-cover" />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-100 transition-opacity duration-300">
                            <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            
                            <div className="flex justify-between items-center">
                                <a className="text-primary hover:text-primary-foreground transition-colors"
                                target="_blank"
                                href={project.githubUrl}>
                                    <Github className="w-5 h-5" />
                                </a>
                                <span className="text-xs text-gray-400">{project.tags}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/DannySommar">
                    GitHub <Github  />
                </a>
            </div>
        </CardPanel>
    )
}