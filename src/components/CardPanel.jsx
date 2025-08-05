import {cn} from '../lib/utils'

const img = "/images/pfp.png"

export default function CardPanel({ children, id, title, highlightWords }) {
  // need to false-chech because some sections might not have highlightwords, and that causes nothing to load without this.
  const highlightArray = highlightWords 
    ? highlightWords.split(' ') 
    : [];

  return (
    <section id={id} className="relative py-16 px-4 group bg-c">

      <div className={cn(
        "bg-card hover:bg-card-hover backdrop-blur-sm",
        "border border-border rounded-xl p-8 shadow-lg",
        "group-hover:shadow-primary/20 dark:group-hover:shadow-primary/30",
        "max-w-5xl mx-auto text-left"
      )}>
        { id==="about" && (
          <div className="absolute top-4 right-4 z-20 w-22 h-22 hover:scale-110 transition-transform">
            <img className="w-full h-full rounded-full border-2 border-background shadow-sm hover:shadow-md hover:border-primary transition-all"
              src={img} alt="Profile" />
          </div>
        )}
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {title.split(' ').map((word, key) => (
            <span key={key}>
              {highlightArray.includes(word) ? (<span className="text-primary">{word}</span>) : (word)}
              {' '}
            </span>
          ))}
        </h2>
        
        
        <div className="text-foreground">
          {children}
        </div>
      </div>
    </section>
  );
}