import { cn } from "../lib/utils";
import { parseCombination } from "../lib/variant-utils";
import { ColorRadio, ColorRadioItem } from "./color-radio";

function isHex(v: string) {
	return /^#[0-9a-f]{3,6}$/i.test(v);
}

/** Color swatch — inline style for arbitrary hex, no CSS var coupling */
function Swatch({ color }: { color: string }) {
	return <div className="h-6 w-6" style={{ backgroundColor: color }} />;
}

interface VariantSelectorProps {
	variants: { id: string; combination: string | null; is_default: boolean }[];
	selected: Record<string, string>;
	onChange: (selected: Record<string, string>) => void;
}

export function VariantSelector({
	variants,
	selected,
	onChange,
}: VariantSelectorProps) {
	// Collect unique attributes in order of first appearance
	const attrMap = new Map<string, Set<string>>();
	for (const v of variants) {
		if (!v.combination) continue;
		for (const [k, val] of Object.entries(parseCombination(v.combination))) {
			if (!attrMap.has(k)) attrMap.set(k, new Set());
			attrMap.get(k)!.add(val);
		}
	}

	const attrs = [...attrMap.entries()];
	if (attrs.length === 0) return null;

	return (
		<div className="flex flex-col gap-4">
			{attrs.map(([name, values]) => {
				const vals = [...values];
				const allHex = vals.every(isHex);
				const label = name;
				return (
					<div key={name} className="flex flex-col gap-4">
						<span className="font-semibold text-brand-dark text-sm uppercase tracking-wider">
							{label}
						</span>
						{allHex ? (
							<ColorRadio>
								{vals.map((val) => (
									<ColorRadioItem
										key={val}
										aria-label={val}
										className={
											selected[name] === val
												? "border-brand-dark"
												: "hover:border-brand-dark"
										}
										onClick={() => onChange({ ...selected, [name]: val })}
									>
										<Swatch color={val} />
									</ColorRadioItem>
								))}
							</ColorRadio>
						) : (
							<div className="flex flex-wrap gap-2 lg:gap-3">
								{vals.map((val) => (
									<button
										key={val}
										type="button"
										className={cn(
											"cursor-pointer flex h-9 lg:h-14 w-9 lg:w-14 items-center justify-center border font-medium text-sm transition-colors",
											selected[name] === val
												? "border-brand-dark bg-brand-dark text-white"
												: "text-brand-dark hover:border-brand-dark",
										)}
										onClick={() => onChange({ ...selected, [name]: val })}
									>
										{val}
									</button>
								))}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
