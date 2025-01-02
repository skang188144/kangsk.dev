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
        title: "jobs.kangsk.dev",
        description: "An all-in-one jobs platform providing comprehensive job search and application management features, including multi-platform job aggregation, application tracking, and AI-powered cover letter generation",
        image: "/jobs.kangsk.dev.png",
        technologies: ["React", "TypeScript", "Next.js", "LangChain", "LangGraph", "Vercel"],
        link: "https://github.com/skang188144/jobs.kangsk.dev"
    },
    {
        title: "tidalfy",
        description: "A web application providing seamless migration features from Spotify to TIDAL, including playlist transfers, playlist synchronization, daily mix migration, and more.",
        image: "/tidalfy.png",
        technologies: ["React", "TypeScript", "Next.js"],
        link: "https://github.com/skang188144/tidalfy"
    },
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
        <div className="min-h-[100dvh] h-[100dvh] flex items-center relative overflow-hidden px-[2vw] lg:px-0">
            <button 
                onClick={prevProject}
                className="absolute left-[1vw] lg:left-[2vw] z-10 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Previous project"
            >
                <FiChevronLeft className="w-[3vh] lg:w-[4vh] h-[3vh] lg:h-[4vh]" />
            </button>

            <div className="w-full overflow-hidden px-[5vw] lg:px-[8vw]">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {projects.map((project, index) => (
                        <div key={project.title} className={`w-full flex-shrink-0 transition-all duration-500 ${
                            index === activeIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                        }`}>
                            <div className="flex flex-col lg:flex-row gap-[2vh] lg:gap-[3vw] items-center justify-center h-[100dvh] max-w-[90vw] mx-auto">
                                <div className="relative max-w-[320px] sm:max-w-[480px] lg:max-w-[560px] max-h-[200px] sm:max-h-[280px] lg:max-h-[320px] rounded-xl border border-gray-200 overflow-hidden bg-white w-fit h-fit mx-auto">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={560}
                                        height={320}
                                        className="object-contain rounded-xl w-auto h-auto"
                                        priority={true}
                                    />
                                </div>
                                
                                <div className="w-[80vw] sm:w-[50vw] lg:w-[30vw] text-center lg:text-left">
                                    <h3 className="text-[4vh] font-semibold mb-[2vh]">{project.title}</h3>
                                    <p className="text-gray-600 mb-[3vh]">{project.description}</p>
                                    <div className="flex flex-wrap gap-[1vh] mb-[3vh]">
                                        {project.technologies.map((tech) => (
                                            <span 
                                                key={tech}
                                                className="px-[1.5vh] py-[0.5vh] bg-gray-100 rounded-full text-[1.8vh] text-gray-600"
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
                                            className="text-[#012c95] hover:underline text-[2vh]"
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
                className="absolute right-[1vw] lg:right-[2vw] z-10 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Next project"
            >
                <FiChevronRight className="w-[3vh] lg:w-[4vh] h-[3vh] lg:h-[4vh]" />
            </button>
        </div>
    );
};

export default ProjectGallery; 