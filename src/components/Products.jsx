import { useEffect, useState } from "react";
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
    <ul>
      {loadProducts.map((product) => (
        <li key={product.title}>{product.name}</li>
      ))}
    </ul>
  );
}
