import Navbar from '@/components/Navbar';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ProjectGallery from '@/components/ProjectGallery';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const sections = ['home', 'projects', 'about'];

    useEffect(() => {
        // Reset to home section on page load/refresh
        setActiveSection('home');
        document.getElementById('home')?.scrollIntoView({ behavior: 'auto' });

        // Prevent default scrolling
        const preventDefault = (e: Event) => e.preventDefault();
        document.addEventListener('wheel', preventDefault, { passive: false });
        document.addEventListener('touchmove', preventDefault, { passive: false });

        return () => {
            document.removeEventListener('wheel', preventDefault);
            document.removeEventListener('touchmove', preventDefault);
        };
    }, []);

    const handleArrowScroll = () => {
        const currentIndex = sections.indexOf(activeSection);
        const nextSection = sections[(currentIndex + 1) % sections.length];
        
        setActiveSection(nextSection);
        document.getElementById(nextSection)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="animate-fadeIn overflow-hidden">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
                <section id="home" className="min-h-screen grid place-items-center pl-[400px] bg-gray-25">
                    <div className="relative">
                        <div className="absolute right-full mr-12 text-gray-400 text-sm font-mono select-none leading-[4rem]">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                        <div className="text-6xl font-[Source_Sans_3] font-thin leading-[4rem] tracking-wider">
                            <div>{`<>`}</div>
                            <div className="ml-20">Hello! I'm <span className="font-normal text-[#012c95]">Sanghyeok</span>,</div>
                            <div className="ml-20">a full-stack software engineer.</div>
                            <div>{`</>`}</div>
                            <div className="text-2xl font-normal mt-6 ml-20 leading-normal">CS @ Boston University, Class of 2026</div>
                            <a 
                                href="mailto:sanghyeok@kangsk.dev"
                                className="inline-block text-lg font-normal mt-8 ml-20 px-8 py-2 border border-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </section>
                
                <section id="projects" className="min-h-screen pl-[400px] bg-gray-25">
                    <ProjectGallery />
                </section>

                <section id="about" className="min-h-screen grid place-items-center pl-[400px] bg-gray-25">
                    <div className="relative">
                        <div className="absolute right-full mr-12 text-gray-400 text-sm font-mono select-none">
                            {/* Line numbers for title */}
                            <div className="leading-[4rem]">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                            {/* Comments for body text, with different line height */}
                            <div className="leading-[2rem] mt-8">
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                                <div>//</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-6xl font-[Source_Sans_3] font-thin leading-[4rem] tracking-wider">
                                <div>{`<>`}</div>
                                <div className="ml-20">About</div>
                                <div>{`</>`}</div>
                            </div>
                            <div className="ml-20 space-y-4 text-gray-600 leading-relaxed max-w-[600px] mt-8">
                                <p>
                                    I'm a 3rd year Computer Science student at Boston University, passionate about building innovative solutions that make a difference. My journey in software engineering started in the 6th grade with simple Minecraft plugins, and has evolved into creating full-stack applications that solve real-world problems. I specialize in full-stack development, but have a growing interest in AI/ML applications.
                                </p>
                                <p>
                                    My experience includes my time at McCarren AI where I worked on full-stack development of an AI-powered web platform designed to match government contracts to clients. I also worked as a Network Engineering Research Assistant at Boston University, where I assisted the development of a Liquid Data Networking (LDN) implementation utilizing Raptor codes.
                                </p>
                                <p>
                                    Currently seeking internship opportunities where I can apply my skills and continue learning from experienced engineers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <button 
                    onClick={handleArrowScroll}
                    className="fixed bottom-12 cursor-pointer animate-bounce-slow"
                    style={{ left: 'calc(50% + 200px)' }}
                >
                    {activeSection === 'about' ? (
                        <FiChevronUp size={32} className="text-gray-600" />
                    ) : (
                        <FiChevronDown size={32} className="text-gray-600" />
                    )}
                </button>
            </div>
        </>
    );
}
