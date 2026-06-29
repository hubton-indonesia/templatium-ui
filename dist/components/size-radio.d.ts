import type { ReactNode } from "react";
export interface SizeRadioItemProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
}
export interface SizeRadioProps {
    children: ReactNode;
    className?: string;
}
export declare function SizeRadio({ children, className }: SizeRadioProps): import("react").JSX.Element;
export declare function SizeRadioItem({ children, onClick, className, }: SizeRadioItemProps): import("react").JSX.Element;
//# sourceMappingURL=size-radio.d.ts.map