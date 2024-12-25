"use client"
import { useState } from "react"
import "../style.css"
export default function Page() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [color, setColor] = useState("")
  const [company, setCompany] = useState("")
  const [category, setCategory] = useState("")

  const addProduct = async () => {
    console.log(name, price, color, company, category)

    let data = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, category })
    });
    data = await data.json();
    if (result.success) {
      alert("new product added")
    }
  }
  return (
    <div>
      <h1>Add Products</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="input" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" className="input" />
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Color" className="input" />
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company" class="input" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" class="input" />
      <button class="btn" onClick={addProduct}>Add Product</button>
    </div>
  )
}