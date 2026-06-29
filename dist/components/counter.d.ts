import type { ReactNode } from "react";
export interface CounterProps {
    children: ReactNode;
    onAdd: () => void;
    onSubtract: () => void;
    className?: string;
}
export declare function Counter({ children, onAdd, onSubtract, className, }: CounterProps): import("react").JSX.Element;
//# sourceMappingURL=counter.d.ts.map