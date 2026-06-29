import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CounterProps {
	children: ReactNode;
	onAdd: () => void;
	onSubtract: () => void;
	className?: string;
}

export function Counter({
	children,
	onAdd,
	onSubtract,
	className,
}: CounterProps) {
	return (
		<div
			className={cn(
				"h-9 lg:h-14 col-span-12 flex items-center gap-1 border font-medium md:col-span-4",
				className,
			)}
		>
			<button
				className="px-3 lg:px-5 cursor-pointer flex h-full max-w-14 items-center justify-center transition-colors hover:scale-110 active:scale-95 lg:active:scale-80 active:opacity-90"
				onClick={onSubtract}
				type="button"
			>
				<svg
					className="size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					data-class="lucide lucide-minus-icon lucide-minus"
				>
					<title>minus</title>
					<path d="M5 12h14" />
				</svg>
			</button>
			<span className="grow flex items-center justify-center text-center tabular-nums">
				{children}
			</span>
			<button
				className="px-3 lg:px-5 cursor-pointer flex h-full max-w-14 items-center justify-center transition-colors hover:scale-110 active:scale-95 lg:active:scale-80 active:opacity-90"
				onClick={onAdd}
				type="button"
			>
				<svg
					className="size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					data-class="lucide lucide-plus-icon lucide-plus"
				>
					<title>plus</title>
					<path d="M5 12h14" />
					<path d="M12 5v14" />
				</svg>
			</button>
		</div>
	);
}
