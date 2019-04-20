<template>
  <div class="bg-white shadow rounded p-4 m-4">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="race">
      <h2 class="text-center mb-4 text-lg">{{ race.title }}</h2>
      <div class="">
        <p>{{ qualificationTime }}</p>
        <p>{{ raceTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getRace } from '@/races'

export default {
  name: 'Race',
  props: ['country'],

  data () {
    return {
      loading: false,
      race: null,
      error: null
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  computed: {
    qualificationTime: function () {
      let date = new Date(this.race.times.qualification)
      return date
    },

    raceTime: function () {
      let date = new Date(this.race.times.race)
      return date
    },
  },

  methods: {
    fetchData () {
      this.error = this.race = null
      this.loading = true

      getRace(this.country, (err, race) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.race = race
        }
      })
    }
  }
}
</script>
