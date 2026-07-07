/** Parse "Size: M, Color: #222" → { "Size": "M", "Color": "#222" } */
export function parseCombination(combo: string): Record<string, string> {
	return Object.fromEntries(
		combo.split(",").map((s) => {
			const [k, ...rest] = s.split(":").map((t) => t.trim());
			return [k, rest.join(":")];
		}),
	);
}

/** Match variant by selected attribute values. Falls back to default, then first. */
export function findVariantId(
	variants: { id: string; combination: string | null; is_default: boolean }[],
	selected: Record<string, string>,
): string | null {
	for (const v of variants) {
		if (!v.combination) continue;
		const attrs = parseCombination(v.combination);
		if (Object.entries(selected).every(([k, val]) => attrs[k] === val)) return v.id;
	}
	return variants.find((v) => v.is_default)?.id ?? variants[0]?.id ?? null;
}
