"use client";

import { useState } from "react";
import { registerUser } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function Register(){

  const router = useRouter();

  const [form,setForm] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    password:""
  });

  async function handleRegister(){

    const res = await registerUser(form);

    if(res.success){
      alert("Register berhasil");
      router.push("/login");
    }else{
      alert(res.message);
    }
  }

  return(
    <div className="auth-wrap">

      <div className="spotify-card">

        <h1>Create Nexus Account</h1>

        <input
          placeholder="Full Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          placeholder="Username"
          onChange={(e)=>setForm({...form,username:e.target.value})}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          placeholder="Phone"
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button onClick={handleRegister}>
          Sign Up
        </button>

      </div>

    </div>
  );
}