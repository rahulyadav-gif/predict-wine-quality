import React from 'react'
import { motion } from 'framer-motion'
import {
    Wine,
    Linkedin,
    Youtube,
    Github,
    Mail,
    MapPin,
    Phone,
    Heart,
    ArrowUp
} from 'lucide-react'
import { Button, Input } from '@/components/ui'

const footerLinks = {
    product: [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'API Access', href: '#api' },
    ],
    company: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Blog', href: '#blog' },
        { label: 'Press', href: '#press' },
    ],
    support: [
        { label: 'Help Center', href: '#help' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
    ],
}

const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/boktiarahmed73/', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/dswithbappy', label: 'YouTube' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/entbappy', label: 'GitHub' },
]

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative mt-20 border-t border-gold-400/10 bg-gradient-to-b from-transparent to-wine-950/20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-wine-700/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="#home"
                            className="flex items-center gap-3 mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Wine className="w-10 h-10 text-gold-400" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold gradient-text font-serif">
                                    VinoPredictⓇ
                                </span>
                                <span className="text-[10px] text-cream-400/60 tracking-widest uppercase">
                                    AI Wine Analysis
                                </span>
                            </div>
                        </motion.a>
                        <p className="text-cream-300/70 text-sm leading-relaxed mb-6 max-w-sm">
                            Experience the future of wine quality assessment with our AI-powered
                            prediction system. Trusted by sommeliers and wine enthusiasts worldwide.
                        </p>

                        {/* Newsletter */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-cream-100">
                                Subscribe to our newsletter
                            </h4>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1"
                                />
                                <Button size="default">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-cream-100 uppercase tracking-wider mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-cream-300/70 hover:text-gold-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-cream-100 uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-cream-300/70 hover:text-gold-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-cream-100 uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-cream-300/70">
                                    123 Wine Valley, Napa, CA 94558
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                                <span className="text-sm text-cream-300/70">
                                    +1 (555) 123-4567
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                                <span className="text-sm text-cream-300/70">
                                    hello@vinopredict.com
                                </span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-cream-100 uppercase tracking-wider mb-3">
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-wine-800/40 text-cream-300 hover:bg-gold-400/20 hover:text-gold-400 transition-colors duration-300 border border-gold-400/10"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 pt-8 border-t border-gold-400/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-cream-300/60 flex items-center gap-1">
                            © {new Date().getFullYear()} VinoPredictⓇ. Made with{' '}
                            <Heart className="w-4 h-4 text-wine-500 fill-current" /> for wine lovers
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#privacy" className="text-sm text-cream-300/60 hover:text-gold-400 transition-colors">
                                Privacy
                            </a>
                            <a href="#terms" className="text-sm text-cream-300/60 hover:text-gold-400 transition-colors">
                                Terms
                            </a>
                            <a href="#cookies" className="text-sm text-cream-300/60 hover:text-gold-400 transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-wine-700/80 text-cream-100 border border-gold-400/20 backdrop-blur-sm hover:bg-wine-600 transition-all duration-300 shadow-wine"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </footer>
    )
}
