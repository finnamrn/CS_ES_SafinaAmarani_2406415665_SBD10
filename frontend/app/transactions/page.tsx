"use client";

import { useEffect,useState } from "react";
import { getHistory } from "../../lib/api";

export default function Transactions(){

  const [data,setData] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if(token){
      getHistory(token).then(res=>{
        setData(res.payload || []);
      });
    }
  },[]);

  return(
    <div className="trx-wrap">

      <h1>Transactions</h1>

      {data.length === 0 && (
        <div className="trx-box">No transaction history.</div>
      )}

      {data.map((trx:any)=>(
        <div key={trx.id} className="trx-box">
          <h2>{trx.item_name}</h2>
          <p>Qty: {trx.quantity}</p>
          <p>Total: Rp {trx.total}</p>
          <span>{trx.status}</span>
        </div>
      ))}

    </div>
  );
}