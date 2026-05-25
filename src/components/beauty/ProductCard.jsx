
import { useEffect, useState, useContext } from "react"
import toast from "react-hot-toast"

import { WishlistContext} from "../../context/WishlistContext"
import { BagContext } from "../../context/BagContext"

function ProductCard({ product }) {

  const {

  toggleWishlist,
  isInWishlist

} = useContext(
  WishlistContext
)


const { addToBag } = useContext( BagContext )
  
  const [isHovered, setIsHovered] = useState(false)

  const [currentImage, setCurrentImage] = useState(0)


  // AUTO IMAGE SLIDER

  useEffect(() => {

    let sliderInterval

    if (isHovered) {

      sliderInterval = setInterval(() => {

        setCurrentImage((prev) =>

          prev === product.images.length - 1
            ? 0
            : prev + 1
        )

      }, 2000)

    }

    return () => clearInterval(sliderInterval)

  }, [isHovered, product.images.length])



  return (

    <div

      className="
        relative

        bg-white

        cursor-pointer

        overflow-hidden

        transition-all
        duration-300

        hover:shadow-lg
      "

      onMouseEnter={() =>
        setIsHovered(true)
      }

      onMouseLeave={() => {

        setIsHovered(false)

        setCurrentImage(0)

      }}
    >


      {/* IMAGE SECTION */}

      <div
        className="
          relative

          overflow-hidden

          bg-gray-100
        "
      >

        <img
          src={product.images[currentImage]}
          alt={product.title}

          className="
            w-full

            h-[260px]
            md:h-[320px]

            object-cover

            transition-all
            duration-500
          "
        />


        {/* RATING */}

        {!isHovered && (

          <div
            className="
              absolute

              bottom-3
              left-3

              bg-white/90

              px-2
              py-1

              text-xs

              font-semibold

              flex
              items-center

              gap-1

              rounded
            "
          >

            {product.rating} ★

            <span className="text-gray-500">
              | {product.reviews}
            </span>

          </div>

        )}



        {/* DOTS INDICATOR */}

        {isHovered && (

          <div
            className="
              absolute

              bottom-16
              left-1/2

              -translate-x-1/2

              flex

              gap-1
            "
          >

            {product.images.map((_, index) => (

              <div
                key={index}

                className={`
                  h-1.5

                  rounded-full

                  transition-all
                  duration-300

                  ${
                    currentImage === index
                      ? "bg-pink-500 w-3"
                      : "bg-gray-300 w-1.5"
                  }
                `}
              />

            ))}

          </div>

        )}


       {isHovered && (

  <div
    className="
      absolute

      bottom-3
      left-1/2

      -translate-x-1/2

      w-[85%]

      flex
      flex-col

      gap-2
    "
  >

    {/* ADD TO BAG */}

    <button

      onClick={() =>{
        addToBag(product)

        toast.success("Added To Bag")

      }
      }

      className="
        bg-pink-500

        text-white

        py-2

        font-semibold

        text-sm

        hover:bg-pink-600

        transition-all
      "
    >

      ADD TO BAG

    </button>



    {/* WISHLIST */}

    <button

      onClick={() =>{
        toggleWishlist(product)

       toast.success(
        isInWishlist(product.id)
        ?"Removed From Wishlist"
        :"Added To Wishlist"
       )
       }
      }

      className="
        bg-white

        border

        py-2

        font-semibold

        text-sm

        hover:border-gray-500

        transition-all
      "
    >

      {
        isInWishlist(product.id)

          ? "❤️ WISHLISTED"

          : "♡ WISHLIST"
      }

    </button>

  </div>

)}

       

      </div>



      {/* DETAILS */}

      <div className="p-3">


        {/* SIZE SECTION */}

        {isHovered && (

          <p
            className="
              text-sm

              text-gray-500

              mb-2
            "
          >
           Sizes: {product.sizes}
          </p>

        )}



        {/* BRAND */}

        <h2
          className="
            font-bold

            text-base
          "
        >
          {product.brand}
        </h2>



        {/* TITLE */}

        <p
          className="
            text-gray-500

            text-sm

            truncate
          "
        >
          {product.title}
        </p>



        {/* PRICE */}

        <div
          className="
            mt-2

            flex
            items-center

            gap-2

            flex-wrap
          "
        >

          <span
            className="
              font-bold

              text-base
            "
          >
            ₹{product.price}
          </span>


          <span
            className="
              text-gray-400

              line-through

              text-sm
            "
          >
            ₹{product.originalPrice}
          </span>


          <span
            className="
              text-orange-500

              text-sm

              font-medium
            "
          >
            ({product.discount}%OFF)
          </span>

        </div>

      </div>

    </div>

  )

}

export default ProductCard