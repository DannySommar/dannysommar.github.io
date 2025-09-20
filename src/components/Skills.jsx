import { useState, useEffect } from 'react';
import CardPanel from './CardPanel';
import { ChevronDown } from 'lucide-react';

const skills = [
  { name: "HTML/CSS", source: "University" },
  { name: "JavaScript", source: "University" },
  { name: "React.js", source: "Scrimba" },
  { name: "Node.js", source: "Scrimba" },
  { name: "Express.js", source: "Scrimba" },
  { name: "Python", source: "University" },
  { name: "Java", source: "University" },
  { name: "C++", source: "learncpp.com" },
  { name: "Docker", source: "Many hours of YouTube" },
  { name: "Django", source: "University" },
  { name: "PostgreSQL", source: "these progress bars are stupid" },
];

export default function Skills() {
  const [showSkills, setShowSkills] = useState(false);
  const [progressWidths, setProgressWidths] = useState([]);

  useEffect(() => {
    const widths = skills.map(() => Math.floor(Math.random() * 70) + 40); // Can we just agree it's useless?
    setProgressWidths(widths);
  }, [showSkills])

  function toggleSkills() {
    setShowSkills(prev => !prev);
  }

  return (
    <CardPanel id="skills" title="Skills">
      <p className="animate-fade-in text-xl mg:text-2xl mb-10">
        I am well-versed in general-purpose programming languages such as Python, Java, C++ in addition to  <br/> unit-test frameworks.
        <br/><br/>
        For web development, I have experience with HTML, TailwindCSS, JavaScript, React, Node, Express, and the Django framework.
      </p>

      <div className="flex justify-center mb-6">
        <button onClick={toggleSkills} className="cosmic-button flex items-center gap-2">
          {showSkills ? 'Hide Skills' : 'Show Skills'} 
          <ChevronDown className={ `text-primary-foreground transition-transform duration-300 ${showSkills ? 'rotate-180' : ''}` }/>
        </button>
      </div>

      {showSkills && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border shadow-xs hover:bg-card-hover transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-xl text-primary">{skill.name}</h3>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{skill.source}</span>
              </div>
              <div className="w-full bg-border rounded-full h-2 overflow-visible">
                <div 
                  className="h-2 rounded-full bg-primary transition-all duration-700 ease-out animate-[grow_1.5s_ease-out]" 
                  style={{ width: `${progressWidths[index] || 0}%` }}
                >
                </div>
              </div>
            </div> 
          ))}
        </div>
      )}
    </CardPanel>
  );
}