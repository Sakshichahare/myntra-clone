
import {

  useContext,
  useEffect,
  useRef,
  useState

} from "react"

import {

  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X

} from "lucide-react"

import {

  Link,
  NavLink,
  useNavigate

} from "react-router-dom"

import { ProductContext } from "../../context/ProductContext"
import { useAuth } from "../../context/AuthContext"
import { WishlistContext } from "../../context/WishlistContext"
import { BagContext } from "../../context/BagContext"

import myntraLogo from "../../assets/logo/myntra.jpg"
import MenMegaMenu from "../megaMenu/MenMegaMenu"



function Header() {

  const { wishlistItems } = useContext( WishlistContext )
  const { bagItems } = useContext( BagContext )

  //header count
 const totalBagItems =

  bagItems.reduce(

    (total, item) =>

      total + item.quantity,

    0
  )



  const {

    token,
    user,
    logout

  } = useAuth()



  // GLOBAL PRODUCTS
  const {

    products

  } = useContext(ProductContext)



  // SEARCH STATE
  const [

    searchTerm,

    setSearchTerm

  ] = useState("")



  // NAVIGATE
  const navigate = useNavigate()



  // SEARCH SUGGESTIONS
  const suggestions = [

    ...new Set(

      products.flatMap((product) => [

        `${product.brand}`,

        `${product.brand} ${product.type}`,

        `${product.color} ${product.type}`,

        `${product.category}`,

        `${product.type}`

      ])

    )

  ]



  // FILTERED SUGGESTIONS

  const filteredSuggestions =

    suggestions.filter((item) =>

      item
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )

    )



  // MEGA MENU

  const [

    showMenMenu,

    setShowMenMenu

  ] = useState(false)



  // MOBILE SIDEBAR

  const [

    isMenuOpen,

    setIsMenuOpen

  ] = useState(false)



  const sidebarRef = useRef(null)



  // CLOSE SIDEBAR OUTSIDE CLICK

  useEffect(() => {

    function handleClickOutside(event) {

      if (

        sidebarRef.current &&

        !sidebarRef.current.contains(
          event.target
        )

      ) {

        setIsMenuOpen(false)

      }

    }



    if (isMenuOpen) {

      document.addEventListener(

        "mousedown",

        handleClickOutside

      )

    }



    return () => {

      document.removeEventListener(

        "mousedown",

        handleClickOutside

      )

    }

  }, [isMenuOpen])



  // NAV LINK CLASS

  const navLinkClass = ({ isActive }) =>

    `
      hover:text-pink-500
      transition-all

      ${isActive
        ? "text-pink-500"
        : ""
      }
    `



  // ICON LINK CLASS

  const iconLinkClass = ({ isActive }) =>

    `
      flex
      flex-col

      items-center

      text-xs

      font-semibold

      hover:text-pink-500

      transition-all

      ${isActive
        ? "text-pink-500"
        : ""
      }
    `



  return (

    <header
      className="
        sticky
        top-0

        z-50

        shadow-md

        bg-white
      "
    >

      <div
        className="
          flex

          items-center
          justify-between

          px-3
          md:px-4
          lg:px-10

          py-3
          md:py-4
        "
      >

        {/* LOGO */}

        <div>

          <Link to="/home">

            <img

              src={myntraLogo}

              alt="Myntra Logo"

              className="
                w-12
                md:w-16
                lg:w-20

                object-contain

                cursor-pointer
              "
            />

          </Link>

        </div>



        {/* DESKTOP NAVBAR */}

        <nav
          className="
            hidden
            md:flex

            relative

            gap-2
            lg:gap-5

            font-bold

            text-xs
            lg:text-sm
          "
        >

          <div

            onMouseEnter={() =>
              setShowMenMenu(true)
            }

            onMouseLeave={() =>
              setShowMenMenu(false)
            }
          >

            <NavLink
              to="/men"
              className={navLinkClass}
            >

              MEN

            </NavLink>



            {
              showMenMenu &&
              <MenMegaMenu />
            }

          </div>



          <NavLink
            to="/women"
            className={navLinkClass}
          >

            WOMEN

          </NavLink>



          <NavLink
            to="/kids"
            className={navLinkClass}
          >

            KIDS

          </NavLink>



          <NavLink
            to="/home-living"
            className={navLinkClass}
          >

            HOME-LIVING

          </NavLink>



          <NavLink
            to="/beauty"
            className={navLinkClass}
          >

            BEAUTY

          </NavLink>

        </nav>



        {/* SEARCH BAR */}

        <div
          className="
            relative

            hidden
            sm:block

            w-40
            md:w-56
            lg:w-72
          "
        >

          {/* INPUT AREA */}

          <div
            className="
              flex

              items-center

              bg-gray-100

              px-3
              py-2

              rounded-md
            "
          >

            <Search size={18} />



            <input

              type="text"

              placeholder="
                Search for products,
                brands and more
              "

              className="
                bg-transparent

                ml-2

                outline-none

                w-full

                text-sm
              "

              value={searchTerm}

              onChange={(e) =>
                setSearchTerm(e.target.value)
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  navigate(

                    `/search?q=${searchTerm}`

                  )

                }

              }}
            />

          </div>



          {/* SEARCH DROPDOWN */}

          {
            searchTerm && (

              <div
                className="
                  absolute

                  top-full
                  left-0

                  w-full

                  bg-white

                  shadow-xl

                  rounded-md

                  mt-1

                  z-50

                  max-h-[400px]

                  overflow-y-auto
                "
              >

                {

                  filteredSuggestions

                    .slice(0, 8)

                    .map((item, index) => (

                      <div

                        key={index}

                        className="
                          p-3

                          hover:bg-gray-100

                          cursor-pointer

                          text-sm

                          transition-all
                        "

                        onClick={() => {

                          setSearchTerm(item)

                          navigate(

                            `/search?q=${item}`

                          )

                        }}
                      >

                        {item}

                      </div>

                  ))
                }

              </div>

            )
          }

        </div>



        {/* RIGHT ICONS */}

        <div
          className="
            flex

            items-center

            gap-3
            md:gap-6
          "
        >

          {/* PROFILE */}

          <div className="relative group ">

            <NavLink
              to={
                token
                  ? "/profile"
                  : "/login"
              }
              className={iconLinkClass}
            >

              <User size={20} />

              <span className="hidden sm:block">
                Profile
              </span>

            </NavLink>



            {/* DROPDOWN */}

            <div
              className="
                absolute
                top-9
                right-0
                hidden
                group-hover:block
                w-72
                bg-white
                shadow-xl
                border
                rounded-md
                p-4
                z-50
              "
            >

              {
                token ? (

                  <>

                  <img

                    src={user?.image}

                    alt={user?.firstName}

                    className="
                    w-14
                    h-14

                    rounded-full

                    object-cover

                    mb-3

                    border
                    "
                   />

                    <h2 className="font-bold text-lg">
                      Hello {user?.firstName}
                    </h2>

                    <p className="text-gray-600 text-sm">
                      {user?.email}
                    </p>

                    <hr className="my-4" />

                    <div className="flex flex-col gap-2">

                      <NavLink
                        to="/profile"
                        className="hover:text-pink-500"
                      >
                        Edit Profile
                      </NavLink>

                      <NavLink
                        to="/wishlist"
                        className="hover:text-pink-500"
                      >
                        Wishlist
                      </NavLink>

                      <NavLink
                        to="/bag"
                        className="hover:text-pink-500"
                      >
                        Bag
                      </NavLink>

                      <button
                        onClick={logout}
                        className="
                          text-left
                          hover:text-pink-500
                        "
                      >
                        Logout
                      </button>

                    </div>

                  </>

                ) : (

                  <>

                    <h2 className="font-bold text-lg">
                      Welcome
                    </h2>

                    <p className="text-gray-600 text-sm">
                      To access account and
                      manage orders
                    </p>

                    <Link to="/login">

                      <button
                        className="
                          mt-4
                          border
                          border-pink-500
                          text-pink-500
                          px-6
                          py-2
                          font-bold
                          text-sm
                          hover:border-black
                        "
                      >
                        LOGIN / SIGNUP
                      </button>

                    </Link>

                    <hr className="my-4" />

                    <div className="flex flex-col gap-2">

                      <NavLink
                        to="/wishlist"
                        className="hover:text-pink-500"
                      >
                        Wishlist
                      </NavLink>

                      <NavLink
                        to="/bag"
                        className="hover:text-pink-500"
                      >
                        Bag
                      </NavLink>

                    </div>

                  </>

                )
              }

            </div>

          </div>



          {/* WISHLIST */}

          <NavLink
           to="/wishlist"
           className={iconLinkClass}
          >

            <div className="relative">

             <Heart size={20} />

             {
              wishlistItems.length > 0 && (

            <span
            className="
            absolute

            -top-2
            -right-2

            bg-pink-500

            text-white

            text-[10px]

            w-4
            h-4

            flex
            items-center
            justify-center

            rounded-full
          "
        >

          {wishlistItems.length}

          </span>

            )
         }

            </div>

           <span className="hidden sm:block">
            Wishlist
           </span>

         </NavLink>



          {/* BAG */}

         <NavLink
           to="/bag"
           className={iconLinkClass}
         >

        <div className="relative">

        <ShoppingBag size={20} />

         {
           totalBagItems > 0 && (

            <span
            className="
            absolute

            -top-2
            -right-2

            bg-pink-500

            text-white

            text-[10px]

            w-4
            h-4

            flex
            items-center
            justify-center

            rounded-full
          "
        >

          {totalBagItems}

        </span>

          )
       }

     </div>

     <span className="hidden sm:block">
          Bag
     </span>

     </NavLink>



          {/* MOBILE MENU BUTTON */}

          <button

            className="md:hidden"

            onClick={() =>
              setIsMenuOpen(true)
            }
          >

            <Menu size={24} />

          </button>

        </div>

      </div>



      {/* MOBILE SIDEBAR */}

      <div

        ref={sidebarRef}

        className={`
          fixed

          top-0
          left-0

          h-full
          w-64

          border-r
          border-gray-300

          bg-white

          shadow-lg

          z-50

          md:hidden

          transform

          transition-transform
          duration-500

          ease-in-out

          ${
            isMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* SIDEBAR HEADER */}

        <div
          className="
            flex

            items-center
            justify-between

            p-4

            border-b
          "
        >

          <h2
            className="
              text-lg

              font-bold
            "
          >

            MENU

          </h2>



          <button
            onClick={() =>
              setIsMenuOpen(false)
            }
          >

            <X size={24} />

          </button>

        </div>



        {/* SIDEBAR LINKS */}

        <nav
          className="
            flex
            flex-col

            p-4

            gap-4

            font-semibold
          "
        >

          <NavLink
            to="/men"
            className={navLinkClass}
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            MEN
          </NavLink>

          <NavLink
            to="/women"
            className={navLinkClass}
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            WOMEN
          </NavLink>

          <NavLink
            to="/kids"
            className={navLinkClass}
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            KIDS
          </NavLink>

          <NavLink
            to="/home-living"
            className={navLinkClass}
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            HOME-LIVING
          </NavLink>

          <NavLink
            to="/beauty"
            className={navLinkClass}
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            BEAUTY
          </NavLink>

        </nav>

      </div>

    </header>

  )

}

export default Header