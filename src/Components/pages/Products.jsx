
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import axios from "axios"





function Products() {
  const [data , setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/v1/api/products").then(
  function(res){
    setData(res.data.products)
  })
  }, [])
  return (
   <>
   <div  style={
    {
        display : 'flex',
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap",
        padding : "2rem"
    }
   }> 
    {data.map((item , index )=>{
     return <ProductCard key={index} title={item.title} src={item.image
      } description={item.description
      } price={item.price} />
    })}
   </div>
   </>
  )
}

export default Products