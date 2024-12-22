import Navbar from '@/components/Navbar';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ProjectGallery from '@/components/ProjectGallery';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const sections = ['home', 'projects', 'about'];

    useEffect(() => {
        setActiveSection('home');
        document.getElementById('home')?.scrollIntoView({ behavior: 'auto' });

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
            <div className="animate-fadeIn overflow-hidden h-[100dvh]">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
                
                <section id="home" className="h-[100dvh] grid place-items-center pl-0 lg:pl-[300px] xl:pl-[400px] bg-gray-25 px-4 lg:px-0">
                    <div className="relative">
                        <div className="hidden lg:block absolute right-full mr-12 text-gray-400 text-sm font-mono select-none leading-[4rem]">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                        <div className="text-3xl lg:text-6xl font-[Source_Sans_3] font-thin leading-[3rem] lg:leading-[4rem] tracking-wider">
                            <div className="text-center lg:text-left">{`<>`}</div>
                            <div className="ml-4 lg:ml-20 text-center lg:text-left">Hello! I'm <span className="font-normal text-[#012c95]">Sanghyeok</span>,</div>
                            <div className="ml-4 lg:ml-20 text-center lg:text-left">a full-stack software engineer.</div>
                            <div className="text-center lg:text-left">{`</>`}</div>
                            <div className="text-base lg:text-2xl font-normal mt-6 ml-4 lg:ml-20 text-center lg:text-left">CS @ Boston University, Class of 2026</div>
                            <div className="text-center lg:text-left">
                                <a 
                                    href="mailto:sanghyeok@kangsk.dev"
                                    className="inline-block text-base lg:text-lg font-normal mt-8 ml-4 lg:ml-20 px-6 lg:px-8 py-2 border border-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="projects" className="h-[100dvh] pl-0 lg:pl-[300px] xl:pl-[400px] bg-gray-25">
                    <ProjectGallery />
                </section>

                <section id="about" className="h-[100dvh] grid place-items-center pl-0 lg:pl-[300px] xl:pl-[400px] bg-gray-25 px-4 lg:px-0">
                    <div className="relative">
                        <div className="hidden lg:block absolute right-full mr-12 text-gray-400 text-sm font-mono select-none">
                            <div className="leading-[4rem]">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
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
                            <div className="text-2xl lg:text-6xl font-[Source_Sans_3] font-thin leading-[2.5rem] lg:leading-[4rem] tracking-wider">
                                <div>{`<>`}</div>
                                <div className="ml-4 lg:ml-20">About</div>
                                <div>{`</>`}</div>
                            </div>
                            <div className="ml-4 lg:ml-20 space-y-3 lg:space-y-4 text-gray-600 leading-relaxed max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] mt-6 lg:mt-8 text-xs lg:text-base">
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
                    className="fixed bottom-6 lg:bottom-12 cursor-pointer animate-bounce-slow z-20 left-1/2 lg:left-[calc(50%+150px)] xl:left-[calc(50%+200px)] -translate-x-1/2"
                >
                    {activeSection === 'about' ? (
                        <FiChevronUp className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
                    ) : (
                        <FiChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
                    )}
                </button>
            </div>
        </>
    );
}
