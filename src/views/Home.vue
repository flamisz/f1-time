<template>
  <div class="p-4 m-4">
    <h1 class="text-2xl">Formula 1 Races By Timezone</h1>
    <div class="bg-white rounded shadow p-4 mt-4">
      <p>Check the times of the races by your local time, track time or any choosen timezone.</p>
      <p class="mt-2">Default is your localtime but if you choose a timezone, that will be the default until you reset it.</p>
      <p class="mt-2">More races and new features are coming (next race, results...).</p>
    </div>

    <div class="bg-white rounded shadow p-4 mt-4" v-if="nextRace">
      Next Race: <router-link :to="`/race/${nextRace}`" class="capitalize border-green-700 border-b-2 leading-none ml-1 hover:text-green-700">{{ nextRace }}</router-link>
    </div>
  </div>
</template>

<script>
import { nextRace } from '@/races'


export default {
  name: 'Home',

  data () {
    return {
      nextRace: '',
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      this.nextRace = nextRace()
    },
  }
}
</script>
