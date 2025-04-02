<template>
<section class="sec_third">
    <h1 class="sec_title">"Рыцари и Стратеги: Мысли, Играй, Побеждай!"</h1>
        <div class="div_info">
        <div class="card">
            <h3 class="card_title">Найди своих союзников!</h3>
            <div class="card_img">
            <img class="card_img" src="/public/war_chest.png">
            </div>
            <p class="text_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias explicabo nihil culpa voluptatem ipsa voluptates expedita quam asperiores adipisci qui, architecto earum nesciunt quo, cupiditate delectus dolore dignissimos repellendus? Ab?</p>    
            <div class="card_option">
            <p class="text_option">Дата проведения</p> 
            <p class="text_option">Кол-во игроков</p>  
            <p class="text_option">Сложность</p>  
            </div>
            <button class="card_btn"><NuxtLink><a>Учавствовать</a></NuxtLink></button>
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
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    border: 3px gold solid;
    background: url("../../public/second_back.jpg");
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
    margin: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
}
.card_img{
    width: 200px;
    margin: auto;
}
.card_btn{
    margin: 5px 50px;
    font-weight: 600;
    background-color: #166aa7;
    border: none;
    box-shadow: 0 0 20px #166aa7;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
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