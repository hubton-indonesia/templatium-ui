interface BaseProps {
    className?: string;
}
export interface ProductCardProps extends BaseProps {
    title: string;
    imageUrl: string;
    isSale: boolean;
    colors?: string[];
    formattedPrice: string;
    formattedStrikedPrice?: string;
}
export declare function ProductCard({ className, title, imageUrl, isSale, colors, formattedPrice, formattedStrikedPrice, }: ProductCardProps): import("react").JSX.Element;
export declare function ProductCardPrice({ formattedPrice, formattedStrikedPrice, }: {
    formattedPrice: string;
    formattedStrikedPrice?: string;
}): import("react").JSX.Element;
export declare function ProductSaleBadge(): import("react").JSX.Element;
export declare function ProductColors({ colors }: {
    colors: string[];
}): import("react").JSX.Element;
export declare function ProductCardImage({ src, alt }: {
    src: string;
    alt: string;
}): import("react").JSX.Element;
export declare function ProductCardContent({ title, formattedPrice, formattedStrikedPrice, isSale, }: {
    title: string;
    isSale?: boolean;
    formattedPrice: string;
    formattedStrikedPrice?: string;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=product-card.d.ts.map