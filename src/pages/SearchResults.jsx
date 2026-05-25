
import { useContext } from "react"

import {useSearchParams} from "react-router-dom"

import {ProductContext} from "../context/ProductContext"

import ProductCard from "../components/beauty/ProductCard"



function SearchResults() {

  const {

    products

  } = useContext(ProductContext)



  // GET URL QUERY

  const [

    searchParams

  ] = useSearchParams()



  const query =

    searchParams
      .get("q")
      ?.toLowerCase()

      || ""



  // FILTER PRODUCTS

  const filteredProducts =

    products.filter((product) => {

      return (

        product.brand
          ?.toLowerCase()
          .includes(query)

        ||

        product.title
          ?.toLowerCase()
          .includes(query)

        ||

        product.category
          ?.toLowerCase()
          .includes(query)

        ||

        product.type
          ?.toLowerCase()
          .includes(query)

        ||

        product.color
          ?.toLowerCase()
          .includes(query)

      )

    })



  return (

    <div
      className="
        px-4
        md:px-8

        py-6
      "
    >

      <h1
        className="
          text-2xl

          font-bold

          mb-6
        "
      >

        Search Results for:

        <span className="text-pink-500">

          {" "} {query}

        </span>

      </h1>



      <div
        className="
          grid

          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5

          gap-6
        "
      >

        {

          filteredProducts.map((product) => (

            <ProductCard

              key={product.id}

              product={product}
            />

          ))

        }

      </div>

    </div>

  )

}

export default SearchResults