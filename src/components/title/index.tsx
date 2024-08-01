'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: HeadingTag;
	children: ReactNode;
	className?: string;
}

export const Title = forwardRef<HTMLHeadingElement, TextProps>(
	({ as = 'h1', children, className, ...restProps }, ref) => {
		const Comp = as;

		return (
			<Comp className={clsx('font-title uppercase text-3xl', className)} ref={ref} {...restProps}>
				{children}
			</Comp>
		);
	}
);

Title.displayName = 'Title';

export const MotionTitle = motion(Title);
