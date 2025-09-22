"use client"

import React, { useState } from "react";


const Login=()=>
{
   const [form, setForm] = useState({ email: "", password: "" })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
   const handleSubmit=(e:React.FormEvent)=>
   {
     e.preventDefault();
     console.log("Form is submitted");
   }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter the email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter the password"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default Login;