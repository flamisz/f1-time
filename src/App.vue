<template>
  <div class="container mx-auto flex max-w-5xl mt-4">
    <div class="w-1/4 flex flex-col">
      <router-link to="/" class="px-2">Home</router-link>
      <router-link to="/about" class="px-2">About</router-link>
      <router-link to="/race/australia" class="px-2">Australia</router-link>
      <router-link to="/race/bahrain" class="px-2">Bahrain</router-link>
      <router-link to="/race/china" class="px-2">China</router-link>
      <router-link to="/race/azerbaijan" class="px-2">Azerbaijan</router-link>
      <router-link to="/race/spain" class="px-2">Spain</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
