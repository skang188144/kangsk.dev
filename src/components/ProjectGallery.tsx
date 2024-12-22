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
        link: "https://github.com/skang188144/kangsk.dev"
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
        <div className="h-screen flex items-center relative overflow-hidden">
            <button 
                onClick={prevProject}
                className="absolute left-8 z-10 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Previous project"
            >
                <FiChevronLeft size={32} />
            </button>

            <div className="flex items-center space-x-16 px-24">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`transition-all duration-500 ${
                            index === activeIndex 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-40 scale-95'
                        }`}
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`
                        }}
                    >
                        <div className="flex gap-12 items-center">
                            <div className="relative w-[500px] h-[300px] rounded-lg border border-gray-200 overflow-hidden">
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
                            
                            <div className="w-[400px]">
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

            <button 
                onClick={nextProject}
                className="absolute right-8 z-10 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Next project"
            >
                <FiChevronRight size={32} />
            </button>
        </div>
    );
};

export default ProjectGallery; 