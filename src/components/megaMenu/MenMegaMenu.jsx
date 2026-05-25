
function MenMegaMenu() {

  const menuColumns = [

    {
      bgColor: "bg-white",

      sections: [

        {
          title: "Topwear",

          items: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazers & Coats",
            "Suits",
            "Rain Jackets"
          ]
        },

        {
          title: "Indian & Festive Wear",

          items: [
            "Kurtas & Kurta Sets",
            "Sherwanis",
            "Nehru Jackets",
            "Dhotis"
          ]
        }

      ]
    },


    {
      bgColor: "bg-gray-50",

      sections: [

        {
          title: "Bottomwear",

          items: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers"
          ]
        },

        {
          title: "Innerwear & Sleepwear",

          items: [
            "Briefs & Trunks",
            "Boxers",
            "Vests",
            "Sleepwear & Loungewear",
            "Thermals"
          ]
        }

      ]
    },


    {
      bgColor: "bg-white",

      sections: [

        {
          title: "Footwear",

          items: [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sneakers",
            "Sandals & Floaters",
            "Flip Flops",
            "Socks"
          ]
        },

        {
          title: "Personal Care & Grooming",

          items: [
            "Sunglasses & Frames",
            "Fragrances"
          ]
        }

      ]
    },


    {
      bgColor: "bg-gray-50",

      sections: [

        {
          title: "Sports & Active Wear",

          items: [
            "Sports Shoes",
            "Sports Sandals",
            "Active T-Shirts",
            "Track Pants & Shorts",
            "Tracksuits",
            "Jackets & Sweatshirts",
            "Sports Accessories",
            "Swimwear"
          ]
        },

        {
          title: "Gadgets",

          items: [
            "Smart Wearables",
            "Fitness Gadgets",
            "Headphones",
            "Speakers"
          ]
        }

      ]
    },


    {
      bgColor: "bg-white",

      sections: [

        {
          title: "Fashion Accessories",

          items: [
            "Wallets",
            "Belts",
            "Perfumes",
            "Trimmers",
            "Caps & Hats",
            "Helmets",
            "Phone Cases",
            "Rings & Wristwear"
          ]
        },

        {
          title: "Bags & Backpacks",

          items: [
            "Luggage & Trolleys"
          ]
        }

      ]
    }

  ]


  return (

    <div
      className="
        absolute
        top-full
        left-0
        right-0

        z-50

        w-full

        bg-white

        border-t

        shadow-2xl
      "
    >

      <div
        className="
          max-w-[1200px]

          mx-auto

          grid
          grid-cols-5

          items-start
        "
      >

        {menuColumns.map((column, index) => (

          <div
            key={index}

            className={`
              ${column.bgColor}

              px-8
              py-6

              min-h-full
            `}
          >

            {column.sections.map((section, sectionIndex) => (

              <div
                key={sectionIndex}

                className="
                  mb-4
                "
              >

                {/* SECTION TITLE */}

                <h2
                  className="
                    text-pink-500

                    font-bold

                    text-sm

                    mb-3
                  "
                >
                  {section.title}
                </h2>


                {/* ITEMS */}

                <ul
                  className="
                    space-y-[2px]
                  "
                >

                  {section.items.map((item, itemIndex) => (

                    <li
                      key={itemIndex}

                      className="
                        text-sm

                        text-gray-700

                        hover:font-semibold

                        cursor-pointer

                        transition

                        whitespace-nowrap
                      "
                    >
                      {item}
                    </li>

                  ))}

                </ul>


                {/* BORDER */}

                {
                  sectionIndex !== column.sections.length - 1 && (

                    <div
                      className="
                        border-b

                        mt-3
                      "
                    ></div>

                  )
                }

              </div>

            ))}

          </div>

        ))}

      </div>

    </div>

  )

}

export default MenMegaMenu