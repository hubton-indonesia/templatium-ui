import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ColorRadioItemProps {
	children: ReactNode;
	onClick: () => void;
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
	onClick,
	className,
}: ColorRadioItemProps) {
	return (
		<button
			type="button"
			className={cn(
				"cursor-pointer flex w-max h-max p-1 items-center justify-center border transition-colors",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
