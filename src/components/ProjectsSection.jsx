import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "CYBERFICTION",
      description: "Designed and developed an interactive CYBERFICTION website using HTML, CSS, and JavaScript.",
      image: "/projects/project1.png", 
      tags: ["HTML", "CSS"],
      demoUrl: "https://cyberfictionbyahmad.netlify.app/",
      githubUrl: "https://github.com/Ahmad-hsn1/cyberfiction",
    },
    {
      id: 2,
      title: "MY PORTFOLIO",
      description: "A fully functional and beautifully designed personal Portfolio Website built with React.js .",
      image: "/projects/project2.png", 
      tags: ["React", "Tailwind CSS"],
      demoUrl: "https://ahmadhsn.netlify.app/",
      githubUrl: "https://github.com/Ahmad-hsn1/Ahmad-Portfolio/",
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is the third project.",
      image: "/projects/project3.jpg", 
      tags: ["Javascrit", "Bootstrap"],
      demoUrl: "#",
      githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                   <span className="text-glow">Featured</span> <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and creativity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                      <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                         <div className="h-48 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full objext-cover transition-transform duration 500 group-hover:scale-110"/>
                         </div>

                         <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                            ))}
                          </div>
                         
                         
                         <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                         <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                         <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                              <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                              </a>
                              <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <GithubIcon size={20}/>
                              </a>
                            </div>
                            </div>
                         </div>
                      </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                  <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Ahmad-hsn1">
                    Check My Github <ArrowRight size={16}/>
                  </a>
                </div>
            </div>
        </section>

    );
}
