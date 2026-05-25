
import { Search } from "lucide-react"
import { useState } from "react"

  function Sidebar({

  selectedCategories,

  setSelectedCategories,

  selectedDiscount,

  setSelectedDiscount

}){



  const [price, setPrice] = useState(9100)

  const categories = [
    "All",
    "Makeup",
    "Skincare",
    "Haircare",
    "Fragrances",
    "Bath & Body",
    "Appliances",
    "Men Grooming",
    "Beauty Gift Sets"

  ]


  const brands = [

    {
      name: "THE RUPAWAT Perfumery",
      count: 3616
    },

    {
      name: "PERFUME PLANET",
      count: 3045
    },

    {
      name: "CHIWA",
      count: 1405
    },

    {
      name: "VENVO",
      count: 1362
    },

    {
      name: "Park Daniel",
      count: 1294
    },

    {
      name: "Deve Herbes",
      count: 1620
    }

  ]


  const colors = [

    {
      name: "Black",
      color: "bg-black",
      count: 120
    },

    {
      name: "Red",
      color: "bg-red-500",
      count: 98
    },

    {
      name: "Gold",
      color: "bg-yellow-400",
      count: 66
    },

    {
      name: "Green",
      color: "bg-green-500",
      count: 52
    },

    {
      name: "Blue",
      color: "bg-blue-500",
      count: 80
    }

  ]


  const discountRanges = [

  10,

  20,

  30,

  40,

  50

]


  return (

    <aside
      className="
        w-[260px]

        hidden
        lg:block

        border-r

        bg-white

        sticky
        top-[80px]

        h-[calc(100vh-80px)]

        overflow-y-auto

        px-5
        py-6
      "
    >

    
      <h2
        className="
          text-lg
          font-bold

          mb-6
        "
      >
        FILTERS
      </h2>


     

      <div className="border-b pb-6 mb-6">

        <h3
          className="
            text-sm
            font-bold

            mb-4
          "
        >
          CATEGORIES
        </h3>


        <div className="space-y-3">

          {categories.map((category) => (

            <label
              key={category}

              className="
                flex
                items-center

                gap-3

                cursor-pointer

                text-sm
                text-gray-700

                hover:text-pink-500

                transition
              "
            >

               <input

                type="checkbox"

                checked={selectedCategories.includes(category)}

                onChange={(e) => {

                  if (e.target.checked) {

                    setSelectedCategories([

                      ...selectedCategories,

                      category

                     ])

                  }

                   else {

                    setSelectedCategories(

                      selectedCategories.filter(

                         (item) => item !== category

                            )
   
                          )
                
                        }

                      }}
                />

              <span>
                {category}
              </span>

            </label>

          ))}

        </div>

      </div>


     

      <div className="border-b pb-6 mb-6">

        
        <div
          className="
            flex
            items-center
            justify-between

            mb-4
          "
        >

          <h3
            className="
              text-sm
              font-bold
            "
          >
            BRAND
          </h3>


          <button
            className="
              w-7
              h-7

              rounded-full

              bg-gray-100

              flex
              items-center
              justify-center

              hover:bg-gray-200

              transition
            "
          >

            <Search size={14} />

          </button>

        </div>


       

        <div className="space-y-3">

          {brands.map((brand) => (

            <label
              key={brand.name}

              className="
                flex
                items-start

                gap-3

                cursor-pointer

                text-sm

                text-gray-700

                hover:text-pink-500

                transition
              "
            >

              <input
                type="checkbox"

                className="
                  mt-1

                  w-4
                  h-4

                  accent-pink-500

                  cursor-pointer
                "
              />


              <div>

                <span>
                  {brand.name}
                </span>

                <span
                  className="
                    text-gray-400

                    ml-1
                  "
                >
                  ({brand.count})
                </span>

              </div>

            </label>

          ))}

        </div>



        <button
          className="
            mt-4

            text-pink-500

            text-sm

            hover:text-pink-600
          "
        >
          + 4199 more
        </button>

      </div>


     
      <div className="border-b pb-6 mb-6">

        <h3
          className="
            text-sm
            font-bold

            mb-5
          "
        >
          PRICE
        </h3>


        <input
          type="range"

          min="0"
          max="9100"

          value={price}

          onChange={(e) =>
            setPrice(e.target.value)
          }

          className="
            w-full

            accent-pink-500

            cursor-pointer
          "
        />


        <p
          className="
            mt-3

            text-sm

            font-medium

            text-gray-800
          "
        >
          ₹0 - ₹{Number(price).toLocaleString()}
        </p>

      </div>


    

      <div className="border-b pb-6 mb-6">

        <h3
          className="
            text-sm
            font-bold

            mb-4
          "
        >
          COLOR
        </h3>


        <div className="space-y-3">

          {colors.map((item) => (

            <label
              key={item.name}

              className="
                flex
                items-center

                gap-3

                cursor-pointer

                text-sm

                text-gray-700

                hover:text-pink-500

                transition
              "
            >

              <input
                type="checkbox"

                className="
                  w-4
                  h-4

                  accent-pink-500

                  cursor-pointer
                "
              />


             

              <div
                className={`
                  w-4
                  h-4

                  rounded-full

                  border

                  ${item.color}
                `}
              ></div>


              <span>
                {item.name}
              </span>


              <span
                className="
                  text-gray-400
                "
              >
                ({item.count})
              </span>

            </label>

          ))}

        </div>

      </div>


      

      <div className="pb-6">

        <h3
          className="
            text-sm
            font-bold

            mb-4
          "
        >
          DISCOUNT RANGE
        </h3>


        <div className="space-y-3">

            {discountRanges.map((discount) => (
            <label
              key={discount}

              className="
                flex
                items-center

                gap-3

                cursor-pointer

                text-sm

                text-gray-700

                hover:text-pink-500

                transition
              "
            >

              <input
                type="radio"

                name="discount"

                className="
                  w-4
                  h-4

                  accent-pink-500

                  cursor-pointer"

                  checked={selectedDiscount === discount}

                     onChange={() =>
                     setSelectedDiscount(discount)
                        }
                
                />


              <span>
                 {discount}% and above
              </span>

            </label>

          ))}

           {/* CLEAR FILTER */}

    <button

      onClick={() =>
        setSelectedDiscount(null)
      }

      className="
        text-pink-500

        text-sm

        mt-2
      "
    >
      Clear Discount Filter
    </button>

        </div>

      </div>

    </aside>

  )

}

export default Sidebar