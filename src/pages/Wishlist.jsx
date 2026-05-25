
import {

  useContext

} from "react"

import {

  WishlistContext

} from "../context/WishlistContext"



function Wishlist() {

  const {

    wishlistItems,
    removeFromWishlist

  } = useContext(
    WishlistContext
  )



  // EMPTY STATE

  if (wishlistItems.length === 0) {

    return (

      <div
        className="
          flex
          flex-col

          items-center
          justify-center

          min-h-[70vh]

          text-center
        "
      >

        <h1
          className="
            text-3xl
            font-bold

            mb-4
          "
        >
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-500">
          Add items you love ❤️
        </p>

      </div>

    )

  }



  return (

    <div
      className="
        px-4
        md:px-10
        py-10
      "
    >

      <h1
        className="
          text-3xl
          font-bold

          mb-8
        "
      >
        My Wishlist
      </h1>



      {/* PRODUCT GRID */}

      <div
        className="
          grid

          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-6
        "
      >

        {
          wishlistItems.map((product) => (

            <div

              key={product.id}

              className="
                border

                rounded-md

                overflow-hidden

                bg-white

                shadow-sm

                hover:shadow-lg

                transition-all
              "
            >

              {/* IMAGE */}

              <img

                src={product.image}

                alt={product.brand}

                className="
                  w-full

                  h-72

                  object-cover
                "
              />



              {/* DETAILS */}

              <div className="p-4">

                <h2
                  className="
                    font-bold

                    text-lg
                  "
                >
                  {product.brand}
                </h2>

                <p className="text-gray-600">
                  {product.type}
                </p>

                <p
                  className="
                    mt-2

                    font-semibold
                  "
                >
                  ₹ {product.price}
                </p>



                {/* REMOVE BUTTON */}

                <button

                  onClick={() =>
                    removeFromWishlist(
                      product.id
                    )
                  }

                  className="
                    mt-4

                    w-full

                    border

                    py-2

                    font-semibold

                    hover:bg-black
                    hover:text-white

                    transition-all
                  "
                >
                  Remove
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default Wishlist