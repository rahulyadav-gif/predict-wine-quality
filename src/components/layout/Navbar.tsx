import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
    Drawer,
    IconButton,
    useMediaQuery,
    useTheme,
    Tooltip,
    Zoom
} from '@mui/material'
import {
    Wine,
    Menu,
    X,
    Home,
    Info,
    Settings,
    FlaskConical,
    Mail,
    Sparkles,
    ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface NavItem {
    label: string
    href: string
    icon: React.ReactNode
    description: string
}

const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '#home',
        icon: <Home className="w-5 h-5" />,
        description: 'Back to top'
    },
    {
        label: 'About Us',
        href: '#about',
        icon: <Info className="w-5 h-5" />,
        description: 'Learn about VinoPredictⓇ'
    },
    {
        label: 'How It Works',
        href: '#how-it-works',
        icon: <Settings className="w-5 h-5" />,
        description: 'Our prediction process'
    },
    {
        label: 'Predict',
        href: '#predict',
        icon: <FlaskConical className="w-5 h-5" />,
        description: 'Analyze your wine'
    },
    {
        label: 'Contact Us',
        href: '#contact',
        icon: <Mail className="w-5 h-5" />,
        description: 'Get in touch'
    },
]

// Animated Logo Component
const AnimatedLogo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <motion.a
        href="#home"
        onClick={(e) => {
            e.preventDefault()
            onClick()
        }}
        className="flex items-center gap-3 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <motion.div className="relative">
            <motion.div
                animate={{
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <Wine className="w-10 h-10 text-gold-400 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            </motion.div>
            <motion.div
                className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.div>
        <div className="flex flex-col">
            <motion.span
                className="text-2xl font-bold gradient-text font-serif"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                VinoPredictⓇ
            </motion.span>
            <motion.span
                className="text-[10px] text-cream-400/60 tracking-widest uppercase flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <Sparkles className="w-2.5 h-2.5" />
                AI Wine Analysis
            </motion.span>
        </div>
    </motion.a>
)

// Desktop Nav Item with Tooltip
const DesktopNavItem: React.FC<{
    item: NavItem
    isActive: boolean
    onClick: () => void
    index: number
}> = ({ item, isActive, onClick, index }) => (
    <Tooltip
        title={item.description}
        placement="bottom"
        TransitionComponent={Zoom}
        arrow
    >
        <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group',
                isActive
                    ? 'text-gold-400'
                    : 'text-cream-200 hover:text-gold-400'
            )}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10 flex items-center gap-2">
                <motion.span
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {item.icon}
                </motion.span>
                <span className="hidden xl:inline">{item.label}</span>
            </span>

            {isActive && (
                <motion.div
                    layoutId="activeNavDesktop"
                    className="absolute inset-0 bg-wine-800/30 rounded-lg border border-gold-400/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
            )}

            {/* Hover glow effect */}
            <motion.div
                className="absolute inset-0 rounded-lg bg-gold-400/0 group-hover:bg-gold-400/5 transition-colors"
            />
        </motion.button>
    </Tooltip>
)

