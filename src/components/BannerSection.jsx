

import { useNavigate } from "react-router-dom"

function BannerSection({ bannerImage }) {

  const navigate = useNavigate()

  return (

    <div className="relative w-full overflow-hidden">

     

      <img
        src={bannerImage}

        alt="Banner"

        className="
          w-full
          
          px-4
          
          h-40
          sm:h-56
          md:h-72
          lg:h-96

          object-cover
          object-top
        "
      />


      
      <div
        onClick={() => navigate("/women")}

        className="
          absolute
          top-0
          left-0

          w-1/2
          h-full

          z-10

          cursor-pointer
        "
      ></div>


      

      <div
        onClick={() => navigate("/men")}

        className="
          absolute
          top-0
          right-0

          w-1/2
          h-full

          z-10

          cursor-pointer
        "
      ></div>


    

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-end

          px-6
          md:px-12
          lg:px-20

          z-20

          pointer-events-none
        "
      >

        <div className="text-right text-white">

          {/* TOP TEXT */}

          <p
            className="
              text-sm
              md:text-lg
              lg:text-xl

              font-semibold

              mb-2
            "
          >
            Prices Crashing On Top Brands
          </p>


        
          <h1
            className="
              text-3xl
              md:text-5xl
              lg:text-6xl

              font-bold

              mb-5
            "
          >
            50-80% OFF
          </h1>


          
          <button
            className="
              bg-white
              text-black

              px-5
              py-2
              md:px-7
              md:py-3

              rounded-md

              font-semibold

              text-sm
              md:text-base

              shadow-lg
            "
          >
            SHOP NOW
          </button>

        </div>

      </div>

    </div>

  )

}

export default BannerSection