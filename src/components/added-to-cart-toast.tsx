import { CircleCheck } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../lib/utils";

export interface AddedToCartToastProps {
	onClose: () => void;
	show: boolean;
	className?: string;
}

export function AddedToCartToast({ show, onClose, className }: AddedToCartToastProps) {
	useEffect(() => {
		if (!show) {
			return;
		}
		const timer = setTimeout(onClose, 3000);
		return () => clearTimeout(timer);
	}, [show, onClose]);

	if (!show) {
		return null;
	}

	return (
		<div className={cn("pointer-events-none fixed inset-0 z-50 flex items-center justify-center", className)}>
			<div className="pointer-events-auto flex flex-col items-center justify-center gap-4 bg-foreground/80 px-10 py-6">
				<CircleCheck className="h-8 w-8 text-background" />
				<span className="font-medium text-lg text-background">
					Added to your cart
				</span>
			</div>
		</div>
	);
}
