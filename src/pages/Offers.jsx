

function Offers() {

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="max-w-7xl mx-auto">

        <h1
          className="
            text-3xl
            md:text-5xl

            font-bold

            text-pink-500

            text-center

            mb-10
          "
        >
          EXCLUSIVE OFFERS
        </h1>


        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-6
          "
        >

          {/* CARD 1 */}

          <div
            className="
              bg-white

              rounded-xl

              shadow-md

              p-6

              hover:scale-105
              transition
              duration-300
            "
          >

            <h2 className="text-2xl font-bold mb-3">
              Flat 50% OFF
            </h2>

            <p className="text-gray-600 mb-4">
              On selected fashion brands.
            </p>

            <button
              className="
                bg-pink-500
                hover:bg-pink-600

                text-white

                px-5
                py-2

                rounded-md

                transition
              "
            >
              Grab Offer
            </button>

          </div>


          {/* CARD 2 */}

          <div
            className="
              bg-white

              rounded-xl

              shadow-md

              p-6

              hover:scale-105
              transition
              duration-300
            "
          >

            <h2 className="text-2xl font-bold mb-3">
              Buy 1 Get 1
            </h2>

            <p className="text-gray-600 mb-4">
              On casual wear collections.
            </p>

            <button
              className="
                bg-pink-500
                hover:bg-pink-600

                text-white

                px-5
                py-2

                rounded-md

                transition
              "
            >
              Shop Now
            </button>

          </div>


          {/* CARD 3 */}

          <div
            className="
              bg-white

              rounded-xl

              shadow-md

              p-6

              hover:scale-105
              transition
              duration-300
            "
          >

            <h2 className="text-2xl font-bold mb-3">
              Extra 20% OFF
            </h2>

            <p className="text-gray-600 mb-4">
              Using bank offers.
            </p>

            <button
              className="
                bg-pink-500
                hover:bg-pink-600

                text-white

                px-5
                py-2

                rounded-md

                transition
              "
            >
              Explore
            </button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Offers