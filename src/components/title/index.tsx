'use client';
import clsx from 'clsx';
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
			<Comp
				className={clsx('font-title uppercase text-2xl md:text-5xl text-center', className)}
				ref={ref}
				{...restProps}
			>
				{children}
			</Comp>
		);
	}
);

Title.displayName = 'Title';
