import Link from "next/link";

export async function getServerSideProps (){
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    return {props:
       {  products}}
}

export default function Products({ products }) {
  return (
    <main>
      <h1 className="text-center text-3xl my-2">All products</h1>
     
          <div className=" grid grid-cols-4 justify-center items-center p-10">
        {products.map((product) => (
        
          <Link key={product.id} 
       
        className=" max-h-screen h-80 w-60 m-10"

          href={`/products/${product.id}`}>
            
            <img src={product.image} />
            <h1 >{product.title}</h1>
          </Link>
      ))}</div>
    </main>
  );
}

