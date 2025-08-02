

export default function HeroSection () {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hello, I am</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Danylo</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Shevchuk</span>
                    </h1>

                    <p className="text-lg mg:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        me is supere very kool trust
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View my work
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}