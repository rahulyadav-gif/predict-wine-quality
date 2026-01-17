import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Wine,
    Shield,
    Award,
    Target,
    TrendingUp,
    Users,
    Globe2
} from 'lucide-react'
import { Card, CardContent, Badge } from '@/components/ui'

const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: 94, suffix: '%', label: 'Prediction Accuracy' },
    { icon: <Users className="w-6 h-6" />, value: 10000, suffix: '+', label: 'Wine Predictions' },
    { icon: <Wine className="w-6 h-6" />, value: 500, suffix: '+', label: 'Wineries Trust Us' },
    { icon: <Globe2 className="w-6 h-6" />, value: 50, suffix: '+', label: 'Countries Served' },
]

const features = [
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Scientifically Proven',
        description: 'Our AI model is trained on thousands of professionally rated wines.',
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: 'Industry Standard',
        description: 'Trusted by sommeliers and winemakers around the world.',
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: 'Precision Analysis',
        description: 'Analyzes 11 chemical properties for accurate quality prediction.',
    },
]

interface AnimatedCounterProps {
    target: number
    suffix?: string
    duration?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    target,
    suffix = '',
    duration = 2000
}) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        const startTime = Date.now()
        const endValue = target

        const updateCounter = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3)

            setCount(Math.floor(easeOut * endValue))

            if (progress < 1) {
                requestAnimationFrame(updateCounter)
            }
        }

        requestAnimationFrame(updateCounter)
    }, [isInView, target, duration])

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    )
}

export const About: React.FC = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section
            id="about"
            className="relative py-24 lg:py-32 overflow-hidden"
            ref={containerRef}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine-950/20 to-transparent" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <Badge variant="secondary" className="mb-4">
                        About VinoPredictⓇ
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
                        <span className="text-cream-100">The Future of </span>
                        <span className="gradient-text">Wine Quality</span>
                        <span className="text-cream-100"> Assessment</span>
                    </h2>
                    <p className="text-lg text-cream-300/70 leading-relaxed">
                        We combine cutting-edge machine learning with decades of wine science
                        expertise to deliver accurate, instant wine quality predictions that
                        help winemakers and enthusiasts make informed decisions.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <Card className="text-center p-6 hover:scale-105 transition-transform duration-300">
                                <CardContent className="p-0">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/10 text-gold-400 mb-4">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-sm text-cream-400/60">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main Card */}
                            <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-wine-700/20 to-wine-950/80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                                        className="w-64 h-64 rounded-full border border-gold-400/20"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                                        className="absolute w-48 h-48 rounded-full border border-wine-500/30"
                                    />
                                    <Wine className="absolute w-24 h-24 text-gold-400" />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-4 -right-4 glass rounded-2xl p-4 border border-gold-400/20"
                            >
                                <Award className="w-8 h-8 text-gold-400" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-gold-400/20"
                            >
                                <Shield className="w-8 h-8 text-wine-400" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-cream-100 mb-4">
                                Why Choose VinoPredictⓇ?
                            </h3>
                            <p className="text-cream-300/70 leading-relaxed">
                                Our platform combines advanced algorithms with comprehensive wine science
                                to provide the most accurate quality predictions in the industry.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-wine-800/20 transition-colors group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-wine-600/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-cream-100 mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-cream-300/60">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
