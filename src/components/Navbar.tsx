import { Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';
import headshot from '/public/Headshot.png';
import { FiLinkedin, FiGithub, FiMail, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const sourceSans = Source_Sans_3({
    weight: ['600'],
    subsets: ['latin']
});

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden fixed top-[2vh] right-[2vh] z-50 p-[1vh] bg-white rounded-lg shadow-md"
            >
                {isMenuOpen ? <FiX size="3vh" /> : <FiMenu size="3vh" />}
            </button>

            <nav className={`${sourceSans.className} fixed ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 left-0 top-0 h-[100dvh] w-[80vw] lg:w-[19vw] xl:w-[24vw] bg-white shadow-md flex items-center justify-center transition-transform duration-300 z-40`}>
                <div className="absolute top-[4vh] lg:top-[6vh] left-1/2 -translate-x-1/2">
                    <div className="relative w-[25vh] h-[25vh]">
                        <Image
                            src={headshot}
                            alt="Profile headshot"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-[8vh]">
                    <button
                        onClick={handleScroll('home')}
                        className={`transition-colors duration-200 text-[3vh] ${
                            activeSection === 'home' ? 'text-[#012c95]' : 'text-gray-800 hover:text-gray-600'
                        }`}
                    >
                        home
                    </button>
                    <button
                        onClick={handleScroll('projects')}
                        className={`transition-colors duration-200 text-[3vh] ${
                            activeSection === 'projects' ? 'text-[#012c95]' : 'text-gray-800 hover:text-gray-600'
                        }`}
                    >
                        projects
                    </button>
                    <button
                        onClick={handleScroll('about')}
                        className={`transition-colors duration-200 text-[3vh] ${
                            activeSection === 'about' ? 'text-[#012c95]' : 'text-gray-800 hover:text-gray-600'
                        }`}
                    >
                        about
                    </button>
                </div>

                <div className="absolute bottom-[6vh] grid grid-cols-2 gap-[4vh]">
                    <a href="https://linkedin.com/in/kangsk" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiLinkedin size="3vh" />
                    </a>
                    <a href="https://github.com/skang188144" target="_blank" rel="noopener noreferrer"
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiGithub size="3vh" />
                    </a>
                    <a href="mailto:inquiry@kangsk.dev"
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiMail size="3vh" />
                    </a>
                    <a href="https://kangsk.dev" target="_blank" rel="noopener noreferrer"
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiGlobe size="3vh" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
