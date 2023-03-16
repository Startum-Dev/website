import ProductCard from "../../../cards/ProductCard";

const ProductsTab = () => {
  return (
    <div className="w-full h-full flex flex-col md:grid md:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};
export default ProductsTab;
