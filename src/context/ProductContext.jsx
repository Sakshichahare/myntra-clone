import {createContext, useState, useEffect} from "react"
import axios from "axios"

export const ProductContext = createContext()


export function ProductProvider({ children}){

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect( () =>{

        axios
         .get("/data/products.json")

         .then( (response) => {
            setProducts(response.data)
            setLoading(false)
         })

         .catch((error) => {
            console.log(error)
            setLoading(false)
         })

    }, [])

    return (

     <ProductContext.Provider
       value={
        {
            products,
            loading
        }
       }
     >
        {children}
     </ProductContext.Provider>







    )
}