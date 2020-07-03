<template>
    <div dark class="pa-3 justify-center align-center ma-auto">
        <v-layout row wrap class="justify-center align-center text-center">
            <v-flex v-for="book in books" :key="book.bid" xs4 xl3 lg3 md4 class="justify-center align-center text-center pa-2" color="transparent">
                <v-card @click="fetchResults(book.title)" min-height="250" max-height="250" flat color="transparent" @mouseenter="imgHover(book.id)" @mouseleave="imgHoverx(book.id)">
                    
                    <div class="container">
                        <!-- <img :src="`${book.image}`" @hover="imgHover(book.image, book.title, book.author)" alt="" height="250" class="pt-4 test"><br> -->
                        <img :src="`${book.image}`"  alt="Snow" :class="`test i${book.id}`" :id="`i${book.id}`" height="250">
                        <div class="top-left" min-height="250" max-height="250" style="display: none " :id="`x${book.id}`" >
                            <img :src="`${book.image}`" alt="Snow" height="150">
                            <h3>{{book.title}}</h3>
                            <h5 class="font-italic">by {{book.author}}</h5>
                        </div>
                </div>
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
            imgHover(bookid){
                let x = document.getElementById('i'+bookid)
                let y = document.getElementById('x'+bookid)
                x.style.display = 'none'
                y.style.display = 'block'
            },
            imgHoverx(bookid){
                let x = document.getElementById('i'+bookid)
                let y = document.getElementById('x'+bookid)
                x.style.display = 'block'
                y.style.display = 'none'
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
/* Container holding the image and the text */
.container {
  position: relative;
  text-align: center;
  color: white;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  text-align: left;
  top: 10px;
  left: 18px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>