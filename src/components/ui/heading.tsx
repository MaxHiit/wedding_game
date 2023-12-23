import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const headingVariants = cva('font-title text-center', {
	variants: {
		size: {
			default: 'text-base',
			sm: 'text-sm',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			'5xl': 'text-5xl',
			'6xl': 'text-6xl	',
			'7xl': 'text-7xl',
			'8xl': 'text-8xl',
			'9xl': 'text-9xl'
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right'
		}
	},
	defaultVariants: {
		size: 'default',
		align: 'center'
	}
});

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TextProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	as?: HeadingTag;
	children: ReactNode;
	className?: string;
}

export const Heading = forwardRef<HTMLHeadingElement, TextProps>(
	({ as = 'h1', children, className, size, align, ...restProps }, ref) => {
		const Comp = as;

		return (
			<Comp
				className={cn(
					headingVariants({
						size,
						align,
						className
					})
				)}
				ref={ref}
				{...restProps}
			>
				{children}
			</Comp>
		);
	}
);

Heading.displayName = 'Heading';

export const MotionHeading = motion(Heading);
