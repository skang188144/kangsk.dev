import Navbar from '@/components/Navbar';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
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

    useEffect(() => {
        const handleResize = () => {
            document.getElementById(activeSection)?.scrollIntoView({ behavior: 'auto' });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [activeSection]);

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
            <div className="animate-fadeIn overflow-hidden h-[100dvh] bg-gradient-to-br from-white via-white to-[#99bbff]">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
                
                <section id="home" className="h-[100dvh] grid place-items-center pl-0 lg:pl-[19vw] xl:pl-[24vw]">
                    <div className="mx-[5vw] lg:mx-auto relative w-fit">
                        <div className="opacity-0 min-[1400px]:opacity-100 transition-opacity duration-150 absolute right-full mr-[2vw] lg:ml-[19vw] xl:ml-[24vw] text-gray-400 text-[2.25vh] font-mono select-none">
                            <div className="flex flex-col leading-[8vh]">
                                <div className="h-[8vh] flex items-center">1</div>
                                <div className="h-[8vh] flex items-center">2</div>
                                <div className="h-[8vh] flex items-center">3</div>
                                <div className="h-[8vh] flex items-center">4</div>
                            </div>
                        </div>
                        <div className="text-[5vh] lg:text-[7.5vh] font-[Source_Sans_3] font-thin leading-[5.5vh] lg:leading-[8vh] tracking-wider">
                            <div className="text-center lg:text-left">{`<>`}</div>
                            <div className="text-center lg:text-left lg:ml-[10vh]">Hello! I'm <span className="font-normal text-[#012c95]">Sanghyeok</span>,</div>
                            <div className="text-center lg:text-left lg:ml-[10vh]">a full-stack software engineer.</div>
                            <div className="text-center lg:text-left">{`</>`}</div>
                            <div className="text-[2vh] lg:text-[3.5vh] font-thin mt-0 text-center lg:text-left lg:ml-[10vh]">
                                CS @ Boston University, Class of 2026
                            </div>
                            <div className="text-center lg:text-left lg:ml-[10vh]">
                                <a 
                                    href="mailto:sanghyeok@kangsk.dev"
                                    className="inline-flex items-center h-[7vh] text-[2.25vh] lg:text-[2.5vh] font-normal mt-0 px-[3vh] border border-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="projects" className="h-[100dvh] pl-0 lg:pl-[19vw] xl:pl-[24vw]">
                    <ProjectGallery />
                </section>

                <section id="about" className="h-[100dvh] grid place-items-center pl-0 lg:pl-[19vw] xl:pl-[24vw] px-[2vw] lg:px-0">
                    <div className="space-y-[2vh] lg:space-y-[3vh] text-gray-600 leading-relaxed max-w-[80vw] sm:max-w-[60vw] lg:max-w-[40vw] text-[1.65vh] lg:text-[2vh]">
                        <p>
                            Hello! My name is Sanghyeok, and I'm a third-year Computer Science student at Boston University, with a passion for building innovative solutions that make a difference. I specialize in full-stack development, but I'm well-versed in a variety of specialties such as web and mobile development, and have a growing interest in AI/ML applications.
                        </p>
                        <p>
                            My most recent experience includes my time at McCarren AI, where I worked on full-stack development of an AI-powered web platform designed to match government contracts to clients.
                        </p>
                        <p>
                            I also worked as a Network Engineering Research Assistant at Boston University, where I assisted the development of a Liquid Data Networking (LDN) implementation utilizing Raptor codes.
                        </p>
                        <p>
                            I'm currently seeking internship opportunities where I can apply my skills and continue learning from experienced engineers. Please feel free to reach out!
                        </p>
                    </div>
                </section>

                <button 
                    onClick={handleArrowScroll}
                    className="fixed bottom-[3vh] lg:bottom-[6vh] cursor-pointer animate-bounce-slow z-20 left-[50%] lg:left-[calc(50%+9.5vw)] xl:left-[calc(50%+12vw)] -translate-x-1/2"
                >
                    {activeSection === 'about' ? (
                        <FiChevronUp className="w-[3vh] h-[3vh] lg:w-[4vh] lg:h-[4vh] text-gray-600" />
                    ) : (
                        <FiChevronDown className="w-[3vh] h-[3vh] lg:w-[4vh] lg:h-[4vh] text-gray-600" />
                    )}
                </button>
            </div>
        </>
    );
}
