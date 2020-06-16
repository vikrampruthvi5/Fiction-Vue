<template>
    <div dark class="pa-3 justify-center align-center ma-auto">
        <v-layout row wrap class="justify-center align-center text-center">
            <v-flex v-for="book in books" :key="book.bid" xs4 xl3 lg3 md4 class="justify-center align-center text-center pa-2">
                <v-card  color="#FDF2E9">
                    <img :src="book.img" alt="" height="150" class="pt-2"><br>
                    <span>{{ book.name}}</span><br>
                    <!-- <span class="grey--text font-weight-light font-italic">by {{ book.author }}</span> -->
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
</style>