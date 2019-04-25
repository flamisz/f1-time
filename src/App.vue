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
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2 9C2 8.66667 2.3 7.5 3.5 5.5L6 5L8 7L7.5 7.5L8.5 9.5L9.5 11H12L12.5 10.5H16L18 12.5L16.5 14.5L15 13.5L14 15L7.5 14V13L2.5 11.5V10.5L2 9Z" />
            </svg>
            <div class="flex flex-col leading-none">
              <span>Australia</span>
              <span class="text-xxs">14 - 17 Mar</span>
            </div>
          </router-link>
          <router-link to="/race/bahrain" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M3.5 12L4.5 5L7.5 7.5L8 8V9.5L10.5 11L10 11.5L6 11L5.5 12L14 12.5L14.5 11.5L14 10.5L12 9.5L11.5 8.5L12.5 6H13L18 14L17 14.5H3L4 13.5L3.5 12Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Bahrain</span>
              <span class="text-xxs">29 - 31 Mar</span>
            </div>
          </router-link>
          <router-link to="/race/china" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.5 4.5L6 14L1.5 14.5L1 15.5H17.5L18.5 15L19 14L18 12.5L17 13V14H11L10.5 12L11.6875 12.5L13 12V11L12 9L12.5 7.5H17.5L18 6.5L14.5 5.5L11 6.25L10 5.5V5H10.5L11.5 5.5L11.6875 5V4.5L11 4H10L9.5 4.5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>China</span>
              <span class="text-xxs">12 - 14 Apr</span>
            </div>
          </router-link>
          <router-link to="/race/azerbaijan" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 9.5L6.5 11.5L4 15L1 13.5V12L2 10.5L4.5 9L6 9.5L6.5 10.5L9 9L13.5 7L13 5.5L18 4L19 6.5L10 9.5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Azerbaijan</span>
              <span class="text-xxs">26 - 28 Apr</span>
            </div>
          </router-link>
          <router-link to="/race/spain" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 12H18L19 11L18.5 10V8L16 7L15.5 7.5V8.5L16.5 9L17 10.5L10.5 7H10L8 10V11H5.5L3 9.5L3.5 9L6 8.5L7 8V7H3L1.5 7.5L1 9L1.5 10L3 10.5L3.5 11.5L4 12Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Spain</span>
              <span class="text-xxs">10 - 12 May</span>
            </div>
          </router-link>
          <router-link to="/race/monaco" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M1 12V14V15.5L2.5 16V15.5L2 14V12.5H3L3.5 10L3 9.5L4 8.5L5 7.5L9 9.5L9.5 9L10.5 9.5L13.5 10L15 9.5L16.5 9L19 6L18.5 5.5L18 5L17.5 6L17 5V4L13.5 6V6.5L14 7.5L13.5 8.5H11.5L9 8L4.5 6.5L4 7L2 9.5L1 12Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Monaco</span>
              <span class="text-xxs">23 -26 May</span>
            </div>
          </router-link>
          <router-link to="/race/canada" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M3.5 7.5L7.5 9.5L8 10.5L9 11L14.5 13.5L17 14.5H18.5L15 11.5L14.5 10L13.5 8.5L10 6L9 6.5L7.5 5.5H5L4 5L1 6L1.5 7L2 6.5L3.5 7.5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Canada</span>
              <span class="text-xxs">07 - 09 Jun</span>
            </div>
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

.text-xxs {
  font-size: 0.65rem;
}
@-webkit-keyframes spin {
 0% {
  -webkit-transform:rotate(0deg);
  transform:rotate(0deg)
 }
 to {
  -webkit-transform:rotate(1turn);
  transform:rotate(1turn)
 }
}
@keyframes spin {
 0% {
  -webkit-transform:rotate(0deg);
  transform:rotate(0deg)
 }
 to {
  -webkit-transform:rotate(1turn);
  transform:rotate(1turn)
 }
}
.spin {
 -webkit-animation:spin 2s linear infinite;
 animation:spin 2s linear infinite
}
@tailwind components;
@tailwind utilities;
</style>
