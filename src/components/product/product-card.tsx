import { cn } from "@/lib/utils";

interface BaseProps {
  className?: string
}

export interface ProductCardProps extends BaseProps {
  title: string,
  imageUrl: string,
  isSale: boolean,
  colors?: string[], // array of unique hex string
  formattedPrice: string,
  formattedStrikedPrice?: string,
}

export function ProductCard({
  className,
  title,
  imageUrl,
  isSale,
  colors,
  formattedPrice,
  formattedStrikedPrice,
}: ProductCardProps) {
  return (
    <div
      data-slot="product-card"
      className={cn("group relative flex flex-col gap-4", className)}
    >
      <ProductCardImage
        src={imageUrl}
        alt={title}
      />

      <ProductCardContent
        title={title}
        formattedPrice={formattedPrice}
        formattedStrikedPrice={formattedStrikedPrice}
        isSale={isSale}
      />

      {colors && colors.length > 0 && (
        <ProductColors colors={colors} />
      )}
    </div>
  );
}

export function ProductCardPrice({
  formattedPrice,
  formattedStrikedPrice,
}: {
  formattedPrice: string,
  formattedStrikedPrice?: string,
}) {
  return <div className="flex flex-col-reverse gap-2 text-base leading-normal md:flex-row md:items-baseline">
    <span>{formattedPrice}</span>
    {formattedStrikedPrice && (
      <span className="text-foreground/50 text-sm line-through">
        {formattedStrikedPrice}
      </span>
    )}
  </div>
}

export function ProductSaleBadge() {
  return <div className="inline-flex h-5.5 w-11.25 items-center justify-center bg-sale-badge-background text-sale-badge-foreground px-2.5 py-1 font-normal text-[10px]">
    SALE
  </div>
}

export function ProductColors({colors}:{colors: string[]}) {
  return <div className="mt-1 flex gap-1.5">
    {colors.map((color) => (
      <div
        className="h-1.5 w-5 rounded-full"
        key={color}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
}

export function ProductCardImage({ src, alt }: {src: string, alt: string}) {
  return <div className="aspect-270/320 w-full overflow-hidden bg-foreground/5">
    <img
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      height={320}
      src={src}
      width={270}
    />
  </div>
}

export function ProductCardContent(
  {
    title,
    formattedPrice,
    formattedStrikedPrice,
    isSale,
  }: {
    title: string,
    isSale?: boolean,
    formattedPrice: string,
    formattedStrikedPrice?: string,
  }
) {
  return <div className="flex flex-col-reverse justify-between gap-1.5 md:flex-row">
    <div className="flex flex-col gap-1.5">
      <h3 className="line-clamp-2 font-semibold text-base leading-normal">
        {title}
      </h3>
      <ProductCardPrice
        formattedPrice={formattedPrice}
        formattedStrikedPrice={formattedStrikedPrice}
      />
    </div>

    {isSale && <ProductSaleBadge />}
  </div>
}
