import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const maskTextVariants = cva('overflow-hidden');

interface MaskTextProps extends VariantProps<typeof maskTextVariants> {
	children: ReactNode;
	className?: string;
}

const MaskText = ({ children, className }: MaskTextProps) => {
	return <div className={cn(maskTextVariants({ className }))}>{children}</div>;
};

export { MaskText };
