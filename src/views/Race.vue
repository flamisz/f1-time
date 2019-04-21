<template>
  <div class="p-4 m-4">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="race">
      <div class="mb-4 flex justify-between content-center">
        <div class="flex flex-col">
          <h2 class="text-lg">{{ race.title }}</h2>
          <div>
            <span>Race time</span>
            <button
              class="rounded-full bg-green-700 text-green-100 px-2 py-1 text-sm ml-1"
              @click.prevent="tz = race.tz"
            >{{ race.tz }}</button>
          </div>
        </div>
        <div>
          <span>Your time</span>
          <button
            class="rounded-full bg-green-700 text-green-100 px-2 py-1 text-sm ml-1"
            @click.prevent="tz = localTz"
          >{{ localTz }}</button>
        </div>
      </div>

      <div class="bg-green-700 rounded shadow">
        <div class="flex">
          <div class="w-1/2 p-4 border-gray-100 border-r flex flex-col">
            <span class="text-green-300 uppercase">Race</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ raceTime.date }}</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ raceTime.time }}</span>
            <span class="text-green-300 text-sm mt-4">{{ tz }}</span>
          </div>
          <div class="w-1/2 p-4 border-gray-100 border-r flex flex-col">
            <span class="text-green-300 uppercase">Qualifying</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ qualificationTime.date }}</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ qualificationTime.time }}</span>
            <span class="text-green-300 text-sm mt-4">{{ tz }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRace } from '@/races'
import moment from 'moment-timezone'

export default {
  name: 'Race',
  props: ['country'],

  data () {
    return {
      loading: false,
      race: null,
      error: null,
      localTz: moment.tz.guess(),
      tz: moment.tz.guess(),
      timezones: moment.tz.names()
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
      let date = moment(this.race.times.qualification)
      return {
        date: date.tz(this.tz).format('ddd DD MMM'),
        time: date.tz(this.tz).format('h:mm A')
      }
    },

    raceTime: function () {
      let date = moment(this.race.times.race)
      return {
        date: date.tz(this.tz).format('ddd DD MMM'),
        time: date.tz(this.tz).format('h:mm A')
      }
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
