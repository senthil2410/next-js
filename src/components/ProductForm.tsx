"use client";
import React from "react";

const  ProductForm=({ form, onChange, onSubmit, isEditing }: any)=>
 {
  return (
    <div>
      <h2>{isEditing ? "Update " : "Create "}</h2>

      <input
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={onChange}
      />

      <input
        name="price"
        type="number"
        placeholder="Enter Price"
        value={form.price}
        onChange={onChange}
      />

      <input
        name="category"
        placeholder="Enter Category"
        value={form.category}
        onChange={onChange}
      />

      <input
        name="stock"
        type="number"
        placeholder="ENTER Stock"
        value={form.stock}
        onChange={onChange}
      />

      <button onClick={onSubmit}>{isEditing ? "Update" : "Create"}</button>
    </div>
  );
}

export default ProductForm;
