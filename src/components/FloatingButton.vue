<template>
    <!-- <div>
        <v-btn class="test ma-10" to="/home" color="transparent white--text"><v-icon left x-large class="orange--text">add_circle</v-icon><span color="transparent" class="transparent hidden-sm-and-down">New Search</span></v-btn>
    </div> -->
    <v-btn
              absolute
              small
              dark
              fab
              top
              right
              open-on-hover
              color="orange"  
            >
              <v-icon @click="hitTheSpot()">search</v-icon>
            </v-btn>
    
</template>

<script>
// import Results from '@/views/Results.vue';
import db from '@/components/firebase'
    export default {
        data() {
            return {

            }
        },
        methods: {
            hitTheSpot(){
                console.log('clicked')
                let searchId = sessionStorage.getItem('searchId')
                let SessionId = sessionStorage.getItem('SessionId')
                console.log(searchId, SessionId, this.$store.state.resultsStore)
                
                // ADDING TO DATABASE
                db.collection('simfic-db').add({
                    SessionId: SessionId,
                    searchId: searchId,
                    searchBook: this.$store.state.SelectedBook,
                    userBehvr: this.$store.state.resultsStore
                }).then(docRef => {
                    this.$router.push('/home')
                    console.log(docRef)
                })
                .catch(error => console.log('Database error : ' + error))

                this.$store.commit('EmptySearchResultAdd')
            }
        },
    }
</script>

<style scoped>
.test{
    bottom: 0;
    right: 0;
    position: fixed;
}
</style>