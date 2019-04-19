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
      <p>{{ race.time.qualification }}</p>
      <p>{{ race.time.race }}</p>
    </div>
  </div>
</template>

<script>
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
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log('fetch')
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      fetch(`/json/${this.country}.json`)
        .then(function(response) {
          if(response.ok) {
            return response.json();
          }
          throw new Error('json error');
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
        })
      // getPost(this.$route.params.id, (err, post) => {
      //   this.loading = false
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.post = post
      //   }
      // })
    }
  }
}
</script>
