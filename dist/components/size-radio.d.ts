import type { ReactNode } from "react";
export interface SizeRadioItemProps {
    children: ReactNode;
    value: string;
    onClick: (value: string) => void;
    className?: string;
}
export interface SizeRadioProps {
    children: ReactNode;
    className?: string;
}
export declare function SizeRadio({ children, className }: SizeRadioProps): import("react").JSX.Element;
export declare function SizeRadioItem({ children, value, onClick, className, }: SizeRadioItemProps): import("react").JSX.Element;
//# sourceMappingURL=size-radio.d.ts.map