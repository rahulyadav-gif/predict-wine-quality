import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
    "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-[#7A1020] text-[#EDEDED]",
                secondary:
                    "border-[rgba(212,175,55,0.15)] bg-[rgba(212,175,55,0.1)] text-[#D4AF37]",
                destructive:
                    "border-transparent bg-red-500/15 text-red-400",
                outline: "text-[#D4AF37] border-[rgba(212,175,55,0.3)] bg-transparent",
                success:
                    "border-transparent bg-green-500/15 text-green-400",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
