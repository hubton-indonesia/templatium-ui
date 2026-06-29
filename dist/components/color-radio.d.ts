import type { ReactNode } from "react";
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
export declare function ColorRadio({ children, className }: ColorRadioProps): import("react").JSX.Element;
export declare function ColorRadioItem({ children, value, onClick, className, }: ColorRadioItemProps): import("react").JSX.Element;
//# sourceMappingURL=color-radio.d.ts.map