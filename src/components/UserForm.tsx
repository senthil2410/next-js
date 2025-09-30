"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"

const UserForm = ({ user, id }: { user: any; id: string }) => {
  const router = useRouter();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const  handleUpdate=async()=> {
    try {
      const res = await axios.put(`/api/userdetails/${id}`, { name, email, role });

      if (res.status === 200) {
         router.push('/parallel')

      } 
      else {
        alert('Failed to update user');
      }
    } 
    catch (error) {
      alert('Failed to update user');
      console.error(error);
    }
  }

    const  handleDelete=async()=>{
    try {
      const res = await axios.delete(`app/api/userdetails/${id}`);

      if (res.status === 200) {
        router.push('/users');
      } 
      else {
        alert('Failed to delete user');
      }
    } 
    catch (error) {
      alert('Failed to delete user');
      console.error(error);
    }
  }


  return (
    <div>
      <h1>Update User</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter the name"
      />
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter the email"
      />
       <br />
    <label>
        Role
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user"> User</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager </option>
        </select>
      </label>

       <button onClick={handleUpdate}>Update User</button>

        <button onClick={handleDelete}>Delete User</button>

    </div>
  );
};

export default UserForm
