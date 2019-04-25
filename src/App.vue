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
          <router-link to="/race/france" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M3 5L10.5 8L11 8.5L12 8L13.5 9L18 11L19 12L18.5 14L18 15L17 14L18 13V12H15.5L14.5 11L14 11.5L13.5 12.5L7 7.5H5.5L2.5 6L1 5L1.5 4.5L2 4H2.5V4.5L3 5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>France</span>
              <span class="text-xxs">21 - 23 Jun</span>
            </div>
          </router-link>
          <router-link to="/race/austria" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 4L1 4.5L4 8L6.5 13L8.5 15.5L16.5 13.5L19 12.5L17.5 9.5H10.5L9 11L8 11.5L7 11L6 8.5V7.5L7.5 7L10 7.5L12 7L12.5 5.5L4 4Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Austria</span>
              <span class="text-xxs">28 - 30 Jun</span>
            </div>
          </router-link>
          <router-link to="/race/great-britain" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2 4L1 9L3.5 11.5L4.5 10.5L3.5 10L3 9.25L8.5 5.1875H9L10.5 6.5H8.8125L10 8.5L9 11L9.5 12L13.5 16L14.5 15.5V14.5L17 13H18L19 12L12.5 5.5L11.5 4H10.5L8.8125 3L7.5 4L4 3L3 3.5L2 4Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Great Britain</span>
              <span class="text-xxs">12 - 15 Jul</span>
            </div>
          </router-link>
          <router-link to="/race/germany" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2.5 7L1 9L3.5 15L5.5 14L4 12.5L3.5 11L4.5 10.5L7.5 13L11.5 10.5V8.5L14.5 9L18.5 5.5L14 7.5H11L8.5 7L6 5.5L5.5 4H5L2.5 7Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Germany</span>
              <span class="text-xxs">26 - 28 Jul</span>
            </div>
          </router-link>
          <router-link to="/race/hungary" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.5 15.5H15V14H12.5V13H15.5L16 8.5L13.5 7.5L12 5.5L11 6L9.5 5V4.5L7 4L6 4.5V5.5L7.5 6.5V7.5L8.5 12.5L10.5 13.5L10 14H8L5 15L5.5 15.5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Hungary</span>
              <span class="text-xxs">02 - 04 Aug</span>
            </div>
          </router-link>
          <router-link to="/race/belgium" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 9.5L15 5H17L18.5 6.77596V7.5L17 6.77596L12.5 8.5L13 10L17 11.5L16.5 13L18.5 14.5L17 15.5L15 15L13 12L11 11L9.5 12L6 12.5L5.5 12L2.5 14L1 14.5L1.5 13.5L4 10.5L5 9.5H6Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Belgium</span>
              <span class="text-xxs">30 Aug - 01 Sep</span>
            </div>
          </router-link>
          <router-link to="/race/italy" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M3.5 5L1 5.5L4 13.5L8 14L18.5 13.5L19 12L9.5 11L3.5 5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Italy</span>
              <span class="text-xxs">06 - 08 Sep</span>
            </div>
          </router-link>
          <router-link to="/race/singapore" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M18 12L17 13H14V11.5H12.5L12 13L9.5 12L8.5 11L5.5 9.5L3.5 15L2.5 13.5L2 12.5L1 12L4 7L5.5 8.5L7 6.5L10.5 9L16.5 9.5L15 6.5L16 5L16.5 5.5L17.5 6L18 12Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Singapore</span>
              <span class="text-xxs">20 - 22 Sep</span>
            </div>
          </router-link>
          <router-link to="/race/russia" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16.5 10.5L19 6L17.5 5L16 7.5L16.5 8.5L15 9.5L14 9L12.5 9.5L7 7.5L4 8.5L4.5 10.5L4 11.5L1 12V14L2 15.5L6 14L5 12L5.5 10.5L6.5 10L8.5 10.5L9.5 12.5L16.5 10.5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Russia</span>
              <span class="text-xxs">27 - 29 Sep</span>
            </div>
          </router-link>
          <router-link to="/race/japan" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 15H2L1 13.5L2 13L3.5 13.5L5 12.5L6 13L7.5 12.5L9 13.5L10 12.5V9L11 8.5L14 10V10.5L14.5 7L18.5 5L19.5 5.5L19 7.5H13.5L11 10V13L10 15Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Japan</span>
              <span class="text-xxs">11 - 13 Oct</span>
            </div>
          </router-link>
          <router-link to="/race/mexico" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 4L1 10V12.5L3 11.5L3.5 13L8 11H10.5L11.5 11.5L13.5 11L14.5 12H15.5L17.5 15.7037L18.5 14L17.5 13.5V5.5L16.5 5L16 4Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Mexico</span>
              <span class="text-xxs">25 - 27 Oct</span>
            </div>
          </router-link>
          <router-link to="/race/united-states" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M18 4L7.5 8L8.5 9.5L8 10L7 8.5L6 9L7.5 11V11.5L5.5 12L3.5 10.5L1 12L8.5 16.5L7.5 13.5L9.5 11.5V10.5H10.5L11 8.5H13L14 7.5L15.5 8.5L17 7.5L18 4Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>United States</span>
              <span class="text-xxs">01 - 03 Nov</span>
            </div>
          </router-link>
          <router-link to="/race/brazil" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 15.5H15V12L8.5 9L9 7L12 6L11.5 8L12.5 8.5L14 6.5L16 6L14.5 8.5L15 10L19 11L19.5 9.5L18 6L16 5L10 5.5L1 10.5L3 11.5V14.5L4 15.5Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Brazil</span>
              <span class="text-xxs">15 - 17 Nov</span>
            </div>
          </router-link>
          <router-link to="/race/abu-dhabi" class="pb-2 hover:text-green-700 flex items-center mr-2 sm:m-0">
            <svg class="stroke-current fill-none text-gray-400 w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M18.5 4H5L4.5 5L2 9L1 12.5V14.5L2 15L3.5 14.5L2.5 11.5L3 10L4 9.5L4.5 10.5L6 9.5L4.5 6.5L6.5 5L9.5 10.5L12 9.5V7.5L12.5 6.5H14L18.5 4Z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span>Abu Dhabi</span>
              <span class="text-xxs">29 Nov - 01 Dec</span>
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
