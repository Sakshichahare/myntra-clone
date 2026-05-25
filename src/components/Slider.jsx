
import { useEffect, useState } from "react"


function Slider({products}) {

 

  const [currentSlide, setCurrentSlide] = useState(0)

  const totalSlides = Math.ceil(products.length / 6)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prevSlide) => {

        if (prevSlide === totalSlides - 1) {
          return 0
        }

        return prevSlide + 1

      })

    }, 3000)

    return () => clearInterval(interval)

  }, [totalSlides])

  const groupedProducts = []

  for (let i = 0; i < products.length; i += 6) {

    groupedProducts.push(
      products.slice(i, i + 6)
    )

  }

  return (

    <div className="px-4 md:px-8 lg:px-10 py-6 md:py-10 ">


      <div className="bg-yellow-100 py-5 md:py-8 mb-6 md:mb-10 rounded-xl">

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-600 text-center">
          BUDGET FRIENDLY PICKS
        </h1>

      </div>


      <div className="overflow-hidden">

        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >

          {groupedProducts.map((slide, slideIndex) => (

            <div
              key={slideIndex}

              className="
                min-w-full
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-6
                gap-3 md:gap-5
              "
            >
                {/*for card */}
              {slide.map((item) => (

                <div
                  key={item.id}

                  className="
                    cursor-pointer
                    hover:scale-105
                    transition
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}

                    className="
                      w-full
                      h-44
                      md:h-56
                      lg:h-72
                      object-cover
                      rounded-t-xl
                    "
                  />

                  <div className="bg-yellow-400 text-center py-3 rounded-b-xl">

                    <h2 className="text-sm md:text-lg font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-lg md:text-2xl font-bold">
                      {item.discount}
                    </p>

                    <p className="text-sm md:text-lg font-semibold">
                      Shop Now
                    </p>

                  </div>

                </div>

              ))}

            </div>

          ))}

        </div>

      </div>

      {/* dot button */}

      <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">

        {groupedProducts.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentSlide(index)}

            className={`
              w-3 h-3 md:w-4 md:h-4
              rounded-full
              transition-all
              duration-300

              ${currentSlide === index
                ? "bg-gray-600 scale-125"
                : "bg-gray-300"
              }
            `}
          >

          </button>

        ))}

      </div>

    </div>

  )

}

export default Slider