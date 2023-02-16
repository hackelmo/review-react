import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  console.log([error, loading, products]);

  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
