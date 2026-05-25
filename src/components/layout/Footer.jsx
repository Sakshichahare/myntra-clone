

function Footer() {

  return (

    <footer className="bg-gray-100 mt-10 md:mt-16 px-4 md:px-8 lg:px-10 py-8 md:py-12">

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8 md:gap-10
        "
      >

        <div>

          <h2 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            ONLINE SHOPPING
          </h2>

          <ul className="space-y-2 text-sm md:text-base text-gray-600">

            <li className="cursor-pointer hover:text-pink-500 transition">
              Men
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              Women
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              Kids
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              Beauty
            </li>

          </ul>

        </div>

        

        <div>

          <h2 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            CUSTOMER POLICIES
          </h2>

          <ul className="space-y-2 text-sm md:text-base text-gray-600">

            <li className="cursor-pointer hover:text-pink-500 transition">
              Contact Us
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              FAQ
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              T&C
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              Terms Of Use
            </li>

            <li className="cursor-pointer hover:text-pink-500 transition">
              Track Orders
            </li>

          </ul>

        </div>

      

        <div>

          <h2 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            EXPERIENCE MYNTRA APP
          </h2>

          <p className="text-sm md:text-base text-gray-600">
            Download App For Android and iOS
          </p>

        </div>

        

        <div>

          <h2 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            KEEP IN TOUCH
          </h2>

          <div className="space-y-2 text-sm md:text-base text-gray-600">

            <p className="cursor-pointer hover:text-pink-500 transition">
              Instagram
            </p>

            <p className="cursor-pointer hover:text-pink-500 transition">
              YouTube
            </p>

            <p className="cursor-pointer hover:text-pink-500 transition">
              Twitter
            </p>

          </div>

        </div>

      </div>

    

      <div
        className="
          border-t
          mt-8 md:mt-10
          pt-5 md:pt-6
          text-center
          text-sm md:text-base
          text-gray-500
        "
      >

        © 2026 Myntra Clone. All rights reserved.

      </div>

    </footer>

  )

}

export default Footer