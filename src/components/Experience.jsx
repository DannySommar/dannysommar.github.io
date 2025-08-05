import CardPanel from './CardPanel';

export default function Experience() {
  return (
    <CardPanel id="experience" title="My Experience" highlightWords="Experience">
      <div className="animate-fade-in space-y-6 text-lg md:text-xl">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Work & Volunteering</h2>
          <div className="space-y-4 pl-2 border-l-2 border-primary/30">
            <div>
              <h4 className="font-medium">Café Assistant</h4>
              <p>2021 - 2022</p>
              <p>Handled customer service and daily operations in a fast-paced café environment</p>
            </div>
            <div>
              <h4 className="font-medium">Retail Volunteer</h4>
              <p>Aug 2022 - Sep 2023</p>
              <p>Managed inventory and assisted customers at a local charity shop</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Hackathons</h2>
          <div className="space-y-4 pl-2 border-l-2 border-primary/30">
            <div>
              <h4 className="font-medium">Glasgow University Code Olympics</h4>
              <p>Feb 2025</p>
              <p className="font-semibold">Top 10 finish</p>
            </div>
          </div>
        </div>
      </div>
    </CardPanel>
  );
}