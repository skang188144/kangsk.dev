import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

interface ProjectGalleryProps {
    isActive: boolean;
}

const projects: Project[] = [
    {
        title: "IGNIS AI",
        description: "AI-powered job application automation system with universal form understanding across diverse platforms. Built on top of a fusion architecture combining visual processing and structural HTML analysis to handle complex form patterns.",
        image: "/IGNIS.jpg",
        technologies: ["TypeScript", "React", "Next.js", "Python", "MongoDB", "AWS S3", "Claude API", "Gemini API"],
        link: "https://ignis.careers"
    },
    {
        title: "FakeNewsDetector",
        description: "A web application that utilizes retrieval-augmented generation (RAG) and large language models (LLMs) to detect fake news.",
        image: "/FakeNewsDetector.png",
        technologies: ["React", "TypeScript", "Node.js", "LangChain", "LangGraph", "Tavily"],
        link: "https://github.com/skang188144/FakeNewsDetector"
    },
    {
        title: "tidalfy",
        description: "A web application providing seamless migration features from Spotify to TIDAL, including playlist transfers, playlist synchronization, daily mix migration, and more.",
        image: "/tidalfy.jpg",
        technologies: ["React", "TypeScript", "Next.js"],
        link: "https://github.com/skang188144/tidalfy"
    },
    {
        title: "Detox",
        description: "A mobile application dedicated to empowering users to take control of their digital health, through a series of lockdown prevention features.",
        image: "/Detox.png",
        technologies: ["Java", "XML", "Android SDK", "Firebase", "Spring Boot"],
        link: "https://github.com/skang188144/Detox"
    },
    {
        title: "kangsk.dev",
        description: "My current personal portfolio website.",
        image: "/kangsk.dev.png",
        technologies: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Vercel"],
        link: "https://github.com/skang188144/kangsk.dev"
    },
    {
        title: "old-kangsk.dev",
        description: "A terminal-themed portfolio website built with React.js and JavaScript.",
        image: "/TerminalPortfolio.png",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        link: "https://github.com/skang188144/old-kangsk.dev"
    }
];

const ProjectGallery = ({ isActive }: ProjectGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextProject = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % projects.length);
    }, [isAnimating]);

    const prevProject = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [isAnimating]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextProject();
            if (e.key === 'ArrowLeft') prevProject();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextProject, prevProject]);

    // Simple, clean slide animation
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 80 : -80,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: "easeOut" as const
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 80 : -80,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "easeIn" as const
            }
        })
    };

    const project = projects[activeIndex];

    return (
        <div className="min-h-[100dvh] h-[100dvh] flex items-center relative overflow-hidden px-[2vw] lg:px-0 pb-[16vh] lg:pb-0">
            {/* Left arrow */}
            <button
                onClick={prevProject}
                className="absolute left-[1vw] lg:left-[2vw] z-10 p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-200 text-gray-500 hover:text-accent-blue"
                aria-label="Previous project"
            >
                <FiChevronLeft className="w-[3vh] lg:w-[4vh] h-[3vh] lg:h-[4vh]" />
            </button>

            {/* Main gallery container */}
            <div className="w-full overflow-hidden px-[5vw] lg:px-[8vw]">
                <AnimatePresence 
                    mode="wait" 
                    initial={false} 
                    custom={direction}
                    onExitComplete={() => setIsAnimating(false)}
                >
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full"
                    >
                        <div className="flex flex-col lg:flex-row gap-[3vh] lg:gap-[3vw] items-center justify-center h-[100dvh] max-w-[90vw] mx-auto">
                            {/* Project image */}
                            <div className="relative max-w-[320px] sm:max-w-[480px] lg:max-w-[560px] max-h-[200px] sm:max-h-[280px] lg:max-h-[320px] rounded-xl overflow-hidden bg-white w-fit h-fit mx-auto shadow-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={560}
                                    height={320}
                                    className="object-contain rounded-xl w-auto h-auto"
                                    priority={true}
                                />
                            </div>

                            {/* Project content */}
                            <div className="w-[80vw] sm:w-[50vw] lg:w-[30vw] text-center lg:text-left">
                                <div className="mb-[1vh]">
                                    <span className="text-[1.5vh] font-mono text-accent-blue/50 uppercase tracking-wider">
                                        Project {activeIndex + 1} / {projects.length}
                                    </span>
                                </div>
                                
                                <h3 className="text-[4vh] font-semibold mb-[2vh] text-gray-900">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-[3vh] leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-[1vh] mb-[3vh] justify-center lg:justify-start">
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
                                        className="inline-flex items-center gap-2 text-accent-blue hover:underline text-[2vh]"
                                    >
                                        {project.link.includes('github') ? (
                                            <>
                                                <FiGithub className="w-[2vh] h-[2vh]" />
                                                View on GitHub →
                                            </>
                                        ) : (
                                            <>
                                                <FiExternalLink className="w-[2vh] h-[2vh]" />
                                                View Project →
                                            </>
                                        )}
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
                onClick={nextProject}
                className="absolute right-[1vw] lg:right-[2vw] z-10 p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-200 text-gray-500 hover:text-accent-blue"
                aria-label="Next project"
            >
                <FiChevronRight className="w-[3vh] lg:w-[4vh] h-[3vh] lg:h-[4vh]" />
            </button>

            {/* Project indicators - only show when projects section is active */}
            {isActive && (
                <div className="fixed bottom-[14vh] left-0 lg:left-[19vw] xl:left-[24vw] right-0 flex justify-center z-10 pointer-events-none">
                    <div className="flex gap-2 pointer-events-auto">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (isAnimating) return;
                                    setIsAnimating(true);
                                    setDirection(index > activeIndex ? 1 : -1);
                                    setActiveIndex(index);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-200 ${
                                    index === activeIndex 
                                        ? 'w-6 bg-accent-blue' 
                                        : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
