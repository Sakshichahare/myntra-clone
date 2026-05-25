
import {

  createContext,
  useEffect,
  useState

} from "react"

export const WishlistContext =
  createContext()



export function WishlistProvider({

  children

}) {

  const [

    wishlistItems,

    setWishlistItems

  ] = useState(

    JSON.parse(

      localStorage.getItem(
        "wishlist"
      )

    ) || []

  )



  // SAVE TO LOCALSTORAGE

  useEffect(() => {

    localStorage.setItem(

      "wishlist",

      JSON.stringify(wishlistItems)

    )

  }, [wishlistItems])



  // ADD TO WISHLIST

  function addToWishlist(product) {

    const alreadyExists =

      wishlistItems.find(

        (item) =>
          item.id === product.id
      )



    if (!alreadyExists) {

      setWishlistItems([

        ...wishlistItems,

        product

      ])

    }

  }



  // REMOVE FROM WISHLIST

  function removeFromWishlist(id) {

    const filteredItems =

      wishlistItems.filter(

        (item) =>
          item.id !== id
      )



    setWishlistItems(filteredItems)

  }



  // TOGGLE WISHLIST

  function toggleWishlist(product) {

    const exists =

      wishlistItems.find(

        (item) =>
          item.id === product.id
      )



    if (exists) {

      removeFromWishlist(product.id)

    }

    else {

      addToWishlist(product)

    }

  }



  // CHECK EXISTS

  function isInWishlist(id) {

    return wishlistItems.some(

      (item) =>
        item.id === id
    )

  }



  return (

    <WishlistContext.Provider

      value={{

        wishlistItems,

        addToWishlist,

        removeFromWishlist,

        toggleWishlist,

        isInWishlist

      }}
    >

      {children}

    </WishlistContext.Provider>

  )

}