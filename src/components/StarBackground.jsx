import { useEffect, useState } from "react";
import { Key } from "lucide-react";

// id,size,x,y,opacity,animationDuration
// id,size,x,y,delay,animationDuration
export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

// stars
    const generateStars = () => {
        const numberofStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

        const newStars = [];

        for (let i = 0; i < numberofStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 3
                x: Math.random() * 100, // Percentage of the width
                y: Math.random() * 100, // Percentage of the height
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Duration between 5 and 10 seconds
            });
        }
        setStars(newStars);
    };
// stars

// meteors
    const generateMeteors = () => {
        const numberofMeteors = 4
        const newMeteors = [];

        for (let i = 0; i < numberofMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Size between 1 and 3
                x: Math.random() * 100, // Percentage of the width
                y: Math.random() * 20, // Percentage of the height
                delay: Math.random() * 15, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 3 + 3, // Duration between 5 and 10 seconds
            });
        }
        setMeteors(newMeteors);
    };
// meteors

    return (<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
{/* stars */}
        {stars.map((star) =>(
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        )) }
{/* star */}

{/* meteor */}
        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }}
            />
        ))}
{/* meteor */}
    </div> 
    );
};