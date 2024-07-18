import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
export default function Products() {
  const [loadProducts, setLoadProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        return;
      }

      const products = await response.json();
      setLoadProducts(products);
    }

    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <ul
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }}
      >
        {loadProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
