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
                books: [
                    {name:"Sherlock holmes", 'bid':'102', author:"xyz baap", img:"http://books.google.com/books/content?id=U4eStWzD49UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",},
                    {name:"Moby dick", 'bid':'108', author:"Hermoine greinger", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                    {name:"Sherlock holmes", 'bid':'103', author:"xyz baap", img:"http://books.google.com/books/content?id=U4eStWzD49UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",},
                    {name:"Moby dick", 'bid':'158', author:"", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                    {name:"Sherlock holmes", 'bid':'104', author:"xyz baap", img:"http://books.google.com/books/content?id=U4eStWzD49UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",},
                    {name:"Moby dick", 'bid':'148', author:"", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                    {name:"Sherlock holmes", 'bid':'105', author:"xyz baap", img:"http://books.google.com/books/content?id=U4eStWzD49UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",},
                    {name:"Moby dick", 'bid':'106', author:"", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                    {name:"Moby dick", 'bid':'107', author:"", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                    {name:"Sherlock holmes", 'bid':'109', author:"xyz baap", img:"http://books.google.com/books/content?id=U4eStWzD49UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",},
                    {name:"Moby dick", 'bid':'118', author:"", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                    {name:"Moby dick", 'bid':'128', author:"", img:"http://books.google.com/books/content?id=cRRdCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"},
                ],
                show: false,
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