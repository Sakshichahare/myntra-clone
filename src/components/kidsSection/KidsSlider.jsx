
import { useEffect, useState } from "react"

import slide1 from "../../assets/kids/slide1.jpg"
import slide2 from "../../assets/kids/slide2.jpg"
import slide3 from "../../assets/kids/slide3.jpg"
import slide4 from "../../assets/kids/slide4.jpg"

function KidsSlider() {

  const slides = [
    slide1,
    slide2,
    slide3,
    slide4
   
  ]


  const [currentSlide, setCurrentSlide] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prevSlide) => {

        if (prevSlide === slides.length - 1) {
          return 0
        }

        return prevSlide + 1

      })

    }, 3000)

    return () => clearInterval(interval)

  }, [slides.length])


  return (

    <div className="w-full overflow-hidden">

      {/* SLIDER */}

      <div
        className="
          flex

          transition-transform
          duration-700
          ease-in-out
        "
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >

        {slides.map((slide, index) => (

          <img
            key={index}

            src={slide}

            alt={`Kids Slide ${index + 1}`}

            className="
              min-w-full

              h-48
              sm:h-64
              md:h-80
              lg:h-[28rem]

              object-cover
              object-top
            "
          />

        ))}

      </div>


      {/* DOTS */}

      <div
        className="
          flex
          justify-center

          gap-2

          mt-4
          mb-4
        "
      >

        {slides.map((_, index) => (

          <button
            key={index}

            onClick={() => setCurrentSlide(index)}

            className={`
              w-2
              h-2

              rounded-full

              transition-all
              duration-300

              ${
                currentSlide === index
                  ? "bg-gray-500 scale-125"
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

export default KidsSlider