import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BaseProps {
	className?: string;
}

export interface ProductCardProps extends BaseProps {
  children: ReactNode
}

export interface ProductCardContentProps extends BaseProps {
	title: string;
	isSale: boolean;
	isSoldOut?: boolean;
	formattedPrice: string;
	formattedStrikedPrice?: string;
}

export function ProductCard({
	className,
	children,
}: ProductCardProps) {
	return (
		<div
			data-slot="product-card"
			className={cn("group relative flex flex-col gap-4", className)}
		>
			{children}
		</div>
	);
}

export function ProductCardPrice({
	formattedPrice,
	formattedStrikedPrice,
}: {
	formattedPrice: string;
	formattedStrikedPrice?: string;
}) {
	return (
		<div className="flex flex-col-reverse gap-2 text-base leading-normal md:flex-row md:items-baseline">
			<span>{formattedPrice}</span>
			{formattedStrikedPrice && (
				<span className="text-foreground/50 text-sm line-through">
					{formattedStrikedPrice}
				</span>
			)}
		</div>
	);
}

export function ProductSaleBadge() {
	return (
		<div className="inline-flex h-5.5 w-11.25 items-center justify-center bg-sale-badge-background text-sale-badge-foreground px-2.5 py-1 font-normal text-[10px]">
			SALE
		</div>
	);
}

export function ProductSoldBadge() {
	return (
		<div className="inline-flex h-5.5 w-11.25 items-center justify-center bg-sold-badge-background text-sold-badge-foreground px-2.5 py-1 font-normal text-[10px]">
			SOLD
		</div>
	);
}

export function ProductColors({ colors }: { colors: string[] }) {
	return (
		<div className="mt-1 flex gap-1.5">
			{colors.map((color) => (
				<div
					className="h-1.5 w-5 rounded-full"
					key={color}
					style={{ backgroundColor: color }}
				/>
			))}
		</div>
	);
}

export function ProductCardImage({
  src,
  alt,
  className,
}: {
    src: string;
    alt: string;
    className?: string;
}) {
	return (
		<div className={cn("aspect-270/320 w-full overflow-hidden border", className)}>
			<img
				alt={alt}
				className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				height={320}
				src={src}
				width={270}
			/>
		</div>
	);
}

export function ProductCardContent({
	title,
	formattedPrice,
	formattedStrikedPrice,
	isSale,
	isSoldOut,
}: ProductCardContentProps) {
	return (
		<div className="flex flex-col-reverse justify-between gap-1.5 md:flex-row">
			<div className="flex flex-col gap-1.5">
				<h3 className="line-clamp-2 font-semibold text-base leading-normal">
					{title}
				</h3>
				<ProductCardPrice
					formattedPrice={formattedPrice}
					formattedStrikedPrice={formattedStrikedPrice}
				/>
			</div>

			{isSoldOut ? <ProductSoldBadge /> : isSale ? <ProductSaleBadge /> : null}
		</div>
	);
}
