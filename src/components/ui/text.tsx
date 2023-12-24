import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const textVariants = cva('text-center', {
	variants: {
		variant: {
			title: 'font-title',
			body: 'font-body'
		},
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
		weight: {
			normal: 'font-normal',
			semibold: 'font-semibold',
			bold: 'font-bold'
		}
	},
	defaultVariants: {
		variant: 'body',
		size: 'default',
		weight: 'normal'
	}
});

type TextTags = 'p' | 'span';

export interface TextProps<T extends HTMLElement>
	extends HTMLAttributes<T>,
		VariantProps<typeof textVariants> {
	as?: TextTags;
	children: ReactNode;
	className?: string;
}

export const Text = forwardRef<HTMLElement | null, TextProps<HTMLElement>>(
	({ as = 'span', children, className, variant, size, weight, ...restProps }, ref) => {
		const Comp = as;

		return (
			<Comp
				className={cn(textVariants({ variant, size, weight, className }))}
				ref={ref}
				{...restProps}
			>
				{children}
			</Comp>
		);
	}
);

Text.displayName = 'Text';

export const MotionText = motion(Text);
