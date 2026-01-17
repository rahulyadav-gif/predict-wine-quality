import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wine, Sparkles, ArrowDown, Play, Star, Zap } from 'lucide-react'
import { Button, Badge } from '@/components/ui'

// Particle component for floating effects
const Particle: React.FC<{ delay: number; x: number; y: number }> = ({ delay, x, y }) => (
    <motion.div
        className="absolute w-1 h-1 bg-gold-400 rounded-full"
        style={{ left: `${x}%`, top: `${y}%` }}
        animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
        }}
        transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: delay,
            ease: 'easeInOut',
        }}
    />
)

// Glowing orb component
const GlowingOrb: React.FC<{ className?: string; color: string; size: number; delay?: number }> = ({
    className = '',
    color,
    size,
    delay = 0,
}) => (
    <motion.div
        className={`absolute rounded-full pointer-events-none ${className}`}
        style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
            filter: 'blur(40px)',
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
        }}
    />
)

// Animated text reveal component
const AnimatedText: React.FC<{ text: string; className?: string; delay?: number }> = ({
    text,
    className = '',
    delay = 0,
}) => {
    const words = text.split(' ')

    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + i * 0.1, duration: 0.5 }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    )
}

// Animated counter for hero stats
const AnimatedStat: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay * 1000)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center group"
        >
            <motion.div
                className="text-3xl sm:text-4xl font-bold gradient-text mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {value}
            </motion.div>
            <div className="text-sm text-cream-400/60 group-hover:text-gold-400 transition-colors">
                {label}
            </div>
        </motion.div>
    )
}

