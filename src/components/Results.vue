<template>
    <div class="mt-4">
        <div v-if="loading" class="">
            Loading...
        </div>

        <div v-if="error" class="">
            {{ error }}
        </div>

        <div v-if="results" class="" >
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
