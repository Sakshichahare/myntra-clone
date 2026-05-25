


function CategorySection({categories}) {

  
  return (

    <div className="px-4 md:px-8 lg:px-10 py-6 md:py-10">


      <div className="bg-yellow-100 py-5 md:py-8 mb-6 md:mb-10 rounded-xl">

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-600 text-center">
          SHOP BY CATEGORY
        </h1>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">

        {categories.map((item) => (

          <div
            key={item.id}
            className="
              cursor-pointer
              hover:scale-105
              transition
              duration-300
            "
          >

            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-40
                md:h-56
                lg:h-72
                object-cover
                rounded-t-xl
              "
            />

            <div className="bg-yellow-400 text-center py-3 md:py-4 rounded-b-xl">

              <h2 className="text-sm md:text-lg font-semibold">
                {item.title}
              </h2>

              <p className="text-lg md:text-2xl lg:text-3xl font-bold">
                {item.discount}
              </p>

              <p className="text-sm md:text-lg font-semibold">
                Shop Now
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}

export default CategorySection