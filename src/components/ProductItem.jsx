/* eslint-disable react/prop-types */

import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function ProductItem({ product }) {
  return (
    <li className="bg-stone-400">
      <article className="flex flex-col h-auto justify-between">
        <div></div>
        <img
          src={`http://localhost:3000${product.image}`}
          alt={product.name}
          className="w-auto h-64 object-cover"
        />
        <div>
          <h3>{product.name}</h3>
          <p>{currencyFormatter.format(product.price)}</p>
          <h3 className="mt-4">{product.description}</h3>
        </div>
        <p>
          <Button>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
