import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ColorRadioItemProps {
	children: ReactNode;
	value: string;
	onClick: (value: string) => void;
	className?: string;
}

export interface ColorRadioProps {
	children: ReactNode;
	className?: string;
}

export function ColorRadio({ children, className }: ColorRadioProps) {
	return <div className={cn("flex gap-2 lg:gap-3", className)}>{children}</div>;
}

export function ColorRadioItem({
	children,
	value,
	onClick,
	className,
}: ColorRadioItemProps) {
	return (
		<button
			type="button"
			className={cn(
				"cursor-pointer flex h-9 lg:h-14 w-9 lg:w-14 items-center justify-center border transition-colors",
				className,
			)}
			onClick={() => onClick(value)}
		>
			{children}
		</button>
	);
}
