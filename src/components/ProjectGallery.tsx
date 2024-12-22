import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

const projects: Project[] = [
    {
        title: "FakeNewsDetector",
        description: "A web application that utilizes retrieval-augmented generation (RAG) and large language models (LLMs) to detect fake news.",
        image: "/FakeNewsDetector.png",
        technologies: ["React", "TypeScript", "Node.js", "LangChain", "LangGraph", "Tavily"],
        link: "https://github.com/skang188144/FakeNewsDetector"
    },
    {
        title: "Detox",
        description: "A mobile application dedicated to empowering users to take control of their digital health, through a series of lockdown prevention features.",
        image: "/Detox.png",
        technologies: ["Java", "XML", "Android SDK", "Firebase", "Spring Boot"],
        link: "https://github.com/skang188144/Detox"
    },
    {
        title: "Terminal-Themed Portfolio",
        description: "A terminal-themed portfolio website built with React.js and JavaScript.",
        image: "/TerminalPortfolio.png",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        link: "https://github.com/skang188144/old-kangsk.dev"
    },
    {
        title: "kangsk.dev",
        description: "My current personal portfolio website.",
        image: "/kangsk.dev.png",
        technologies: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Vercel"],
        link: "https://github.com/skang188144/kangsk.dev"
    }
];

const ProjectGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="min-h-[100dvh] h-[100dvh] flex items-center relative overflow-hidden px-4 lg:px-0">
            <button 
                onClick={prevProject}
                className="absolute left-2 lg:left-8 z-10 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Previous project"
            >
                <FiChevronLeft className="w-6 lg:w-8 h-6 lg:h-8" />
            </button>

            <div className="w-full overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`
                    }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`w-full flex-shrink-0 transition-all duration-500 ${
                                index === activeIndex 
                                    ? 'opacity-100 scale-100' 
                                    : 'opacity-40 scale-95'
                            }`}
                        >
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-center max-w-7xl mx-auto">
                                <div className="relative w-[280px] sm:w-[300px] lg:w-[400px] h-[160px] sm:h-[200px] lg:h-[250px] rounded-lg border border-gray-200 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={`object-contain ${
                                            project.title === "Detox" ? "scale-[1.0]" : "object-cover"
                                        }`}
                                        priority={index === 0}
                                    />
                                </div>
                                
                                <div className="w-[280px] sm:w-[300px] lg:w-[400px] text-center lg:text-left max-h-[40dvh] overflow-y-auto">
                                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-gray-600 mb-6">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span 
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#012c95] hover:underline"
                                        >
                                            View Project →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button 
                onClick={nextProject}
                className="absolute right-2 lg:right-8 z-10 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Next project"
            >
                <FiChevronRight className="w-6 lg:w-8 h-6 lg:h-8" />
            </button>
        </div>
    );
};

export default ProjectGallery; 