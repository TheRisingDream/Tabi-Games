<template>
<section class="sec_second">
    <h1 class="sec_title">Tabi Games это:</h1>
    <div class="div_main">
        <div class="div_info">
        <div class="text_info">
            <img class="img_info" src="/public/search.png">
            <div>
            <h3 class="text_title">Найди своих союзников!</h3>
            <p class="text_desc">Ищешь команду для совместной игры? Здесь ты можешь найти игроков для любых игр, получить новые знакомства и
                улучшить свои игровые навыки! Просто введи имя игрока или игровой никнейм, чтобы быстро найти нужного человека.</p> 
            </div>
        </div>
        <div class="text_info">
            <img class="img_info" src="/public/calendar.png">
            <div>
            <h3 class="text_title">Организация Вашего События</h3>
            <p class="text_desc">Готовы создать незабываемое событие? Сделайте это легко и быстро с нашей простой формой.
                Укажите все детали — от даты до места проведения — и привлеките участников, которые разделяют вашу страсть и интересы!</p> 
            </div>
        </div>
        <div class="text_info">
            <img class="img_info" src="/public/chat.png">
            <div>
            <h3 class="text_title">Общайся и Делись Мнениями</h3>
            <p class="text_desc">Присоединяйся к нашему сообществу и общайся с единомышленниками! 
                В нашем чате ты сможешь быстро обмениваться мыслями, задавать вопросы и получать мгновенные ответы.</p> 
            </div>
        </div>
    </div>
    
        <img class="img_main" src="/public/japaneze_el.jpg">
    </div>
</section>   
</template>
<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
.sec_second {
    background: url("../public/second_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
.div_info{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 50%;
    margin-left: 50px;
}
.text_info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 25px;

}
.text_title {
    margin: 30px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
}
.text_desc{
    font-size: 18px;
    align-items: center;
}
.img_info {
    width: 65px;
    height: 65px;
    margin: 40px;
}
.sec_title{
    padding: 50px;
    font-size: 55px;
    font-weight: 600;
}
.div_main{
    display: flex;
    justify-content: space-between;
}
.img_main{
    display: flex;
    width: 40%;
    text-align: center;
    height: 680px;
    padding: 25px;
    padding-right: 50px;
}
@media (max-width: 1200px) {
    .img_main{
        display: none;
    }
    .div_info{
        margin-left: 10px;
        max-width: none;
    }
    .text_info{
        padding: 10px;
    }
}
    .card{
    width: 100%;
}  
@media (max-width: 500px) {
    .text_title{
        padding: 20px;
        font-size: 25px;
        font-weight: 400;
    }   
    .text_disc{
        font-size: 15px;
    }
    .img_info{
        width: 45px;
        height: 45px;
        margin: 20px;
    }
    .sec_title{
        padding: 25px;
        font-size: 45px;
    }
    .div_info{
        margin-left: 10px;
        max-width: none;
    }
    .img_main{
        display: none;
    }
    .text_desc{
        font-size: 15px;
    }
} 
</style>