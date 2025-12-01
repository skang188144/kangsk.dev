import Navbar from '@/components/Navbar';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect, useRef, useCallback } from 'react';
import ProjectGallery from '@/components/ProjectGallery';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [activeSection, setActiveSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = ['home', 'projects', 'about'];
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartY = useRef(0);

    // Programmatic scroll to section
    const scrollToSection = useCallback((index: number) => {
        if (isScrolling || index < 0 || index >= sections.length) return;
        
        setIsScrolling(true);
        setActiveSection(index);
        
        const container = containerRef.current;
        if (container) {
            const targetScroll = index * window.innerHeight;
            container.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }

        // Lock scrolling during animation
        setTimeout(() => {
            setIsScrolling(false);
        }, 700);
    }, [isScrolling, sections.length]);

    // Handle wheel events - intercept and snap
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            
            // Disable scrolling when mobile menu is open
            if (isScrolling || isMenuOpen) return;

            // Determine direction based on wheel delta
            if (e.deltaY > 30) {
                // Scroll down
                scrollToSection(activeSection + 1);
            } else if (e.deltaY < -30) {
                // Scroll up
                scrollToSection(activeSection - 1);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (isMenuOpen) return;
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            // Disable scrolling when mobile menu is open
            if (isScrolling || isMenuOpen) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY.current - touchEndY;

            if (Math.abs(deltaY) > 50) {
                if (deltaY > 0) {
                    // Swipe up - scroll down
                    scrollToSection(activeSection + 1);
                } else {
                    // Swipe down - scroll up
                    scrollToSection(activeSection - 1);
                }
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (isMenuOpen) return;
            e.preventDefault();
        };

        // Add event listeners with passive: false to allow preventDefault
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
            container.removeEventListener('touchmove', handleTouchMove);
        };
    }, [activeSection, isScrolling, isMenuOpen, scrollToSection]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Disable keyboard scrolling when mobile menu is open
            if (isScrolling || isMenuOpen) return;
            
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                scrollToSection(activeSection + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                scrollToSection(activeSection - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSection, isScrolling, isMenuOpen, scrollToSection]);

    // Handle resize to maintain position
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    top: activeSection * window.innerHeight,
                    behavior: 'auto'
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeSection]);

    // Initialize
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, []);

    const handleArrowScroll = () => {
        const nextIndex = (activeSection + 1) % sections.length;
        scrollToSection(nextIndex);
    };

    const handleNavigation = (sectionId: string) => {
        const index = sections.indexOf(sectionId);
        if (index !== -1) {
            scrollToSection(index);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const lineNumberVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                ease: "easeOut" as const
            }
        })
    };

    const aboutParagraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut" as const
            }
        })
    };

    return (
        <>
            {/* Fixed gradient background layer */}
            <div className="fixed inset-0 gradient-bg" />
            
            <div 
                ref={containerRef}
                className="fixed inset-0 overflow-hidden"
            >
                {/* Decorative floating elements */}
                <div className="fixed top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-radial from-accent-blue/20 to-transparent blur-3xl pointer-events-none z-0" />
                <div className="fixed bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent-blue-light/20 to-transparent blur-3xl pointer-events-none z-0" />
                <div className="fixed top-[50%] right-[20%] w-[200px] h-[200px] rounded-full bg-gradient-radial from-blue-300/30 to-transparent blur-2xl pointer-events-none z-0 animate-pulse-soft" />

                <Navbar activeSection={sections[activeSection]} setActiveSection={handleNavigation} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                {/* Sections wrapper - this scrolls */}
                <div className="h-[300dvh]">
                    <motion.section 
                        id="home" 
                        className="h-[100dvh] grid place-items-center pl-0 lg:pl-[19vw] xl:pl-[24vw] relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="mx-[5vw] lg:mx-auto relative w-fit">
                            <div className="opacity-0 min-[1400px]:opacity-100 transition-opacity duration-150 absolute right-full mr-[2vw] lg:ml-[19vw] xl:ml-[24vw] text-gray-400 text-[2.25vh] font-mono select-none">
                                <div className="flex flex-col leading-[8vh]">
                                    {[1, 2, 3, 4].map((num, i) => (
                                        <motion.div 
                                            key={num}
                                            custom={i}
                                            variants={lineNumberVariants}
                                            className="h-[8vh] flex items-center"
                                        >
                                            {num}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-[5vh] lg:text-[7.5vh] font-[Source_Sans_3] font-thin leading-[5.5vh] lg:leading-[8vh] tracking-wider">
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center lg:text-left text-gray-400"
                                >
                                    {`<>`}
                                </motion.div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center lg:text-left lg:ml-[10vh]"
                                >
                                    Hello! I'm <motion.span 
                                        className="font-normal text-gradient"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        Sanghyeok
                                    </motion.span>,
                                </motion.div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center lg:text-left lg:ml-[10vh]"
                                >
                                    a full-stack software engineer.
                                </motion.div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center lg:text-left text-gray-400"
                                >
                                    {`</>`}
                                </motion.div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-[2vh] lg:text-[3.5vh] font-thin mt-0 text-center lg:text-left lg:ml-[10vh] text-gray-500"
                                >
                                    CS @ Boston University, Class of 2026
                                </motion.div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center lg:text-left lg:ml-[10vh]"
                                >
                                    <motion.a
                                        href="mailto:inquiry@kangsk.dev"
                                        className="inline-flex items-center h-[7vh] text-[2.25vh] lg:text-[2.5vh] font-normal mt-[2vh] px-[3vh] border-2 border-accent-blue/30 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 shadow-lg shadow-accent-blue/10"
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px rgba(1, 44, 149, 0.2)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Contact
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <section id="projects" className="h-[100dvh] pl-0 lg:pl-[19vw] xl:pl-[24vw] relative z-10">
                        <ProjectGallery isActive={activeSection === 1} />
                    </section>

                    <motion.section 
                        id="about" 
                        className="h-[100dvh] grid place-items-center pl-0 lg:pl-[19vw] xl:pl-[24vw] px-[2vw] lg:px-0 relative z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.div 
                            className="space-y-[2vh] lg:space-y-[3vh] text-gray-600 leading-relaxed max-w-[80vw] sm:max-w-[60vw] lg:max-w-[40vw] text-[1.65vh] lg:text-[2vh]"
                        >
                            {[
                                "I'm a software engineer specializing in full-stack development and AI/ML systems. I build production applications with a focus on scalable architecture, intelligent automation, and clean, maintainable code.",
                                "Currently, I'm a Lead Software Engineer at KnowIdea, where I'm building an AI platform that transforms business intelligence into actionable strategic decisions. I architected the full technical stack—from multi-tenant database systems to AI-powered analysis pipelines and production infrastructure.",
                                "Previously, I built AI-powered systems at McCarren AI and contributed to cutting-edge networking research at Boston University, developing Liquid Data Networking implementations with Raptor codes.",
                                "I'm a third-year Computer Science student at Boston University, graduating in 2026. Always interested in connecting with engineers working on challenging technical problems—feel free to reach out!"
                            ].map((text, i) => (
                                <motion.p 
                                    key={i}
                                    custom={i}
                                    variants={aboutParagraphVariants}
                                    className="relative pl-4 border-l-2 border-accent-blue/20 hover:border-accent-blue/50 transition-colors duration-300"
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.section>
                </div>

                {/* Arrow container - positioned within content area */}
                <div className="fixed bottom-[3vh] lg:bottom-[6vh] left-0 lg:left-[19vw] xl:left-[24vw] right-0 z-20 pointer-events-none flex justify-center">
                    <motion.button
                        onClick={handleArrowScroll}
                        className="cursor-pointer p-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-auto"
                        animate={{ 
                            y: [0, -8, 0],
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {activeSection === 2 ? (
                                <motion.div
                                    key="up"
                                    initial={{ opacity: 0, rotate: 180 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiChevronUp className="w-[3vh] h-[3vh] lg:w-[4vh] lg:h-[4vh] text-accent-blue" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="down"
                                    initial={{ opacity: 0, rotate: -180 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiChevronDown className="w-[3vh] h-[3vh] lg:w-[4vh] lg:h-[4vh] text-accent-blue" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Scroll progress indicator */}
                <motion.div 
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-2"
                >
                    {sections.map((section, index) => (
                        <motion.button
                            key={section}
                            onClick={() => scrollToSection(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                activeSection === index 
                                    ? 'bg-accent-blue scale-150' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    );
}
