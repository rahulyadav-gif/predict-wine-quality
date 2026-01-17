import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    FlaskConical,
    Cpu,
    BarChart3,
    Wine,
    ArrowRight,
    Sparkles
} from 'lucide-react'
import { Badge } from '@/components/ui'

const steps = [
    {
        icon: <FlaskConical className="w-8 h-8" />,
        title: 'Input Wine Properties',
        description: 'Enter the 11 chemical properties of your wine, including acidity levels, sulfur dioxide content, density, pH, and alcohol percentage.',
        color: 'from-wine-500 to-wine-700',
        bgColor: 'bg-wine-500/10',
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: 'AI Analysis',
        description: 'Our advanced machine learning model processes the data through multiple neural network layers to identify quality patterns.',
        color: 'from-purple-500 to-purple-700',
        bgColor: 'bg-purple-500/10',
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: 'Get Quality Score',
        description: 'Receive an instant quality prediction with a detailed breakdown of how each property affects the overall wine quality.',
        color: 'from-gold-400 to-gold-600',
        bgColor: 'bg-gold-400/10',
    },
]

const wineProperties = [
    'Fixed Acidity',
    'Volatile Acidity',
    'Citric Acid',
    'Residual Sugar',
    'Chlorides',
    'Free Sulfur Dioxide',
    'Total Sulfur Dioxide',
    'Density',
    'pH',
    'Sulphates',
    'Alcohol',
]

export const HowItWorks: React.FC = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section
            id="how-it-works"
            className="relative py-24 lg:py-32 overflow-hidden"
            ref={containerRef}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-wine-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <Badge variant="secondary" className="mb-4">
                        <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                        Simple Process
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
                        <span className="text-cream-100">How </span>
                        <span className="gradient-text">VinoPredictⓇ</span>
                        <span className="text-cream-100"> Works</span>
                    </h2>
                    <p className="text-lg text-cream-300/70 leading-relaxed">
                        Get accurate wine quality predictions in three simple steps.
                        Our AI-powered system makes wine analysis accessible to everyone.
                    </p>
                </motion.div>

                {/* Steps Timeline */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="relative">
                        {/* Connecting Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-wine-600 via-purple-600 to-gold-400 origin-left"
                        />

                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                                    className="relative"
                                >
                                    {/* Step Number */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                                    >
                                        {step.icon}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cream-100 text-wine-800 text-xs font-bold flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-cream-100 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-cream-300/70 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Arrow for desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-16 -right-6 z-20">
                                            <ArrowRight className="w-6 h-6 text-gold-400/40" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wine Properties Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass rounded-3xl p-8 lg:p-12">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Wine className="w-6 h-6 text-gold-400" />
                            <h3 className="text-xl font-semibold text-cream-100">
                                11 Wine Properties Analyzed
                            </h3>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {wineProperties.map((property, index) => (
                                <motion.div
                                    key={property}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-full bg-wine-800/40 border border-gold-400/20 text-cream-200 text-sm font-medium hover:border-gold-400/40 hover:text-gold-400 transition-all cursor-default"
                                >
                                    {property}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
