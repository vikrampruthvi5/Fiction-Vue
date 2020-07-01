<template>
    <v-toolbar dark dense>
      <v-toolbar-title class="orange--text font-weight-bold" to="/home">SIMFIC 2.0</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small light color="orange" class="ml-1" to='/home'><v-icon small left>house</v-icon><span class="py-auto"><b>Home</b></span></v-btn>
      <tour></tour>
      <v-btn small light color="orange" class="ml-1" target='__blank__' href='https://simfic-feed.firabaseapp.com'><v-icon small left>feedback</v-icon><span class="py-auto"><b>Feedback</b></span></v-btn>

    </v-toolbar>
</template>


<script>
import navi from '@/assets/images/nav1.png';
import tour from '@/components/tour.vue';
    export default {
        name: "Navigation",
        computed: {
          
        },
        data() {
          return {
            navi: navi
          }
        },
        components: {
          tour
        }
    }
</script>

<style scoped>

</style>