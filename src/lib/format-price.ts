export function formatPrice(
	amount: number | null | undefined,
	currency: "IDR" | "USD",
): string {
	if (amount == null || Number.isNaN(amount)) {
		return currency === "IDR" ? "Rp 0" : "$0.00";
	}
	if (currency === "IDR") {
		return `Rp ${Math.round(amount).toLocaleString("id-ID")}`;
	}
	return `$${amount.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}`;
}
