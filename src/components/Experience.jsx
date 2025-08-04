import CardPanel from './CardPanel';

export default function Experience() {
  return (
    <CardPanel id="experience" title="My Jobs Volunteerings and Hackathons" highlightWords="My and">
      <p className="animate-fade-in text-xl mg:text-2xl">
        Café Asistant 2021-2022 <br/>
        Retail Volunteer Aug 2022 - Sep 2023<br/>
        <br/>
        Feb 2025: Top 10 place at Glasgow University Code Olympics hackathon
      </p>
    </CardPanel>
  );
}