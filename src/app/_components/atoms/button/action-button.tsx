import { Button } from '@/app/_components/atoms/ui/button';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const button = cva(
    "text-sm font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            },
            buttonSize: {
                default: "",
                sm: "h-9",
                lg: "h-11",
                full: "h-20",
            },
            rounded: {
                default: "",
                sm: "rounded-sm",
                lg: "rounded-lg",
                full: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            buttonSize: "default",
            rounded: "default",
        },
    },
);
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    icon?: ReactNode;
}

export function ActionButton({ className, variant, buttonSize, icon, children, ...props }: ButtonProps) {
    return (
        <Button className={button({ variant, buttonSize, className })} {...props}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </Button>
    );
}