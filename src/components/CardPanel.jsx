import {cn} from '../lib/utils'

export default function CardPanel({ children, id, title, highlightWord }) {
  return (
    <section id={id} className="relative py-16 px-4 group bg-c">
      
      <div className={cn(
        "bg-card hover:bg-card-hover backdrop-blur-sm",
        "border border-border rounded-xl p-8 shadow-lg",
        "group-hover:shadow-primary/20 dark:group-hover:shadow-primary/30",
        "max-w-5xl mx-auto text-left"
      )}>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {title.split(' ').map((word, key) => (
            <span key={key}>
              {word === highlightWord ? (<span className="text-primary">{word}</span>) : (word)}
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