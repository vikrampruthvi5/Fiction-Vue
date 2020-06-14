<template>
  <div class="home">
    <Navigation class="nav nav-extended"></Navigation>
    <v-container fluid>
    <v-layout fill-height row class="">
      <v-flex xs12 md6 order-xs1>
        <v-card light tile flat color="transparent">
          <h3 class="orange--text pl-3 pt-5">Most searched books</h3>
            <LeftPane />
        </v-card>
      </v-flex>
      <v-flex xs12 md6 >
        <v-card light tile flat color="transparent">
            <RightPane />
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
// Dependencies import
import axios from "axios";
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import LeftPane from '@/components/LeftPane.vue';
import RightPane from '@/components/RightPane.vue';

export default {
  name: "Home",
  components: {
    LeftPane,
    RightPane,
    Navigation
  },
  data() {
    return {
        response: null
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response=>
        (this.response = response.data))
  },
  beforeUpdate() {
    console.log(this.response)
  },
};
</script>

<style scoped>
  .home{
    background-color: rgb(248, 237, 223);
    background-image: url("../assets/images/bg2.jpg");
    background-size: cover;
    height: 100%;
  }


</style>

