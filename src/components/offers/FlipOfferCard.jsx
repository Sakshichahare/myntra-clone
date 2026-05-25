
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import offer1 from "../../assets/offers/offer1.jpg"
import offer2 from "../../assets/offers/offer2.jpg"


function FlipOfferCard() {

  const navigate = useNavigate()

  const [isFlipped, setIsFlipped] = useState(false)


  useEffect(() => {

    const interval = setInterval(() => {

      setIsFlipped((prev) => !prev)

    }, 2000)

    return () => clearInterval(interval)

  }, [])


  return (

    <div
      onClick={() => navigate("/offers")}

      className="
        px-2
        md:px-4
        lg:px-6

        py-6

        cursor-pointer
      "
    >

     

      <div className="[perspective:2000px]">

        {/* flip card */}

        <div
          className="
            relative

            w-full

            h-36
            md:h-44
            lg:h-44

            transition-transform
            duration-1000
            ease-in-out

            [transform-style:preserve-3d]

            rounded-2xl

            shadow-xl
          "
          style={{
            transform: isFlipped
              ? "rotateX(180deg)"
              : "rotateX(0deg)"
          }}
        >

          {/* front side */}

          <div
            className="
              absolute
              inset-0

              [backface-visibility:hidden]
            "
          >

            <img
              src={offer1}

              alt="Offer Front"

              className="
                w-full
                h-full

                object-cover

                rounded-2xl
              "
            />

          </div>


          {/* back side */}

          <div
            className="
              absolute
              inset-0

              [transform:rotateX(180deg)]

              [backface-visibility:hidden]
            "
          >

            <img
              src={offer2}

              alt="Offer Back"

              className="
                w-full
                h-full

                object-cover

                rounded-2xl
              "
            />

          </div>

        </div>

      </div>

    </div>

  )

}

export default FlipOfferCard









