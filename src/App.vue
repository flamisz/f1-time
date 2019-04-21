<template>
  <div class="container mx-auto">
    <div class="sm:flex">
      <div class="w-full sm:w-1/4 xl:w-1/5">
        <div class="flex sm:flex-col flex-wrap px-4 pt-4 text-gray-500">
          <router-link to="/" class="pb-2">Home</router-link>
          <router-link to="/about" class="pb-2">About</router-link>
          <router-link to="/race/australia" class="pb-2">Australia</router-link>
          <router-link to="/race/bahrain" class="pb-2">Bahrain</router-link>
          <router-link to="/race/china" class="pb-2">China</router-link>
          <router-link to="/race/azerbaijan" class="pb-2">Azerbaijan</router-link>
          <router-link to="/race/spain" class="pb-2">Spain</router-link>
          <router-link to="/race/monaco" class="pb-2">Monaco</router-link>
          <router-link to="/race/canada" class="pb-2">Canada</router-link>
        </div>
      </div>
      <div class="min-h-screen w-full sm:w-3/4 xl:w-4/5">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@tailwind base;
html {
  font-size: 14px;

  @media (min-width: 420px) {
    font-size: 16px;
  }
}
@tailwind components;
@tailwind utilities;
</style>
