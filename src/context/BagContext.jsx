

import {

  createContext,
  useEffect,
  useState

} from "react"



export const BagContext =
  createContext()



export function BagProvider({

  children

}) {

  const [

    bagItems,
    setBagItems

  ] = useState(

    JSON.parse(

      localStorage.getItem("bag")

    ) || []

  )



  // SAVE CART

  useEffect(() => {

    localStorage.setItem(

      "bag",

      JSON.stringify(bagItems)

    )

  }, [bagItems])



  // ADD TO CART

  function addToBag(product) {

    const existingProduct =

      bagItems.find(

        (item) =>
          item.id === product.id
      )



    if (existingProduct) {

      const updatedBag =

        bagItems.map((item) =>

          item.id === product.id

            ? {

                ...item,

                quantity:
                  item.quantity + 1

              }

            : item
        )



      setBagItems(updatedBag)

    }

    else {

      setBagItems([

        ...bagItems,

        {

          ...product,

          quantity: 1

        }
      ])

    }

  }



  // REMOVE FROM CART

  function removeFromBag(id) {

    const filteredBag =

      bagItems.filter(

        (item) =>
          item.id !== id
      )



    setBagItems(filteredBag)

  }



  // INCREASE QUANTITY

  function increaseQuantity(id) {

    const updatedBag =

      bagItems.map((item) =>

        item.id === id

          ? {

              ...item,

              quantity:
                item.quantity + 1

            }

          : item
      )



    setBagItems(updatedBag)

  }



  // DECREASE QUANTITY

  function decreaseQuantity(id) {

    const updatedBag =

      bagItems.map((item) =>

        item.id === id

          ? {

              ...item,

              quantity:
                item.quantity - 1

            }

          : item
      ).filter(

        (item) =>
          item.quantity > 0
      )



    setBagItems(updatedBag)

  }



  // TOTAL PRICE

  const totalPrice =

    bagItems.reduce(

      (total, item) =>

        total +

        item.price * item.quantity,

      0
    )



  return (

    <BagContext.Provider

      value={{

        bagItems,

        addToBag,

        removeFromBag,

        increaseQuantity,

        decreaseQuantity,

        totalPrice

      }}
    >

      {children}

    </BagContext.Provider>

  )

}