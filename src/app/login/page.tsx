"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) =>
 {
    e.preventDefault();

    try {
        const { data } = await axios.post("/api/login", formData);
        console.log("Login successful", data);
        router.push("/about");
    } 
    catch (error: unknown) {
        console.error("Login failed", error);
    }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter the email here"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
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
