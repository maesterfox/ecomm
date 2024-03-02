import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  return (
    <div className="products-list">
      {products
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : "Loading products..."}
    </div>
  );
}

export default ProductsList;
