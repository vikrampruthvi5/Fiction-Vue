<template>
    <div class="Results">
        <Navigation></Navigation>
        <FloatingButton />
        <v-card dark class="ma-auto pa-2 text-center">
            <p>Top features responsible for below recommendations are</p>
            <v-chip light v-for="(item, index) in features" :key="index" class="mx-2 orange">{{ item }}</v-chip>
        </v-card>
        <v-container fluid grid-list-xs class="px-12">
        <v-layout row wrap>
            <v-flex flat xs12 md8 lg8 class="grey--text ma-auto pa-2">
                <v-card flat light v-for="(book, index) in finRes" :key="index">
                    <v-layout row wrap flat class="mb-1">
                        <v-flex xs6 sm1 md1 class="pa-2 justify-center align-center ma-auto ">
                            <img :src="`${ book.image }`" height="100" alt="" class="text-center ma-auto justify-center align-center">
                        </v-flex>
                        <v-flex xs6 sm1 md1 lg3 order-sm2 light class="pa-2 pl-2 ma-auto justify-center text-center">
                            <a><v-icon large class="green--text pd-3 pr-5">thumb_up</v-icon></a><br>
                            <a><v-icon large class="red--text">thumb_down</v-icon></a><br>
                        </v-flex>
                        <v-flex xs10 sm9 md8 class="pa-2 pl-6">
                            <span hidden>test</span>
                            <h3 class="px-2" >{{ book.title }}</h3>
                            <h5 class="px-2 grey--text font-italic">by {{ book.author }}</h5>
                            <v-btn text small target="__blank__" :href="`${ book.readLink }`" class="blue--text">
                                <v-icon text left small class="blue--text">menu_book</v-icon><span >Read now</span></v-btn>
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="px-2" ripple>Description</v-expansion-panel-header>
                                    <v-expansion-panel-content class="px-2">
                                        {{ book.desc }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-flex>
                        <v-divider></v-divider>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs12 md4 class="mx-auto pa-2">
                <v-data-table
                    :headers="headers"
                    :items="finRes"
                    :items-per-page="5"
                ></v-data-table>
            </v-flex>
        </v-layout>
        
       </v-container>
        
    </div>
</template>

<script>
/* eslint-disable */
import Navigation from "@/components/Navigation.vue";
import FloatingButton from '@/components/FloatingButton.vue';
    
    export default {
        name : "Results",
        components: {
            Navigation,
            FloatingButton
        },
        data() {
            return {
                panel: [0, 1],
                disabled: false,
                readonly: false,
                features: ['Writing style', 'Female oriented', 'Genre'],
                headers: [
                    { text: 'Book Name', value: 'title' }
                ],
                finRes: [],
                finFeat: []
            }
        },
        methods: {
            fetchResults(){
                let results = this.$store.state.SelectedBook
                let intRFesults = this.$store.getters.getTodoById(results)
                let finRes = new Array()
                intRFesults['books'].forEach(element => {
                    finRes.push(this.$store.getters.getTodoByIdBook(element))
                });
                this.finRes = finRes

                intRFesults['features'].forEach(element => {
                    console.log(element)
                });
                
            }
        },
        created() {
            this.fetchResults()
        },
    }
</script>


<style scoped>
.Results{
    background-image: url("../assets/images/bg2_compressed.jpg");
    background-size: cover;
    height: 100%;
}

</style>