<template>
  <div>
    <h1>Country: {{ country }}</h1>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="race" class="content">
      <h2>{{ race.title }}</h2>
      <p>{{ race.times.qualification }}</p>
      <p>{{ race.times.race }}</p>
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