<template>
  <div class="container mx-auto">
    <div class="sm:flex">
      <div class="w-full sm:w-1/4 xl:w-1/5">
        <div class="flex sm:flex-col flex-wrap px-4 pt-4 text-gray-500">
          <router-link to="/" class="pb-2 hover:text-green-700 flex items-center sm:mb-2 mr-2 sm:m-0">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
            </svg>
            Home
          </router-link>
          <router-link to="/race/australia" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-8 h-8 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2 9C2 8.66667 2.3 7.5 3.5 5.5L6 5L8 7L7.5 7.5L8.5 9.5L9.5 11H12L12.5 10.5H16L18 12.5L16.5 14.5L15 13.5L14 15L7.5 14V13L2.5 11.5V10.5L2 9Z" />
            </svg>
            Australia
          </router-link>
          <router-link to="/race/bahrain" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-8 h-8 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M3.5 12L4.5 5L7.5 7.5L8 8V9.5L10.5 11L10 11.5L6 11L5.5 12L14 12.5L14.5 11.5L14 10.5L12 9.5L11.5 8.5L12.5 6H13L18 14L17 14.5H3L4 13.5L3.5 12Z"/>
            </svg>
            Bahrain
          </router-link>
          <router-link to="/race/china" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12 4H8v12h4V4zm2 0v12h4V4h-4zM6 4H2v12h4V4zM0 2h20v16H0V2z"/>
            </svg>
            China
          </router-link>
          <router-link to="/race/azerbaijan" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z"/>
            </svg>
            Azerbaijan
          </router-link>
          <router-link to="/race/spain" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/>
            </svg>
            Spain
          </router-link>
          <router-link to="/race/monaco" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M15 3H7a7 7 0 1 0 0 14h8v-2H7A5 5 0 0 1 7 5h8a3 3 0 0 1 0 6H7a1 1 0 0 1 0-2h8V7H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10z"/>
            </svg>
            Monaco
          </router-link>
          <router-link to="/race/canada" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z"/>
            </svg>
            Canada
          </router-link>

          <router-link to="/about" class="pb-2 hover:text-green-700 flex items-center sm:mt-2">
            <svg class="fill-current text-gray-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
            </svg>
            About
          </router-link>
        </div>
      </div>
      <div class="min-h-screen w-full sm:w-3/4 xl:w-4/5">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700');
@tailwind base;
html {
  font-size: 14px;

  @media (min-width: 420px) {
    font-size: 16px;
  }

  font-family: 'Roboto Slab', 'sans-serif';
}

.active-link svg {
  stroke: #2f855a !important;
}

.active-link svg.fill-current {
  fill: #2f855a !important;
  stroke: none !important;
}

.fill-none {
  fill: none;
}
@tailwind components;
@tailwind utilities;
</style>
