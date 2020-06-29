<template>
    <div class="Results">
        <Navigation></Navigation>
        
        <v-card dark class="ma-auto pa-2 text-center">
            <!-- <p>Searched Book : {{sele}}</p> -->
            <p>Our book recommendations for "{{ this.selectedBook }}" book</p>
            <!-- <p>Feature(s) responsible for recommendations :
            <v-chip light v-for="(item, index) in finFeat" :key="index" class="mx-2 orange">{{ item }}</v-chip></p> -->
            <FloatingButton />
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
                            <a @click="recordClick(index, book)"><v-icon large class="green--text pd-3 pr-5" >thumb_up</v-icon></a><br>
                            <a><v-icon large class="red--text">thumb_down</v-icon></a><br>
                        </v-flex>
                        <v-flex xs10 sm9 md8 class="pa-2 pl-6">
                            <span hidden>{{ index }}</span>
                            <h3 class="px-2" >{{ book.title }}</h3>
                            
                            <h5 class="px-2 grey--text font-italic">by {{ book.author }}</h5>
                            <v-btn text small target="__    blank__" :href="`${ book.readLink }`" class="blue--text">
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
// import {simficref} from '@/firebase';
import db from '@/components/firebase'
    
    export default {
        name : "Results",
        computed: {

        },
        components: {
            Navigation,
            FloatingButton
        },
        data() {
            return {
                test: [],
                panel: [0, 1],
                disabled: false,
                readonly: false,
                headers: [
                    { text: 'Book Name', value: 'title' }
                ],
                finRes: [],
                finFeat: [],
                sele : '',
                selectedBook : ''
            }
        },
        methods: {

            recordClick(index, book){
                let rank = index+1
                let name = book.title
                this.$store.commit('searchResultAdd', {rank: rank, name: name})
            }, 
            fetchResults(){
                let results = this.$store.state.SelectedBook
                let intRFesults = this.$store.getters.getTodoById(results)
                this.selectedBook = this.$store.getters.getTodoByIdBook(results).title
                let finRes = new Array()
                intRFesults['books'].forEach(element => {
                    finRes.push(this.$store.getters.getTodoByIdBook(element))
                });
                this.finRes = finRes

                intRFesults['features'].forEach(element => {
                    let current = element;
                    current = current.replace("F", "");
                    current = current.replace("GF", "");
                    current = current.replace("G", "");
                    let val = parseInt(current);

                    if(val==1) {
                        element = "Female oriented";
                    }
                    else if(val==2) {
                        element = "Male oriented";
                    }
                    else if(val>0 && val<=5 || val>=9 && val<=14) {
                        element = "Writing Style";
                    }
                    else if(val>=6 && val<=8) {
                        element = "Sentence Complexity";
                    }
                    else if(val==15) {
                        element = "Rural or Urban Setting";
                    }
                    else if(val>=16 && val<=18) {
                        element = "Rural or Urban Setting";
                    }
                    else if(val==19) {
                        element = "Ease of readability";
                    }
                    else if(val==20) {
                        element = "Plot complexity";
                    }
                    else if(val==21) {
                        element = "Lexical richness";
                    }
                    else if(val>=22 && val<=41) {
                        element = "Lexical richness";
                    }
                    else if(val>=22 && val<=41) {
                        element = "Lexical richness";
                    }
                    else if(val==42) {
                        element = "Dialog interaction";
                    }
                    else if(val==43) {
                        element = "Main character";
                    }
                    else if(val>=44 && val<=46) {
                        element = "Emotions";
                    }

                    this.finFeat.push(element)
                });			

                this.finFeat = new Set(this.finFeat)
                
            }
        },
        created() {
            this.fetchResults()
            this.sele = this.$store.state.SelectedBook
        },
    }
</script>


<style scoped>
.Results{
    background-image: url("../assets/images/bg2_air.jpg");
    background-size: cover;
    height: 100%;
}

</style>