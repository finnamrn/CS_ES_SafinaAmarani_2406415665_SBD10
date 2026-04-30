const BASE_URL = "http://localhost:3000";

export async function loginUser(data:any){
  const res = await fetch(`${BASE_URL}/auth/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  return res.json();
}

export async function registerUser(data:any){
  const res = await fetch(`${BASE_URL}/user/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  return res.json();
}

export async function createTransaction(
  user_id:number,
  item_id:number,
  quantity:number,
  token:string
){
  const res = await fetch(`${BASE_URL}/transaction/create`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify({
      user_id,
      item_id,
      quantity,
      description:"Buy from frontend"
    })
  });

  return res.json();
}

export async function getHistory(token:string){
  const res = await fetch(`${BASE_URL}/user/history`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  });

  return res.json();
}

export async function getItems(){
  const res = await fetch(`${BASE_URL}/items`);
  return res.json();
}