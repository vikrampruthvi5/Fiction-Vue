<template>
    <div dark class="pa-3 justify-center align-center ma-auto">
        <v-layout row wrap class="justify-center align-center text-center">
            <v-flex v-for="book in books" :key="book.bid" xs4 xl3 lg3 md4 class="justify-center align-center text-center pa-2" color="transparent">
                <v-card @click="fetchResults(book.title)" min-height="250" max-height="250" flat color="transparent">
                    <img :src="`${book.image}`" @hover="imgHover(book.image, book.title, book.author)" alt="" height="250" class="pt-4 test"><br>
                </v-card>
        </v-flex>   
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "LeftPane",
        data() {
            return {
                show: false,
            }
        },
        computed: {
            books(){
                return this.$store.state.books;
            }
        },
        methods: {
            imgHover(){

            },
            fetchResults(title){
                if(this.selecttitle!=''){
                    for (let [key, value] of Object.entries(this.books)) {
                        if(value.title === title){
                            this.dumm1=key
                            this.$store.commit('selectedSearchBook', value.id)
                            sessionStorage.setItem('searchId', parseInt(sessionStorage.getItem('searchId'))+1)
                            this.$router.push('/results')
                        }
                    }
                }
                else{
                    this.errHidden=false
                }
            }
        },
    }
</script>

<style scoped>
.RightPane{
    padding: 3px;
}

.v-input__slot{
    width: 50%;
}

.pane{
    width: 70%;
    overflow-y: scroll;
}
.test{
    border-radius: 10px;
}
</style>