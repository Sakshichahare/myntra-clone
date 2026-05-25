
import { useState, useContext } from "react"
import { ProductContext } from "../context/ProductContext"

import Sidebar from "../components/beauty/Sidebar"
import ProductCard from "../components/beauty/ProductCard"

import {WishlistContext} from "../context/WishlistContext"


function Beauty() {


  const {
  toggleWishlist,

  isInWishlist

} = useContext(
  WishlistContext
)


    const {

        products,

        loading

      } = useContext(ProductContext)

console.log(useContext(ProductContext))



  //filter
  const [

     selectedCategories,

     setSelectedCategories

      ] = useState([])

  const [

     selectedDiscount,

     setSelectedDiscount

      ] = useState(null) 


     //sorting
      const [

      sortOption,

      setSortOption

       ] = useState("recommended")


       //for searchbar
       const [

         searchTerm,

         setSearchTerm

         ] = useState("")



  // LOADING UI

  if (loading) {

    return (

      <h1
        className="
          p-10

          text-2xl

          font-bold
        "
      >
        Loading products...
      </h1>

    )

  }
      const filteredProducts = products.filter((product) => {

       // CATEGORY FILTER

        const categoryMatch =

          selectedCategories.length === 0 ||

          selectedCategories.includes(
         product.category
        )


       // DISCOUNT FILTER

        const discountMatch =

           selectedDiscount === null ||

           product.discount >= selectedDiscount



        // SEARCH FILTER

         const searchMatch =

           product.brand
          .toLowerCase()

          .includes(
            searchTerm.toLowerCase()
           )



        return (

         categoryMatch &&

        discountMatch &&

        searchMatch

        )

       })

    

        //sorting
      const sortedProducts = [...filteredProducts]

       if (sortOption === "priceLow") {

      sortedProducts.sort(

    (a, b) => a.price - b.price

  )

}


else if (sortOption === "priceHigh") {

  sortedProducts.sort(

    (a, b) => b.price - a.price

  )

}

else if (sortOption === "discount") {

  sortedProducts.sort(

    (a, b) => b.discount - a.discount

  )

}

else if (sortOption === "rating") {

  sortedProducts.sort(

    (a, b) => b.rating - a.rating

  )

}


  return (

    <div
      className="
        flex

        bg-white

        min-h-screen
      "
    >

      {/* SIDEBAR */}

      <Sidebar

          selectedCategories={selectedCategories}

          setSelectedCategories={setSelectedCategories}

          selectedDiscount={selectedDiscount}

           setSelectedDiscount={setSelectedDiscount}

      />

      {/* RIGHT SIDE */}

      <div
        className="
          flex-1

          px-4
          md:px-6
          lg:px-8

          py-6
        "
      >


        {/* TOP SECTION */}

        <div
          className="
            flex
            flex-col
            md:flex-row

            md:items-center
            md:justify-between

            gap-4

            mb-8
          "
        >


          {/* TITLE */}

          <div>

            <h1
              className="
                text-2xl
                md:text-3xl

                font-bold
              "
            >
              Beauty & Personal Care
            </h1>


            <p
              className="
                text-gray-500

                mt-1
              "
            >
              {filteredProducts.length}+ Products
            </p>

          </div>



          {/* SORT DROPDOWN */}

          <select
            className="
              border

              px-4
              py-2

              text-sm

              outline-none

              bg-white
            "
             value={sortOption}

              onChange={(e) =>
              setSortOption(e.target.value)
               }
           
          >

            <option value="recommended">
                    Recommended
            </option>

            <option value="priceLow">
                  Price: Low to High
            </option>

            <option value="priceHigh">
                   Price: High to Low
            </option>

            <option value="discount">
                   Better Discount
            </option>

            <option value="rating">
                   Customer Rating
            </option>

          </select>

        </div>


         <input

            type="text"

            placeholder="Search products..."

            value={searchTerm}

            onChange={(e) =>
            setSearchTerm(e.target.value)
            }

           className="
            w-full

            border

            px-4
            py-3

            mb-6

            outline-none

            text-sm
           "
          />

        {/* PRODUCT GRID */}

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

          {sortedProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </div>

  )

}

export default Beauty