import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export interface SizeRadioItemProps {
	children: ReactNode;
	onClick: () => void;
	className?: string;
}

export interface SizeRadioProps {
	children: ReactNode;
	className?: string;
}

export function SizeRadio({ children, className }: SizeRadioProps) {
	return <div className={cn("flex gap-2 lg:gap-3", className)}>{children}</div>;
}

export function SizeRadioItem({
	children,
	onClick,
	className,
}: SizeRadioItemProps) {
	return (
		<button
			type="button"
			className={cn(
				"cursor-pointer flex h-9 lg:h-14 w-9 lg:w-14 items-center justify-center border font-medium text-sm transition-colors",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
