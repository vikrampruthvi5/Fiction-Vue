<template>
    <div dark class="pa-3 justify-center align-center ma-auto">
        <v-card class="justify-center align-center ma-auto pane" dark flat color="transparent">
            <v-form class="px-5">
                <h1 class="orange--text">Welcome to SIMFIC 2.0</h1>
                <v-combobox
                    v-model="selectgenre"
                    :items="genre"
                    id="genrecb"
                    label="Select by Genre"
                    class="orange--text"
                    eager
                    clearable
                ></v-combobox>
                <v-combobox
                    v-model="selectauthor"
                    :items="author"
                    id="authorcb"
                    label="Select by Author"
                    clearable
                ></v-combobox>
                <v-combobox
                    v-model="selecttitle"
                    :items="title"
                    id="bookscb"
                    label="Select a Book"
                    clearable
                ></v-combobox>
                <v-radio-group v-model="row" row>
                    <v-radio label="English" value="English" class="orange--text"></v-radio>
                    <v-radio label="German" value="German" class="orange--text"></v-radio>
                </v-radio-group>
                <span><v-icon>gear</v-icon></span>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import path from "@/assets/Data/milestone3.json";
// import axios from 'axios'
    export default {
        data() {
            return {
                selectgenre: '',
                selectauthor: '',
                selecttitle: '',
                genre: [],
                author: [],
                title: [],
                keys: [],
                mj: path
            }
        },
        created() {
            console.log(this.mj)
            for (let [key, value] of Object.entries(this.mj)) {
                this.keys.push(key)
                this.genre.push(value.genre)
                this.author.push(value.author)
                this.title.push(value.title)
            }
        },
        computed: {
            
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
    
}

</style>