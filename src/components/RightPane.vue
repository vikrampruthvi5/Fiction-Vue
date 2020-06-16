<template>
    <div dark class="pa-3 justify-center align-center ma-auto">
        <v-card class="justify-center align-center ma-auto pane" dark flat color="transparent">
            <v-form class="px-5 panell">
                <h1 class="orange--text">Welcome to SIMFIC 2.0</h1>
                <v-combobox
                    v-model="selectgenre"
                    :items="genre"
                    id="genrecb"
                    label="Select by Genre"
                    class="orange--text"
                    eager
                    clearable
                    @change="GenreChange"
                    hide-selected
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
                <v-radio-group v-model="radios" row>
                    <v-radio label="English" value="english" class="orange--text" @change="langChange('english')"></v-radio>
                    <v-radio label="German" value="german" class="orange--text" @change="langChange('germany')"></v-radio>
                </v-radio-group>
            </v-form>
        </v-card>
    </div>
</template>

<script>
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
                radios: 'english',
                books: null
            }
        },
        methods: {
            updateDropDowns(){
                this.keys = []
                this.genre = []
                this.keys = []
                this.author = []
                this.title = []
                for (let [key, value] of Object.entries(this.books)) {
                    this.keys.push(key)
                    this.genre.push(value.genre)
                    this.author.push(value.author)
                    this.title.push(value.title)
                }
            },
            langChange(radioLanguage){
                if(radioLanguage==='english'){
                    console.log('english')
                }
                else{
                    console.log('germany')
                }
            },
            GenreChange(){
                console.log(this.selectgenre)
                this.keys = []
                this.keys = []
                this.author = []
                this.title = []
                try{
                    this.selectgenre.length
                    for (let [key, value] of Object.entries(this.books)) {
                        this.keys.push(key)
                        this.author.push(value.author)
                        this.title.push(value.title)
                    }
                }
                catch{
                    this.updateDropDowns()
                }
            },
        },
        created() {
            this.books = this.$store.state.allbooks
            this.updateDropDowns();
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

@media only screen and (max-width: 300px) {
    .panell {
        margin: 0 !important;  
    }
  }

</style>