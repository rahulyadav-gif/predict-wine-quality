import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Zap,
    ShieldCheck,
    BarChart4,
    Layers,
    Sparkles,
    Clock,
    Lock,
    Globe
} from 'lucide-react'
import { Card, CardContent, Badge } from '@/components/ui'

const features = [
    {
        icon: <Zap className="w-7 h-7" />,
        title: 'Lightning Fast',
        description: 'Get instant predictions in under a second with our optimized ML model.',
        gradient: 'from-yellow-500/20 to-orange-500/20',
        iconColor: 'text-yellow-400',
    },
    {
        icon: <ShieldCheck className="w-7 h-7" />,
        title: 'Highly Accurate',
        description: '94% accuracy rate validated against thousands of expert wine ratings.',
        gradient: 'from-green-500/20 to-emerald-500/20',
        iconColor: 'text-green-400',
    },
    {
        icon: <BarChart4 className="w-7 h-7" />,
        title: 'Detailed Analysis',
        description: 'Comprehensive breakdown of how each property affects quality.',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        iconColor: 'text-blue-400',
    },
    {
        icon: <Layers className="w-7 h-7" />,
        title: 'Easy to Use',
        description: 'Simple interface designed for both experts and enthusiasts.',
        gradient: 'from-purple-500/20 to-pink-500/20',
        iconColor: 'text-purple-400',
    },
    {
        icon: <Clock className="w-7 h-7" />,
        title: '24/7 Available',
        description: 'Access wine quality predictions anytime, anywhere in the world.',
        gradient: 'from-wine-500/20 to-wine-700/20',
        iconColor: 'text-wine-400',
    },
    {
        icon: <Lock className="w-7 h-7" />,
        title: 'Privacy First',
        description: 'Your wine data is never stored or shared with third parties.',
        gradient: 'from-slate-500/20 to-gray-500/20',
        iconColor: 'text-cream-300',
    },
    {
        icon: <Globe className="w-7 h-7" />,
        title: 'Global Standards',
        description: 'Trained on international wine datasets for universal compatibility.',
        gradient: 'from-gold-400/20 to-gold-600/20',
        iconColor: 'text-gold-400',
    },
    {
        icon: <Sparkles className="w-7 h-7" />,
        title: 'AI Powered',
        description: 'Advanced machine learning algorithms for superior predictions.',
        gradient: 'from-wine-400/20 to-gold-400/20',
        iconColor: 'text-gold-300',
    },
]

export const Features: React.FC = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section
            id="features"
            className="relative py-24 lg:py-32 overflow-hidden"
            ref={containerRef}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-wine-600/5 rounded-full blur-[200px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                        Why Choose Us
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
                        <span className="text-cream-100">Powerful </span>
                        <span className="gradient-text">Features</span>
                    </h2>
                    <p className="text-lg text-cream-300/70 leading-relaxed">
                        Everything you need for accurate wine quality prediction,
                        designed with precision and care.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                        >
                            <Card className="h-full p-6 group hover:scale-[1.02] transition-all duration-300">
                                <CardContent className="p-0">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 ${feature.iconColor} group-hover:shadow-lg transition-shadow`}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-cream-100 mb-2 group-hover:text-gold-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-cream-300/60 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
