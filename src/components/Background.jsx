import { useEffect, useState } from "react"

export default function Background () {

    const [stars, setStars] = useState([]);

    useEffect(generateStars, []);

    function generateStars() {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++)
        {
            newStars.push({
                id: i, size: Math.random() * 3 + 1, x: Math.random() * 100, y: Math.random() * 100, opacity: Math.random()
            });
        }

        setStars(newStars);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => <div key={star.id} className="star" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity
            }} />)}
        </div>
    )
}