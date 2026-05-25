import {

  useContext

} from "react"

import {

  BagContext

} from "../context/BagContext"



function Bag() {

  const {

    bagItems,

    removeFromBag,

    increaseQuantity,

    decreaseQuantity,

    totalPrice

  } = useContext(
    BagContext
  )



  // TOTAL ITEM COUNT

  const totalItems =

    bagItems.reduce(

      (total, item) =>

        total + item.quantity,

      0
    )



  // EMPTY BAG

  if (bagItems.length === 0) {

    return (

      <div
        className="
          flex
          flex-col

          items-center
          justify-center

          min-h-[70vh]
        "
      >

        <h1
          className="
            text-3xl
            font-bold

            mb-4
          "
        >
          Your Bag is Empty
        </h1>

        <p className="text-gray-500">
          Add products to continue shopping
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

        grid

        lg:grid-cols-[2fr_1fr]

        gap-10
      "
    >

      {/* LEFT SIDE */}

      <div>

        <h1
          className="
            text-3xl
            font-bold

            mb-8
          "
        >
          Shopping Bag
        </h1>



        <div className="space-y-6">

          {
            bagItems.map((item) => (

              <div

                key={item.id}

                className="
                  flex

                  gap-4

                  border

                  p-4

                  rounded-md
                "
              >

                {/* IMAGE */}

                <img

                  src={item.images[0]}

                  alt={item.title}

                  className="
                    w-32
                    h-40

                    object-cover
                  "
                />



                {/* DETAILS */}

                <div className="flex-1">

                  <h2
                    className="
                      font-bold

                      text-lg
                    "
                  >
                    {item.brand}
                  </h2>

                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-2

                      font-semibold
                    "
                  >
                    ₹{item.price}
                  </p>



                  {/* QUANTITY */}

                  <div
                    className="
                      flex

                      items-center

                      gap-3

                      mt-4
                    "
                  >

                    <button

                      onClick={() =>
                        decreaseQuantity(item.id)
                      }

                      className="
                        border

                        w-8
                        h-8
                      "
                    >
                      -
                    </button>



                    <span>
                      {item.quantity}
                    </span>



                    <button

                      onClick={() =>
                        increaseQuantity(item.id)
                      }

                      className="
                        border

                        w-8
                        h-8
                      "
                    >
                      +
                    </button>

                  </div>



                  {/* REMOVE */}

                  <button

                    onClick={() =>
                      removeFromBag(item.id)
                    }

                    className="
                      mt-4

                      text-red-500

                      text-sm

                      font-semibold
                    "
                  >
                    REMOVE
                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>



      {/* RIGHT SIDE */}

      <div
        className="
          border

          h-fit

          p-6

          rounded-md
        "
      >

        <h2
          className="
            text-xl
            font-bold

            mb-6
          "
        >
          PRICE DETAILS
        </h2>



        <div
          className="
            flex
            justify-between

            mb-4
          "
        >

          <span>
            Total Items
          </span>

          <span>
            {totalItems}
          </span>

        </div>



        <div
          className="
            flex
            justify-between

            mb-4
          "
        >

          <span>
            Total Amount
          </span>

          <span>
            ₹{totalPrice}
          </span>

        </div>



        <hr className="my-4" />



        <button
          className="
            w-full

            bg-pink-500

            text-white

            py-3

            font-bold

            hover:bg-pink-600

            transition-all
          "
        >

          PLACE ORDER

        </button>

      </div>

    </div>

  )

}

export default Bag