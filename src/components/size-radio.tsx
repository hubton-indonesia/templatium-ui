import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SizeRadioItemProps {
	children: ReactNode;
	value: string;
	onClick: (value: string) => void;
	className?: string;
}

export function SizeRadio({ children }: { children: ReactNode }) {
	return <div className="flex gap-2 lg:gap-3">{children}</div>;
}

export function SizeRadioItem({
	children,
	value,
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
			onClick={() => onClick(value)}
		>
			{children}
		</button>
	);
}
