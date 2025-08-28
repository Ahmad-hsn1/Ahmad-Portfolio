import {useState} from 'react';
import {cn} from "@/lib/utils";

const skills = [
    // Frontend
    {Name : "HTML/CSS", Level: 95, category: "frontend"},
    {Name : "JavaScript", Level: 70, category: "frontend"},
    {Name : "React", Level: 50, category: "frontend"},
    {Name : "Tailwind CSS", Level: 50, category: "frontend"},

    // Backend
    {Name : "PHP", Level: 60, category: "backend"},
    {Name : "Node.js", Level: 20, category: "backend"},

    // Tools
    {Name : "Git/GitHub", Level: 50, category: "tools"},
    {Name : "Figma", Level: 70, category: "tools"},
    {Name : "VS Code", Level: 90, category: "tools"},
    {Name : "CapCut", Level: 100, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-glow">My</span> <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category, key) => (
                        <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.Name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.Level + "%"}} />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.Level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
