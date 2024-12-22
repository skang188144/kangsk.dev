import Navbar from '@/components/Navbar';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import ProjectGallery from '@/components/ProjectGallery';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [commentLines, setCommentLines] = useState(0);
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
        const paragraphs = document.querySelectorAll('#about p');
        const text = Array.from(paragraphs)
            .map(p => (p as HTMLParagraphElement).innerText)
            .join('\n\n');
        const containerWidth = window.innerWidth * 0.4;
        setCommentLines(calculateCommentLines(text, containerWidth));
    }, []);

    const handleArrowScroll = () => {
        const currentIndex = sections.indexOf(activeSection);
        const nextSection = sections[(currentIndex + 1) % sections.length];
        
        setActiveSection(nextSection);
        document.getElementById(nextSection)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const calculateCommentLines = (text: string, containerWidth: number) => {
        const div = document.createElement('div');
        div.style.width = `${containerWidth}px`;
        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        div.style.fontSize = '2vh';
        div.style.lineHeight = '1.625';
        div.style.fontFamily = 'Source Sans 3, sans-serif';
        div.style.color = 'rgb(75, 85, 99)';
        div.style.whiteSpace = 'pre-wrap';
        div.style.wordBreak = 'break-word';
        div.innerHTML = text;
        document.body.appendChild(div);

        const height = div.offsetHeight - 1;
        const computedStyle = window.getComputedStyle(div);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const lines = Math.floor(height / lineHeight);

        document.body.removeChild(div);

        return lines;
    };

    return (
        <>
            <div className="animate-fadeIn overflow-hidden h-[100dvh]">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
                
                <section id="home" className="h-[100dvh] grid place-items-center pl-0 lg:pl-[25vw] xl:pl-[30vw] bg-gray-25 px-[2vw] lg:px-0">
                    <div className="relative lg:-ml-[5vw]">
                        <div className="hidden lg:block absolute right-full mr-[2vw] text-gray-400 text-[2.25vh] font-mono select-none">
                            <div className="flex flex-col leading-[8vh]">
                                <div className="h-[8vh] flex items-center">1</div>
                                <div className="h-[8vh] flex items-center">2</div>
                                <div className="h-[8vh] flex items-center">3</div>
                                <div className="h-[8vh] flex items-center">4</div>
                            </div>
                        </div>
                        <div className="text-[5vh] lg:text-[7.5vh] font-[Source_Sans_3] font-thin leading-[5.5vh] lg:leading-[8vh] tracking-wider">
                            <div className="text-center lg:text-left">{`<>`}</div>
                            <div className="ml-0 lg:ml-[13vh] text-center lg:text-left">Hello! I'm <span className="font-normal text-[#012c95]">Sanghyeok</span>,</div>
                            <div className="ml-0 lg:ml-[13vh] text-center lg:text-left">a full-stack software engineer.</div>
                            <div className="text-center lg:text-left">{`</>`}</div>
                            <div className="text-[2vh] lg:text-[3.5vh] font-normal mt-0 ml-0 lg:ml-[13vh] text-center lg:text-left">
                                CS @ Boston University, Class of 2026
                            </div>
                            <div className="text-center lg:text-left">
                                <a 
                                    href="mailto:sanghyeok@kangsk.dev"
                                    className="inline-flex items-center h-[7vh] text-[2.25vh] lg:text-[2.5vh] font-normal mt-0 ml-0 lg:ml-[13vh] px-[3vh] border border-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="projects" className="h-[100dvh] pl-0 lg:pl-[19vw] xl:pl-[24vw] bg-gray-25">
                    <ProjectGallery />
                </section>

                <section id="about" className="h-[100dvh] grid place-items-center pl-0 lg:pl-[25vw] xl:pl-[30vw] bg-gray-25 px-[2vw] lg:px-0">
                    <div className="relative">
                        <div className="hidden lg:block absolute right-full mr-[3vw] text-gray-400 text-[1.8vh] font-mono select-none">
                            <div className="leading-[8vh]">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                            <div className="leading-[4vh] mt-[4vh]">
                                {Array.from({ length: commentLines }, (_, i) => (
                                    <div key={i}>//</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-[4vh] lg:text-[6vh] font-[Source_Sans_3] font-thin leading-[5vh] lg:leading-[8vh] tracking-wider">
                                <div>{`<>`}</div>
                                <div className="ml-[4vh] lg:ml-[10vh]">About</div>
                                <div>{`</>`}</div>
                            </div>
                            <div className="ml-[4vh] lg:ml-[10vh] space-y-[2vh] lg:space-y-[3vh] text-gray-600 leading-relaxed max-w-[80vw] sm:max-w-[60vw] lg:max-w-[40vw] mt-[3vh] lg:mt-[4vh] text-[1.65vh] lg:text-[2vh]">
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
                    className="fixed bottom-[3vh] lg:bottom-[6vh] cursor-pointer animate-bounce-slow z-20 left-1/2 lg:left-[calc(50%+12.5vw)] xl:left-[calc(50%+15vw)] -translate-x-1/2"
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
