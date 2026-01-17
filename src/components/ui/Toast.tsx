import React, { createContext, useContext, useState, useCallback, type ComponentProps } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Snackbar, Alert, AlertTitle, Slide } from '@mui/material'
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
    id: string
    type: ToastType
    title?: string
    message: string
    duration?: number
}

interface ToastContextType {
    showToast: (type: ToastType, message: string, title?: string, duration?: number) => void
    hideToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

function SlideTransition(props: ComponentProps<typeof Slide>) {
    return <Slide {...props} direction="up" />
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([])

    const showToast = useCallback((
        type: ToastType,
        message: string,
        title?: string,
        duration: number = 5000
    ) => {
        const id = Math.random().toString(36).substr(2, 9)
        const toast: Toast = { id, type, message, title, duration }
        setToasts((prev) => [...prev, toast])
    }, [])

    const hideToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    const getIcon = (type: ToastType) => {
        switch (type) {
            case 'success':
                return <CheckCircle2 className="w-5 h-5" />
            case 'error':
                return <AlertCircle className="w-5 h-5" />
            case 'warning':
                return <AlertTriangle className="w-5 h-5" />
            case 'info':
                return <Info className="w-5 h-5" />
        }
    }

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}

            {/* MUI Snackbar Toasts */}
            <AnimatePresence>
                {toasts.map((toast, index) => (
                    <Snackbar
                        key={toast.id}
                        open={true}
                        autoHideDuration={toast.duration}
                        onClose={() => hideToast(toast.id)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        TransitionComponent={SlideTransition}
                        sx={{
                            bottom: `${(index * 80) + 24}px !important`,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <Alert
                                severity={toast.type}
                                icon={getIcon(toast.type)}
                                onClose={() => hideToast(toast.id)}
                                sx={{
                                    backgroundColor: '#1C1C1C',
                                    border: '1px solid',
                                    borderColor: toast.type === 'success' ? 'rgba(34, 197, 94, 0.25)' :
                                        toast.type === 'error' ? 'rgba(239, 68, 68, 0.25)' :
                                            toast.type === 'warning' ? 'rgba(245, 158, 11, 0.25)' :
                                                'rgba(212, 175, 55, 0.2)',
                                    borderRadius: '12px',
                                    color: '#EDEDED',
                                    minWidth: '300px',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                                    '& .MuiAlert-icon': {
                                        color: toast.type === 'success' ? '#22c55e' :
                                            toast.type === 'error' ? '#ef4444' :
                                                toast.type === 'warning' ? '#f59e0b' :
                                                    '#D4AF37',
                                    },
                                    '& .MuiAlert-action': {
                                        color: '#EDEDED',
                                    },
                                }}
                            >
                                {toast.title && <AlertTitle sx={{ fontWeight: 600 }}>{toast.title}</AlertTitle>}
                                {toast.message}
                            </Alert>
                        </motion.div>
                    </Snackbar>
                ))}
            </AnimatePresence>
        </ToastContext.Provider>
    )
}

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}

// Custom Toast Component (alternative to MUI)
export const CustomToast: React.FC<{
    type: ToastType
    message: string
    title?: string
    onClose: () => void
}> = ({ type, message, title, onClose }) => {
    const bgColors = {
        success: 'from-green-500/20 to-green-600/10',
        error: 'from-red-500/20 to-red-600/10',
        warning: 'from-amber-500/20 to-amber-600/10',
        info: 'from-gold-400/20 to-gold-500/10',
    }

    const borderColors = {
        success: 'border-green-500/30',
        error: 'border-red-500/30',
        warning: 'border-amber-500/30',
        info: 'border-gold-400/30',
    }

    const iconColors = {
        success: 'text-green-400',
        error: 'text-red-400',
        warning: 'text-amber-400',
        info: 'text-gold-400',
    }

    const icons = {
        success: <CheckCircle2 className="w-5 h-5" />,
        error: <AlertCircle className="w-5 h-5" />,
        warning: <AlertTriangle className="w-5 h-5" />,
        info: <Info className="w-5 h-5" />,
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-xl bg-gradient-to-r ${bgColors[type]} ${borderColors[type]} shadow-2xl min-w-[320px] max-w-md`}
        >
            <div className={`flex-shrink-0 mt-0.5 ${iconColors[type]}`}>
                {icons[type]}
            </div>
            <div className="flex-1 min-w-0">
                {title && (
                    <h4 className="font-semibold text-cream-100 mb-1">{title}</h4>
                )}
                <p className="text-sm text-cream-300/80">{message}</p>
            </div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
                <X className="w-4 h-4 text-cream-400" />
            </motion.button>

            {/* Progress bar */}
            <motion.div
                className={`absolute bottom-0 left-0 h-1 rounded-b-2xl ${iconColors[type].replace('text-', 'bg-')}`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
            />
        </motion.div>
    )
}
