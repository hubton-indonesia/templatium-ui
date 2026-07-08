import { ProductCard, ProductCardContent, ProductCardImage } from "./components/product/product-card";

export default function App() {
  return (
    <div>
      <h1 className="font-bold">Hello</h1>
      <div className="max-w-xs">
        <ProductCard>
          <ProductCardImage src="https://placehold.co/100x100" alt="Image" />
      		<ProductCardContent
       			title="Lorem ipsum"
       			formattedPrice="Rp 100"
       			formattedStrikedPrice="Rp 120"
       			isSale={false}
      		/>
        </ProductCard>
      </div>
    </div>
  );
}
