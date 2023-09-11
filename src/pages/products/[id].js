import React from 'react'

export async function getStaticPaths(){

    try{const res = await fetch('https://fakestoreapi.com/products/')
    const posts = await res.json()
   
 
    const paths = posts.map(post=>(
        {
            params:{id: post.id.toString()}
        }
    ))
    return{
        paths,
        fallback: false
    }

}catch{err=>console.log(err)}

   

}

export async function getStaticProps({params}){
  
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const Data = await res.json()

    return {
        props:{Data},
        revalidate: 60
    }
}

export default Product
function Product({Data}) {
    
  return (
    <div className="flex min-h-screen 
    h-72 bg-gradient-to-l from-blue-600/[0.5] to-white-600
      flex-col items-center
     p-24" >
         <h1 >{Data.title}</h1>
        <img className="h-80"src={Data.image} />
        
            <p >
                price: {Data.price}$
            </p>
            <p >
                stars:{Data.rating.rate} </p>
                 <p> ratings: {Data.rating.count}</p>
                 <p >{Data.description}</p>
       
      


    </div>
  )
}

