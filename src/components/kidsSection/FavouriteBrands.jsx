

import { useNavigate } from "react-router-dom"

import favouriteBrandsImg from "../../assets/kids/favourite-brands.jpg"

function FavouriteBrands() {

  const navigate = useNavigate()

  return (

    <div
      className="
        px-4
        md:px-8
        lg:px-10

        py-2
        md:py-4
      "
    >

     

      <h1
        className="
          text-2xl
          md:text-3xl

          font-bold

          tracking-widest

          text-gray-600

          mb-1
          md:mb-2
        "
      >
        FAVOURITE BRANDS
      </h1>


      

      <div
        onClick={() => navigate("/")}

        className="
          cursor-pointer

          hover:scale-[1.01]

          transition
          duration-300
        "
      >

        <img
          src={favouriteBrandsImg}

          alt="Favourite Brands"

          className="
            w-full

            object-cover
          "
        />

      </div>

    </div>

  )

}

export default FavouriteBrands