export const Hero: React.FC = () => {

    const handleScrollToPredict = () => {
        const element = document.querySelector('#predict')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleScrollToAbout = () => {
        const element = document.querySelector('#about')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Generate particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
    }))

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 bg-mesh" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <Particle key={particle.id} delay={particle.delay} x={particle.x} y={particle.y} />
                ))}
            </div>

            {/* Animated Wine Blobs */}
            <motion.div
                className="wine-blob wine-blob-1"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="wine-blob wine-blob-2"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
                className="wine-blob wine-blob-3"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Glowing Orbs */}
            <GlowingOrb color="#8b2635" size={600} className="-top-64 -right-64" delay={0} />
            <GlowingOrb color="#d4af37" size={400} className="-bottom-32 -left-32" delay={1} />
            <GlowingOrb color="#6b2d5c" size={300} className="top-1/3 left-1/4" delay={2} />

            {/* Grid Pattern Overlay */}
            <motion.div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Grid Layout: Text Left (60%), Wine Glass Right (40%) on Desktop */}
                <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        {/* Badge with animated entrance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className="inline-flex items-center gap-2 mb-6 lg:mb-8"
                        >
                            <Badge variant="secondary" className="px-4 py-2 text-sm group cursor-default">
                                <motion.span
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                >
                                    <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                                </motion.span>
                                AI-Powered Wine Analysis
                                <motion.span
                                    className="ml-2 inline-flex gap-0.5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {[...Array(3)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                        >
                                            <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
                                        </motion.span>
                                    ))}
                                </motion.span>
                            </Badge>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-tight mb-6"
                        >
                            <AnimatedText text="Discover the" className="text-[#EDEDED]" delay={0.2} />
                            <br />
                            <motion.span
                                className="gradient-text inline-block"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                            >
                                Quality
                            </motion.span>
                            <span className="text-[#EDEDED]"> of Your</span>
                            <br />
                            <motion.span
                                className="gradient-text inline-block relative"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Wine
                                <motion.span
                                    className="absolute -right-8 -top-4"
                                    animate={{
                                        rotate: [0, 15, -15, 0],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Zap className="w-6 h-6 text-gold-400" />
                                </motion.span>
                            </motion.span>
                        </motion.h1>

                        {/* Mobile Wine Glass Animation - Shows only on mobile/tablet */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="lg:hidden flex items-center justify-center my-8"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 3, -3, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                className="relative"
                            >
                                <motion.div
                                    className="relative p-6 rounded-full"
                                    style={{ backgroundColor: 'rgba(28, 28, 28, 0.5)' }}
                                >
                                    {/* Animated rings */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    <Wine className="w-24 h-24 sm:w-32 sm:h-32 text-[#D4AF37]" />

                                    {/* Wine liquid effect */}
                                    <motion.div
                                        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-t from-[#7A1020] to-[#A8213E] rounded-b-full opacity-80"
                                        animate={{ height: [24, 32, 24] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>

                                {/* Sparkle effects */}
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
                                        style={{
                                            top: `${15 + i * 20}%`,
                                            left: `${10 + i * 22}%`,
                                        }}
                                        animate={{
                                            scale: [0, 1.2, 0],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg lg:text-xl text-[#A3A3A3] max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed"
                        >
                            Harness the power of machine learning to predict wine quality with precision.
                            Simply input your wine's chemical properties and get instant quality predictions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="xl"
                                    onClick={handleScrollToPredict}
                                    className="group w-full sm:w-auto relative overflow-hidden"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    <Wine className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                    Analyze Your Wine
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="outline"
                                    size="xl"
                                    onClick={handleScrollToAbout}
                                    className="w-full sm:w-auto group"
                                >
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Play className="w-4 h-4" />
                                    </motion.span>
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side - Wine Glass Animation (Desktop/Tablet only) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden lg:flex items-center justify-center order-1 lg:order-2"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className="relative"
                        >
                            <motion.div
                                className="relative p-10 rounded-full"
                                style={{ backgroundColor: 'rgba(28, 28, 28, 0.5)' }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Animated ring around glass */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-[#7A1020]/30"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                />

                                <Wine className="w-40 h-40 xl:w-48 xl:h-48 text-[#D4AF37]" />

                                {/* Wine "liquid" effect */}
                                <motion.div
                                    className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-t from-[#7A1020] to-[#A8213E] rounded-b-full opacity-80"
                                    animate={{ height: [32, 40, 32] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Sparkle effects */}
                            <AnimatePresence>
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
                                        style={{
                                            top: `${10 + i * 15}%`,
                                            left: `${5 + i * 18}%`,
                                        }}
                                        animate={{
                                            scale: [0, 1.5, 0],
                                            opacity: [0, 1, 0],
                                            rotate: [0, 180, 360],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: i * 0.4,
                                        }}
                                    />
                                ))}
                            </AnimatePresence>

                            {/* Floating bubbles */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={`bubble-${i}`}
                                    className="absolute w-1.5 h-1.5 bg-[#D4AF37]/60 rounded-full"
                                    style={{
                                        bottom: '30%',
                                        left: `${40 + i * 5}%`,
                                    }}
                                    animate={{
                                        y: [0, -80, -120],
                                        x: [0, Math.sin(i) * 20, Math.sin(i) * 10],
                                        opacity: [0, 0.8, 0],
                                        scale: [0.5, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                        ease: 'easeOut',
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Preview - Full Width Below */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    <AnimatedStat value="94%" label="Accuracy Rate" delay={0.9} />
                    <AnimatedStat value="10K+" label="Predictions Made" delay={1.0} />
                    <AnimatedStat value="11" label="Parameters Analyzed" delay={1.1} />
                    <AnimatedStat value="< 1s" label="Response Time" delay={1.2} />
                </motion.div>
            </div>

            {/* Scroll Indicator with bounce animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={handleScrollToAbout}
                    className="flex flex-col items-center gap-2 text-cream-400/60 hover:text-gold-400 transition-colors group"
                    whileHover={{ y: 5 }}
                >
                    <motion.span
                        className="text-xs uppercase tracking-wider"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Scroll
                    </motion.span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowDown className="w-5 h-5 group-hover:text-gold-400" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    )
}
