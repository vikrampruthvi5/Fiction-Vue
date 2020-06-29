<template>
  <div class="home">
    <Navigation class="nav nav-extended"></Navigation>
    <!-- <v-btn
            class="mt-5"
              absolute
              small
              dark
              top
              right
              color="orange"
            >
              Take tour
            </v-btn> -->
    <tour></tour>
    <v-container fluid>
    <v-layout fill-height row>
      <v-flex xs12 md6 order-xs1 class="hidden-sm-and-down">
        <v-card light tile flat color="transparent">
          <h3 class="orange--text pl-3 pt-5">Most searched books</h3>
            <LeftPane />
        </v-card>
      </v-flex>
      <v-flex xs12 md6 >
        <v-card light tile flat color="transparent">
            <RightPane></RightPane>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
// Dependencies import
// import axios from "axios";
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import LeftPane from '@/components/LeftPane.vue';
import RightPane from '@/components/RightPane.vue';
import tour from '@/components/tour.vue';

export default {
  name: "Home",
  components: {
    LeftPane,
    RightPane,
    Navigation,
    tour,
  },
  data() {
    return {
        response: null,
    }
  },
  created() {
  },
};
</script>

<style scoped>
  .home{
    background-color: rgb(248, 237, 223);
    /* background-image: url("../assets/images/bg2_aqua.jpg"); */
    background-image: url("../assets/images/bg2_air.jpg");
    background-size: cover;
    height: 100%;
  }
</style>

