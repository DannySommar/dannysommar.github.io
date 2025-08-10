import CardPanel from './CardPanel';

export default function Experience() {
  return (
    <CardPanel id="experience" title="My Experience" highlightWords="Experience">
      <div className="animate-fade-in space-y-6 text-lg md:text-xl">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Work & Volunteering</h2>
          <div className="space-y-4 pl-2 border-l-2 border-primary/30">
            <div>
              <h4 className="font-bold">Café Assistant</h4>
              <p className="text-sm text-gray-500">May 2022 - Aug 2022</p>
              <p>
                Provided customer service and managed daily operations in a busy café environment. 
                Duties included welcoming guests, presenting menus, taking and serving orders, recommending beverages
                and making sure the customers were satisfied. <br/>
                Worked 20 hours per week, the maximum allowed by my work eligibility at the time.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Retail Volunteer</h4>
              <p className="text-sm text-gray-500">Aug 2022 - Sep 2023</p>
              <p>
                Operated tills and processed transactions while managing customer data and goods. 
                Maintained and organized inventory to ensure product availability and store presentation. 
                Collaborated in a team of 3-5 people, assisting customers with product information 
                and pricing creating a welcoming shopping experience.
              </p>
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

            <div>
              <h4 className="font-medium">Crack The Code by Reply</h4>
              <p>March 2025</p>
              <p className="font-semibold">Best score of Glasgow</p>
            </div>
          </div>
        </div>
      </div>
    </CardPanel>
  );
}