
import { useNavigate } from "react-router-dom"

import hmImg from "../../assets/kids/iconicBrands/hm.jpg"
import mangoImg from "../../assets/kids/iconicBrands/mango.jpg"
import chiccoImg from "../../assets/kids/iconicBrands/chicco.jpg"
import marksImg from "../../assets/kids/iconicBrands/marks.jpg"
import tommyImg from "../../assets/kids/iconicBrands/tommy.jpg"

function IconicBrands() {

  const navigate = useNavigate()

  const brands = [

    {
      id: 1,
      image: hmImg
    },

    {
      id: 2,
      image: mangoImg
    },

    {
      id: 3,
      image: chiccoImg
    },

    {
      id: 4,
      image: marksImg
    },

    {
      id: 5,
      image: tommyImg
    }

  ]


  return (

    <div
      className="
        px-4
        md:px-8
        lg:px-10

        py-6
        md:py-10
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
          md:mb-18
        "
      >
        ICONIC BRANDS
      </h1>


      

      <div
        className="
          grid

          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
        "
      >

        {brands.map((brand) => (

          <div
            key={brand.id}

            onClick={() => navigate("/kids")}

            className="
              bg-[#f28c68]

              p-2
              md:p-5

              rounded-b-3xl

              cursor-pointer

            "
          >

            {/* INNER WHITE CARD */}

            <div
              className="
                bg-white

                rounded-2xl

                overflow-hidden
              "
            >

              <img
                src={brand.image}

                alt="Brand"

                className="
                  w-full

                  object-cover
                "
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default IconicBrands