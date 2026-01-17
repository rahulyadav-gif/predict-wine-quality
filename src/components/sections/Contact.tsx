import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    Loader2,
    CheckCircle2,
    Linkedin,
    Youtube,
    Github
} from 'lucide-react'
import { Button, Input, Card, CardContent, Badge } from '@/components/ui'

const contactInfo = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Us',
        value: 'hello@vinopredict.com',
        href: 'mailto:hello@vinopredict.com',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Call Us',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567',
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: 'Visit Us',
        value: '123 Wine Valley, Napa, CA 94558',
        href: '#',
    },
]

const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/boktiarahmed73/', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/dswithbappy', label: 'YouTube' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/entbappy', label: 'GitHub' },
]

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <section
            id="contact"
            className="relative py-24 lg:py-32 overflow-hidden"
            ref={containerRef}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine-600/10 rounded-full blur-[150px]" />
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                        Get In Touch
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
                        <span className="text-cream-100">Contact </span>
                        <span className="gradient-text">Us</span>
                    </h2>
                    <p className="text-lg text-cream-300/70 leading-relaxed">
                        Have questions about wine quality prediction? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="block"
                            >
                                <Card className="p-5 flex items-start gap-4 group hover:border-gold-400/30">
                                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-cream-200 mb-1">{info.title}</h4>
                                        <p className="text-sm text-cream-400/70 group-hover:text-gold-400 transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </Card>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="pt-6"
                        >
                            <h4 className="text-sm font-semibold text-cream-100 uppercase tracking-wider mb-4">
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex items-center justify-center w-11 h-11 rounded-full bg-wine-800/40 text-cream-300 hover:bg-gold-400/20 hover:text-gold-400 transition-all border border-gold-400/10"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <Card className="p-6 lg:p-8">
                            <CardContent className="p-0">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', delay: 0.1 }}
                                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-green-400" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-cream-100 mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-cream-300/70">
                                            Thank you for reaching out. We'll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Input
                                                name="name"
                                                label="Your Name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <Input
                                                name="email"
                                                type="email"
                                                label="Email Address"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <Input
                                            name="subject"
                                            label="Subject"
                                            placeholder="How can we help?"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-cream-200">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                placeholder="Tell us more about your inquiry..."
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                className="flex w-full rounded-xl border border-gold-400/20 bg-wine-950/40 px-4 py-3 text-base text-cream-100 transition-all placeholder:text-cream-400/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
