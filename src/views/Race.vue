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
          <h2 class="text-2xl">{{ race.title }}</h2>
          <div>
            <button
              class="text-xs border-green-700 border-b-2 leading-none hover:text-green-700"
              @click.prevent="tz = race.tz"
            >{{ race.tz }}</button>
          </div>
        </div>
        <div>
          <button
            class="text-xs border-green-700 border-b-2 leading-none hover:text-green-700"
            @click.prevent="tz = localTz"
          >{{ localTz }}</button>
        </div>
      </div>

      <div class="bg-green-700 rounded shadow">
        <div class="flex">
          <div class="w-1/2 p-4 border-green-600 border-r flex flex-col">
            <span class="text-green-300 uppercase">Race</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ raceTime.date }}</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ raceTime.time }}</span>
            <span class="text-green-300 text-sm mt-4">{{ tz }}</span>
          </div>
          <div class="w-1/2 p-4 flex flex-col">
            <span class="text-green-300 uppercase">Qualifying</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ qualificationTime.date }}</span>
            <span class="text-green-100 md:text-4xl text-2xl">{{ qualificationTime.time }}</span>
            <span class="text-green-300 text-sm mt-4">{{ tz }}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 text-xs">
        <select v-model="selected">
          <option disabled value="">Save timezone</option>
          <option v-for="(option, index) in timezones" v-bind:value="option" v-bind:key="index">
            {{ option }}
          </option>
        </select>
        <button
              class="text-xs border-green-700 border-b-2 leading-none ml-1 hover:text-green-700"
              @click.prevent="clear"
              v-if="selected"
            >Reset</button>
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
      selected: '',
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
    if (localStorage.tz) {
      this.tz = localStorage.tz
      this.selected = localStorage.tz
    }
  },

  watch: {
    '$route' () {
      this.fetchData()
      if (localStorage.tz) {
        this.tz = localStorage.tz
        this.selected = localStorage.tz
      } else {
        this.tz = moment.tz.guess()
      }
    },
    selected: function (val) {
      if (val) {
        this.tz = val
        localStorage.tz = val
      }
    }
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
    },

    clear () {
      this.tz = this.localTz
      this.selected = ''
      localStorage.removeItem('tz')
    }
  }
}
</script>
