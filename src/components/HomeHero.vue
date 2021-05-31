<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-50" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative shadow-2xl rounded-2xl overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="h-full w-full filter saturate-0 object-cover"
            src="https://images.unsplash.com/photo-1573062337052-54ad1468bb5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            alt="People working on laptops"
          />
          <div
            class="
              absolute
              inset-0
              bg-gradient-to-r
              from-fuchsia-900
              to-purple-800
              mix-blend-multiply
            "
          />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="
              text-center text-4xl
              font-extrabold
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            <span class="text-white">Bullsh*t free </span>
            <span
              class="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-rose-400
                to-rose-500
              "
              >wine education</span
            >
            <span class="block text-white"> for the everyday wine lover.</span>
          </h1>
          <p
            class="
              mt-6
              max-w-lg
              mx-auto
              text-center text-xl text-purple-200
              sm:max-w-3xl
            "
          >
            Sit back, grab a glass, and prepare to embark on a journey into the
            wonderful world of squished grape juice.
          </p>
          <div
            class="
              mt-10
              max-w-sm
              mx-auto
              sm:max-w-none
              sm:flex
              sm:justify-center
            "
          >
            <div
              class="
                space-y-4
                sm:space-y-0
                sm:mx-auto
                sm:inline-grid
                sm:grid-cols-2
                sm:gap-5
              "
            >
              <router-link
                to="/register/wine-tasting-crash-course"
                class="
                  flex
                  items-center
                  justify-center
                  px-4
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  shadow-sm
                  text-purple-700
                  bg-white
                  hover:bg-purple-50
                  sm:px-8
                "
              >
                Start Learning Now
              </router-link>
              <a
                href="#"
                class="
                  flex
                  items-center
                  justify-center
                  px-4
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  shadow-sm
                  text-white
                  bg-purple-500 bg-opacity-60
                  hover:bg-opacity-70
                  sm:px-8
                "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
