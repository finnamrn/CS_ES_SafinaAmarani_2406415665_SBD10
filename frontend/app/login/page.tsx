"use client";

import { useState } from "react";
import { loginUser } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function Login(){

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function handleLogin(){

    const res = await loginUser({
      email,
      password
    });

    if(res.success){

      localStorage.setItem("token",res.payload.token);
      localStorage.setItem("userId",res.payload.user.id);

      router.push("/");
    }else{
      alert(res.message);
    }
  }

  return(
    <div className="auth-wrap">

      <div className="spotify-card">

        <h1>Log in to Nexus</h1>

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Log In
        </button>

      </div>

    </div>
  );
}