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
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md"
            >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <nav className={`${sourceSans.className} fixed ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 left-0 top-0 h-[100dvh] w-[300px] lg:w-[300px] xl:w-[400px] bg-white shadow-md flex items-center justify-center transition-transform duration-300 z-40`}>
                <div className="absolute top-8 lg:top-12 left-1/2 -translate-x-1/2">
                    <Image
                        src={headshot}
                        alt="Profile headshot"
                        className="w-[200px] h-[200px] rounded-full object-cover"
                    />
                </div>

                <div className="flex flex-col items-center justify-center space-y-16">
                    <button
                        onClick={handleScroll('home')}
                        className={`transition-colors duration-200 text-2xl ${
                            activeSection === 'home' ? 'text-[#012c95]' : 'text-gray-800 hover:text-gray-600'
                        }`}
                    >
                        home
                    </button>
                    <button
                        onClick={handleScroll('projects')}
                        className={`transition-colors duration-200 text-2xl ${
                            activeSection === 'projects' ? 'text-[#012c95]' : 'text-gray-800 hover:text-gray-600'
                        }`}
                    >
                        projects
                    </button>
                    <button
                        onClick={handleScroll('about')}
                        className={`transition-colors duration-200 text-2xl ${
                            activeSection === 'about' ? 'text-[#012c95]' : 'text-gray-800 hover:text-gray-600'
                        }`}
                    >
                        about
                    </button>
                </div>

                <div className="absolute bottom-12 grid grid-cols-2 gap-8">
                    <a href="https://linkedin.com/in/kangsk" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiLinkedin size={24} />
                    </a>
                    <a href="https://github.com/skang188144" target="_blank" rel="noopener noreferrer"
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiGithub size={24} />
                    </a>
                    <a href="mailto:sanghyeok@kangsk.dev"
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiMail size={24} />
                    </a>
                    <a href="https://kangsk.dev" target="_blank" rel="noopener noreferrer"
                       className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <FiGlobe size={24} />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
