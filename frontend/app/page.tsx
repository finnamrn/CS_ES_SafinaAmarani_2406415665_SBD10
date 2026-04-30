"use client";

export default function Home(){

const items = [
 {id:1,name:"Laptop",price:1000000,img:"https://picsum.photos/id/1/400/400"},
 {id:2,name:"Mouse",price:50000,img:"https://picsum.photos/id/20/400/400"},
 {id:3,name:"Keyboard",price:150000,img:"https://picsum.photos/id/30/400/400"},
 {id:4,name:"Monitor",price:800000,img:"https://picsum.photos/id/40/400/400"},
 {id:5,name:"Headset",price:300000,img:"https://picsum.photos/id/50/400/400"},
 {id:6,name:"Webcam",price:250000,img:"https://picsum.photos/id/60/400/400"},
];

return(
<main className="home-wrap">

<section className="hero-min">
<h1>NEXUS STORE</h1>
<p>Modern devices & essential gear.</p>
</section>

<section className="grid-products">

{items.map((item)=>(
<div className="card-product" key={item.id}>

<img
src={item.img}
style={{
width:"100%",
height:"240px",
objectFit:"cover",
borderRadius:"12px"
}}
/>

<h3>{item.name}</h3>
<p>Rp {item.price}</p>

<button>Buy</button>

</div>
))}

</section>

</main>
)
}