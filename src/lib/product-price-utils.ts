import { formatPrice } from "./format-price";

export interface PriceCardProps {
	formattedPrice: string;
	formattedStrikedPrice?: string;
	isSale: boolean;
}

export function getProductCardPriceProps(params: {
	price: number | undefined;
	discount_price: number | undefined;
	price_usd: number | undefined;
	discount_price_usd: number | undefined;
	preferredCurrency: "IDR" | "USD";
}): PriceCardProps {
	const {
		price,
		discount_price,
		price_usd,
		discount_price_usd,
		preferredCurrency,
	} = params;
	const useUsd = preferredCurrency === "USD";

	return {
		formattedPrice: useUsd
			? discount_price_usd
				? formatPrice(discount_price_usd, "USD")
				: formatPrice(price_usd, "USD")
			: discount_price
				? formatPrice(discount_price, "IDR")
				: formatPrice(price, "IDR"),
		formattedStrikedPrice: useUsd
			? discount_price_usd
				? formatPrice(price_usd, "USD")
				: undefined
			: discount_price
				? formatPrice(price, "IDR")
				: undefined,
		isSale: useUsd
			? (discount_price_usd ?? 0) > 0
			: (discount_price ?? 0) > 0,
	};
}
