import CardPanel from './CardPanel';

export default function About() {
  return (
    <CardPanel id="about" title="About Me" highlightWords="Me">
      <p className="animate-fade-in text-xl mg:text-2xl">
        Hello,<br />
        I'm a developer who builds with passion.
      </p>
    </CardPanel>
  );
}