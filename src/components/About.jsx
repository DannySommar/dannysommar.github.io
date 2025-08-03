import CardPanel from './CardPanel';

export default function About() {
  return (
    <CardPanel id="about" title="About Me" highlightWord="Me">
      <p className="animate-fade-in">
        Hello,<br />
        I'm a developer who builds with passion.
      </p>
    </CardPanel>
  );
}