"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

export interface Product {
  _id?: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  inActive?: boolean;
}

const ProductPage=()=>
{
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

   const [form, setForm] = useState({ name: "", price: 0,category: "",stock: 0});

   const fetchProducts = async () =>
   {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
    } 
    catch {
      console.log("Failed to fetch products");
    }
  };


   useEffect(() => {
    fetchProducts();
  }, []);


 const startEdit = (product: Product) =>
  {
    setEditingProduct(product);
    setForm({name: product.name,price: product.price,category: product.category,stock: product.stock});
  };


 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "name" || name === "category" ? value : Number(value),
    }));
  };
  

  const handleCreate = async () => 
  {
    try {
      const productData = { ...form,adminId:"68cba9a32aab08037469aff9"}
      await axios.post("/api/products", productData);

      setForm({ name: "", price: 0, category: "", stock: 0 });
      fetchProducts();
    } 
    catch {
      alert("Failed to create product");
    }
  };

 const handleUpdate = async () => 
  {
    if (!editingProduct) return;
    try 
    {
      await axios.put(`/api/products/${editingProduct._id}`, form);

      setEditingProduct(null);
      fetchProducts();
    } 
    catch {
      alert("Failed to update product");
    }
  };


  return(
<div>
    <ul>
        {products.map((p) => 
        (
        <li key={p._id} >
        <div>Name: {p.name}</div>
        <div>Price:{p.price}</div>
        <div>Category: {p.category}</div>
        <div>Stock: {p.stock}</div>
        <button onClick={() => startEdit(p)}>Edit</button>
        </li>)
    )}
    </ul>

     <ProductForm
        form={form}
        onChange={handleChange}
        onSubmit={editingProduct ? handleUpdate : handleCreate}
        isEditing={!!editingProduct}
      />
</div>
  ) }

  export default ProductPage;