"use client"

import { useState, useEffect } from "react";
import  Link  from 'next/link';

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return data.success ? data.result : [];
};

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    })();
  }, []);
  console.log(products)
  return (
    <div>
      <h1>Products List</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td><Link href={"products/" + item._id}>Edit</Link ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
