import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
    HelpCircle,
    ChevronDown,
    MessageCircle
} from 'lucide-react'
import { Badge } from '@/components/ui'
import { cn } from '@/lib/utils'

const faqs = [
    {
        question: 'What is wine quality prediction?',
        answer: 'Wine quality prediction uses machine learning algorithms to analyze the chemical properties of wine and predict its quality score. Our system analyzes 11 key chemical parameters including acidity, sugar content, alcohol level, and more to provide an accurate quality assessment.',
    },
    {
        question: 'How accurate is VinoPredictⓇ?',
        answer: 'VinoPredictⓇ achieves approximately 94% accuracy in predicting wine quality. Our model has been trained on thousands of professionally rated wines and validated against expert sommelier assessments.',
    },
    {
        question: 'What wine properties do I need to input?',
        answer: 'You need to input 11 chemical properties: Fixed Acidity, Volatile Acidity, Citric Acid, Residual Sugar, Chlorides, Free Sulfur Dioxide, Total Sulfur Dioxide, Density, pH, Sulphates, and Alcohol content. You can use the "Fill Sample Data" button to see example values.',
    },
    {
        question: 'Is my wine data stored or shared?',
        answer: 'No, your wine data is never stored or shared with third parties. We only process the data to provide the quality prediction and then immediately discard it. Your privacy is our priority.',
    },
    {
        question: 'Can I use this for commercial purposes?',
        answer: 'Yes! VinoPredictⓇ can be used by wineries, sommeliers, wine shops, and enthusiasts for quality assessment. For commercial API access or bulk predictions, please contact our sales team.',
    },
    {
        question: 'How does the quality score work?',
        answer: 'The quality score ranges from 1 to 10, where: 1-4 is Poor quality, 5 is Average, 6 is Good, and 7-10 is Excellent. The score is based on how the chemical properties interact to create the overall wine experience.',
    },
    {
        question: 'Does this work for both red and white wines?',
        answer: 'Yes, our model is trained on both red and white wine datasets, making it versatile for predicting the quality of various wine types. The chemical properties are universal indicators of quality across wine varieties.',
    },
]

interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
    index: number
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className={cn(
                'border border-gold-400/10 rounded-2xl overflow-hidden transition-all duration-300',
                isOpen ? 'bg-wine-800/20 border-gold-400/30' : 'bg-wine-900/20 hover:border-gold-400/20'
            )}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-5 text-left"
            >
                <span className="font-medium text-cream-100 pr-4">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={cn(
                        'w-5 h-5 transition-colors',
                        isOpen ? 'text-gold-400' : 'text-cream-400/60'
                    )} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-5 pb-5">
                            <p className="text-cream-300/70 leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            id="faq"
            className="relative py-24 lg:py-32 overflow-hidden"
            ref={containerRef}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge variant="secondary" className="mb-4">
                            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
                            FAQ
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
                            <span className="text-cream-100">Frequently Asked </span>
                            <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-lg text-cream-300/70 leading-relaxed max-w-2xl mx-auto">
                            Everything you need to know about wine quality prediction.
                            Can't find the answer you're looking for? Contact our support team.
                        </p>
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-gold-400/15">
                            <MessageCircle className="w-5 h-5 text-gold-400" />
                            <span className="text-cream-200">
                                Still have questions?{' '}
                                <a
                                    href="#contact"
                                    className="text-gold-400 hover:underline font-medium"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Contact us
                                </a>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
