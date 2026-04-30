"use client";

import { useEffect, useState } from "react";
import { createTransaction, getItems } from "../lib/api";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((res) => {
      setItems(res.payload || []);
    });
  }, []);

  async function handleBuy(itemId:number) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      alert("Login dulu");
      return;
    }

    const res = await createTransaction(
      Number(userId),
      itemId,
      1,
      token
    );

    if (res.success) {
      alert("Berhasil beli");
    } else {
      alert(res.message);
    }
  }

  return (
    <main className="home-wrap">

      <section className="hero-min">
        <h1>NEXUS STORE</h1>
        <p>Modern devices & essential gear.</p>
      </section>

      <section className="grid-products">

        {items.map((item:any, index:number) => (
          <div className="card-product" key={item.id}>

            <img
              src={`https://picsum.photos/400/400?random=${index + 1}`}
              alt={item.name}
              className="product-img"
            />

            <h3>{item.name}</h3>

            <p>Rp {item.price}</p>

            <button onClick={() => handleBuy(item.id)}>
              Buy
            </button>

          </div>
        ))}

      </section>

    </main>
  );
}