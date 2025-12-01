import { Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';
import headshot from '/public/Headshot.png';
import { FiLinkedin, FiGithub, FiMail, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sourceSans = Source_Sans_3({
    weight: ['600'],
    subsets: ['latin']
});

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

const Navbar = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }: NavbarProps) => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const handleScroll = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    const navItems = ['home', 'projects', 'about'];
    const socialLinks = [
        { href: "https://linkedin.com/in/kangsk", icon: FiLinkedin, label: "LinkedIn" },
        { href: "https://github.com/skang188144", icon: FiGithub, label: "GitHub" },
        { href: "mailto:inquiry@kangsk.dev", icon: FiMail, label: "Email" },
        { href: "https://kangsk.dev", icon: FiGlobe, label: "Website" }
    ];

    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.1,
                duration: 0.5,
                ease: "easeOut" as const
            }
        })
    };

    const socialIconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.6 + i * 0.08,
                duration: 0.4,
                type: "spring" as const,
                stiffness: 200
            }
        })
    };

    const mobileMenuVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
            }
        },
        exit: { 
            x: '-100%', 
            opacity: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30
            }
        }
    };

    return (
        <>
            {/* Mobile menu button */}
            <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden fixed top-[2vh] right-[2vh] z-50 p-[1.5vh] bg-white/40 backdrop-blur-md rounded-xl shadow-lg border border-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiX size="3vh" className="text-accent-blue" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiMenu size="3vh" className="text-gray-700" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Desktop navbar */}
            <motion.nav 
                className={`${sourceSans.className} hidden lg:flex fixed left-0 top-0 h-[100dvh] w-[19vw] xl:w-[24vw] shadow-xl border-r border-blue-100/40 items-center justify-center z-40`}
                style={{
                    background: `
                        radial-gradient(ellipse 130% 90% at 0% 0%, rgba(140, 175, 255, 0.4) 0%, transparent 50%),
                        radial-gradient(ellipse 110% 70% at 0% 100%, rgba(77, 127, 255, 0.35) 0%, transparent 45%),
                        linear-gradient(180deg, 
                            #ffffff 0%, 
                            #f5f8ff 15%,
                            #e8f0ff 35%, 
                            #d8e6ff 55%,
                            #c0d4ff 80%,
                            #a8c4ff 100%
                        )
                    `
                }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Profile image */}
                <motion.div 
                    className="absolute top-[6vh] w-full flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                >
                    <div className="relative w-[20vh] h-[20vh]">
                        <Image
                            src={headshot}
                            alt="Profile headshot"
                            fill
                            className="rounded-full object-cover border-4 border-white shadow-xl"
                        />
                    </div>
                </motion.div>

                {/* Navigation links */}
                <div className="flex flex-col items-center justify-center space-y-[8vh]">
                    {navItems.map((item, i) => (
                        <motion.button
                            key={item}
                            custom={i}
                            variants={navItemVariants}
                            initial="hidden"
                            animate="visible"
                            onClick={handleScroll(item)}
                            onHoverStart={() => setHoveredLink(item)}
                            onHoverEnd={() => setHoveredLink(null)}
                            className={`relative transition-colors duration-200 text-[3vh] ${
                                activeSection === item ? 'text-accent-blue font-semibold' : 'text-gray-700 hover:text-accent-blue'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                            {/* Active indicator */}
                            {activeSection === item && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            {/* Hover glow effect */}
                            {hoveredLink === item && activeSection !== item && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute -inset-4 bg-accent-blue/5 rounded-xl -z-10"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Social links */}
                <div className="absolute bottom-[6vh] grid grid-cols-2 gap-[4vh]">
                    {socialLinks.map((link, i) => (
                        <motion.a 
                            key={link.label}
                            href={link.href} 
                            target={link.href.startsWith('mailto') ? undefined : "_blank"} 
                            rel="noopener noreferrer"
                            custom={i}
                            variants={socialIconVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-gray-600 hover:text-accent-blue transition-colors duration-200 p-2 rounded-lg hover:bg-accent-blue/5"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <link.icon size="3vh" />
                        </motion.a>
                    ))}
                </div>

                {/* Decorative gradient line */}
                <motion.div 
                    className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />
            </motion.nav>

            {/* Mobile navbar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav 
                        className={`${sourceSans.className} lg:hidden fixed left-0 top-0 h-[100dvh] w-[80vw] bg-white/40 backdrop-blur-xl shadow-2xl flex items-center justify-center z-40`}
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Profile image */}
                        <motion.div 
                            className="absolute top-[4vh] left-1/2 -translate-x-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <div className="relative w-[20vh] h-[20vh]">
                                <Image
                                    src={headshot}
                                    alt="Profile headshot"
                                    fill
                                    className="rounded-full object-cover border-4 border-white shadow-xl"
                                />
                            </div>
                        </motion.div>

                        {/* Navigation links */}
                        <div className="flex flex-col items-center justify-center space-y-[6vh]">
                            {navItems.map((item, i) => (
                                <motion.button
                                    key={item}
                                    onClick={handleScroll(item)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className={`relative transition-colors duration-200 text-[3.5vh] ${
                                        activeSection === item ? 'text-accent-blue font-semibold' : 'text-gray-700'
                                    }`}
                                >
                                    {item}
                                    {activeSection === item && (
                                        <motion.div
                                            layoutId="mobileActiveIndicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-blue rounded-full"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="absolute bottom-[6vh] grid grid-cols-4 gap-[4vh]">
                            {socialLinks.map((link, i) => (
                                <motion.a 
                                    key={link.label}
                                    href={link.href} 
                                    target={link.href.startsWith('mailto') ? undefined : "_blank"} 
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    className="text-gray-600 hover:text-accent-blue transition-colors duration-200 p-2"
                                >
                                    <link.icon size="3.5vh" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
