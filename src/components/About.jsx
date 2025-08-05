import CardPanel from './CardPanel';

export default function About() {
  return (
    <CardPanel id="about" title="About Me" highlightWords="Me">
      <div className="animate-fade-in text-xl mg:text-2xl">
        <p>
          <span className="font-semibold">Hello, I'm Danny</span>, a passionate <span className="font-medium text-primary">Software Engineering</span> student at the University of Glasgow with consistent A-grade achievements.
        </p>
        <br/>
        <p>
          I specialize in building <span className="font-medium">clean software</span> across the stack. Be it developing full-stack applications, solving complex algorithms, or leading hackathon teams, you can <span className="font-medium">rely on me to accomplish these</span>.
        </p>
        <br/>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Core skills:</span> Java • Python • JavaScript (React + Tailwind)
          </p>
          <p>
            <span className="font-semibold">Approach:</span> Clean code • Practical design • Continuous improvement
          </p>
        </div>
        <br/>
        <p className="pt-2">
          Currently seeking <span className="font-semibold">2025-2026 internship opportunities</span> (10-12 months) to grow as a developer and contribute to projects.
        </p>
      </div>
    </CardPanel>
  );
}