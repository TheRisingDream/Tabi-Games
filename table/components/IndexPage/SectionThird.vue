<script setup>
const {data: posts} = await useFetch(`/api/event/readEvent`)
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

async function JoinGame(id){
        if(id){
    authStore.setPostId(id);
    await navigateTo('/chat')
    console.log(id)
    };
    console.log("navigate to chat ok");
}
</script>
<template>
    <section class="sec_third">
            <h1 class="sec_title">"Рыцари и Стратеги: Мысли, Играй, Побеждай!"</h1>
            <div class="div_info">
                <div class="card" v-for="post in posts" :style="{ backgroundImage: 'url(' + post.link + ')' }">
                    <div class="card_img">
                        <div class="text_date">
                        <p>{{ post.date }}</p>
                        </div>
                    <h3 class="card_title">{{ post.game_name }}</h3>
                    <div class="card_option">
                    <p class="text_option">{{ post.place }}</p>  
                    <p class="text_option">Сложность: {{ post.difficult }}</p>   
                    <p class="text_option">{{ post.experience }}</p>  
                    </div>
                        <button class="card_btn" @click="JoinGame(post._id)">Хочу учавствовать</button> 
                    </div>
                </div>
            </div>
    </section>   
    </template>
<style scoped>
.sec_third {
    background: url("../../public/third_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
.div_info{
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    flex-wrap: wrap;
}
.card{   
    position: relative;
    overflow: hidden;
    width: 25%;
    border: 3px gold solid;
    border-radius: 10%;
    background-size: cover;
    background-position: center;
    margin: 10px;
}
.card_option{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;
}
.sec_title{
    padding: 50px;
    font-size: 55px;
    font-weight: 600;
    text-align: center;
}
.card_title{
    padding: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
}
.card_img{
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.text_option{
    padding: 10px;
    font-size: 20px;
}
.card_btn{ 
    margin: 5px;
    padding: 12px 50px;
    font-weight: 600;
    background-color: #166aa7;
    border: none;
    box-shadow: 0 0 20px #166aa7;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
}
.text_date{
    text-align: left;
    margin: 9px 0 0 9px;
    border-radius: 15%;
    border: #166aa7 1px solid;
    width: 60px;
    text-align: center;
}
.div_btn{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
@media (max-width: 1200px) {
.card{
    width: 45%;
}   
.sec_title{
    padding: 25px;
    font-size: 45px;
    font-weight: 600;
    text-align: center;
}
}
@media (max-width: 500px) {
.card{
    width: 100%;
}    
}
</style>