// Mobile Nav Item with enhanced animation
const MobileNavItem: React.FC<{
    item: NavItem
    isActive: boolean
    onClick: () => void
    index: number
}> = ({ item, isActive, onClick, index }) => (
    <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
        onClick={onClick}
        className={cn(
            'flex items-center gap-4 w-full px-4 py-4 rounded-xl text-left transition-all duration-300 group',
            isActive
                ? 'bg-wine-700/40 text-gold-400 border border-gold-400/20'
                : 'text-cream-200 hover:bg-wine-800/30 hover:text-gold-400'
        )}
        whileHover={{ x: 8 }}
        whileTap={{ scale: 0.98 }}
    >
        <motion.div
            className={cn(
                'p-2 rounded-lg transition-colors',
                isActive ? 'bg-gold-400/20' : 'bg-wine-800/30 group-hover:bg-gold-400/10'
            )}
            whileHover={{ rotate: 10 }}
        >
            {item.icon}
        </motion.div>
        <div className="flex-1">
            <span className="font-medium block">{item.label}</span>
            <span className="text-xs text-cream-400/50">{item.description}</span>
        </div>
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <ChevronRight className="w-4 h-4 text-cream-400/40 group-hover:text-gold-400 transition-colors" />
        </motion.div>
    </motion.button>
)

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

    const { scrollY } = useScroll()
    const navbarOpacity = useTransform(scrollY, [0, 100], [0, 1])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.replace('#', ''))
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'py-3 shadow-lg'
                        : 'bg-transparent py-4'
                )}
                style={{
                    backgroundColor: isScrolled ? 'rgba(15, 10, 11, 0.85)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
                }}
            >
                {/* Animated background gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-wine-900/50 via-transparent to-wine-900/50"
                    style={{ opacity: navbarOpacity }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <AnimatedLogo onClick={() => handleNavClick('#home')} />

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 bg-wine-900/30 rounded-full px-2 py-1 border border-gold-400/10">
                            {navItems.map((item, index) => (
                                <DesktopNavItem
                                    key={item.href}
                                    item={item}
                                    isActive={activeSection === item.href.replace('#', '')}
                                    onClick={() => handleNavClick(item.href)}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <motion.div
                            className="hidden lg:block"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="sm"
                                    onClick={() => handleNavClick('#predict')}
                                    className="relative overflow-hidden group"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <FlaskConical className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    Analyze Wine
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.div
                            className="lg:hidden"
                            whileTap={{ scale: 0.9 }}
                        >
                            <IconButton
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                sx={{
                                    color: isMobileMenuOpen ? '#d4af37' : '#f5f1e8',
                                    backgroundColor: 'rgba(139, 38, 53, 0.2)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(139, 38, 53, 0.4)',
                                    },
                                }}
                            >
                                <motion.div
                                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
                                </motion.div>
                            </IconButton>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu - MUI Drawer */}
            <Drawer
                anchor="right"
                open={isMobileMenuOpen && isMobile}
                onClose={() => setIsMobileMenuOpen(false)}
                PaperProps={{
                    sx: {
                        width: 320,
                        backgroundColor: 'rgba(15, 10, 11, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(212, 175, 55, 0.1)',
                        paddingTop: '80px',
                    },
                }}
                SlideProps={{
                    timeout: 300,
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6"
                >
                    {/* Mobile Logo */}
                    <motion.div
                        className="flex items-center gap-3 mb-8 pb-6 border-b border-gold-400/10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Wine className="w-8 h-8 text-gold-400" />
                        <div>
                            <span className="text-xl font-bold gradient-text font-serif block">
                                VinoPredictⓇ
                            </span>
                            <span className="text-xs text-cream-400/60">Menu</span>
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-2">
                        <AnimatePresence>
                            {navItems.map((item, index) => (
                                <MobileNavItem
                                    key={item.href}
                                    item={item}
                                    isActive={activeSection === item.href.replace('#', '')}
                                    onClick={() => handleNavClick(item.href)}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </nav>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-8 pt-6 border-t border-gold-400/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button
                            className="w-full"
                            size="lg"
                            onClick={() => handleNavClick('#predict')}
                        >
                            <FlaskConical className="w-5 h-5" />
                            Analyze Wine Now
                        </Button>
                    </motion.div>

                    {/* Decorative Element */}
                    <motion.div
                        className="mt-8 p-4 rounded-xl bg-wine-800/30 border border-gold-400/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            >
                                <Sparkles className="w-5 h-5 text-gold-400" />
                            </motion.div>
                            <div>
                                <p className="text-sm font-medium text-cream-200">94% Accuracy</p>
                                <p className="text-xs text-cream-400/60">AI-powered predictions</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Drawer>
        </>
    )
}
