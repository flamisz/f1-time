<template>
    <div class="mt-4">
        <div v-if="loading" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-4 h-4 spin mr-2 fill-current">
                <path d="M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 10 8V0a9.97 9.97 0 0 1 10 10h-8zm7.9 1.41A10 10 0 1 1 8.59.1v2.03a8 8 0 1 0 9.29 9.29h2.02zm-4.07 0a6 6 0 1 1-7.25-7.25v2.1a3.99 3.99 0 0 0-1.4 6.57 4 4 0 0 0 6.56-1.42h2.1z"></path>
            </svg>

            <span>Scanning results...</span>
        </div>

        <div v-if="error" class="text-red-500">
            {{ error }}
        </div>

        <div v-if="!loading && !results">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-4 h-4 mr-2 fill-current"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"/></svg>

                <span>No results yet...</span>
            </div>
        </div>

        <transition name="fade">
            <div v-if="results" class="">
                <div class="bg-white rounded shadow p-4 text-gray-600">
                    <table class="w-full">
                        <tr v-for="(driver, index) in results">
                            <td class="font-mono text-xs border-b border-t border-gray-200 py-2">{{ driver.position }}</td>
                            <td class="border-b border-t border-gray-200 py-2">{{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}</td>
                            <td class="border-b border-t border-gray-200 py-2">{{ driver.Constructor.name }}</td>
                            <td class="font-mono text-xs border-b border-t border-gray-200 py-2">{{ driver.points }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { getResults } from '../api'

export default {
    name: 'Results',

    props: {
        circuit: String
    },

    data () {
        return {
            results: '',
            error: '',
            loading: false
        }
    },

    created () {
        this.fetchData()
    },

    watch: {
        '$route' () {
            this.fetchData()
        }
    },

    methods: {
        fetchData () {
            this.error = this.results = null
            this.loading = true

            getResults(this.circuit, (err, results) => {
                this.loading = false

                if (err) {
                    this.error = err.toString()
                } else {
                    this.results = results
                }
            })
        }
    },
}
</script>
<style>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>
