<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const userId = computed(() => authStore.user._id ?? 'Нет данных о пользователе')
const game_name = useState('game_name', (()=>''));
const place = useState('place', (()=>''));
const difficult = useState('difficult', (()=>''));
const date = useState('date', (()=>''));
const link = useState('link', (()=>''));
const experience = useState('experience', (()=>''));
async function createEvent() {
    const event = await $fetch('/api/event/createEvent', {
        method: "post",
        body: {
            id:userId.value,
            game_name:game_name.value,
            place:place.value,
            difficult:difficult.value,
            date:date.value,
            link:link.value,
            experience:experience.value
        }
    })    
    console.log("ok");  
}
</script>
<template>
<section>
    <div class="container">
        <div class="title">Создать меропритие</div>
        <form method="POST" @submit.prevent="createEvent">
            <div class="game_details">
                <div class="input_box">
                    <span class="details">Название игры</span>
                    <input type="text" placeholder="Введите название игры" v-model="game_name" required>
                </div>
                <div class="input_box">
                    <span class="details">Местоположение</span>
                    <input type="text" placeholder="Введите где будет проходить игра" v-model="place" required>
                </div>
                <div class="input_box">
                    <label class="details" for="game_difficult">Сложность игры</label>
                <select name="difficult" v-model="difficult">
                    <option value="Лёгкая">Лёгкая</option>
                    <option value="Средне-лёгкая">Средне-лёгкая</option>
                    <option value="Средняя">Средняя</option>
                    <option value="Средне-тяжёлая">Средне-тяжёлая</option>
                    <option value="Тяжёлая">Тяжёлая</option>
                </select> 
                </div>
                <div class="input_box">
                    <span class="details">Дата проведения</span>
                    <input type="date" placeholder="Введите дату проведения"  v-model="date" required>
                </div>
                <div class="input_box">
                    <span class="details">Обложка</span>
                    <input type="text" placeholder="Вставьте ссылку на картинку" v-model="link" required>
                </div>
            </div>
            <div class="experience_detail">
                <input type="radio" value="Начинающий" id="dot_1" v-model="experience">
                <input type="radio" value="Имеющий опыт" id="dot_2" v-model="experience">
                <input type="radio" value="Опытный" id="dot_3" v-model="experience">
                <span class="experience_title">Опыт игрока:</span>
                <div class="category">
                    <label for="dot_1">
                        <span class="dot one"></span>
                        <span class="experience">Начинающий</span>
                    </label>
                    <label for="dot_2">
                        <span class="dot two"></span>
                        <span class="experience">Имеющий опыт</span>
                    </label>
                    <label for="dot_3">
                        <span class="dot three"></span>
                        <span class="experience">Опытный</span>
                    </label>
                </div>
            </div>
            <div class="button">
                <input type="submit" value="Создать мероприятие">
            </div>
        </form>
    </div>    
</section>
</template>
<style scoped>
section{
    display: flex;
    height: 50%;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.container{
    max-width: 700px;
    width: 100%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
}
.container .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}
.container .title::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.container form .game_details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}
form .game_details .input_box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}
.game_details .input_box .details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}
.game_details .input_box input, select{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px; 
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}
.game_details .input_box input:focus,
.game_details .input_box input:valid{
    border-color: #9b59b6;
}
.game_details .input_box select:focus,
.game_details .input_box select:valid{
    border-color: #9b59b6;
}
form .experience_detail .experience_title{
    font-size: 20px;
    font-weight: 500;
}
form .experience_detail .category{
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
}
.experience_detail .category label{
    display: flex;
    align-items: center;
}
.experience_detail .category .dot{
    height: 18px;
    width: 18px;
    background: #d9d9d9;
    border-radius: 50%;
    margin-right: 10px;
    border: 5px solid transparent;
    transition: all 0.5s ease;
}
#dot_1:checked ~ .category label .one,
#dot_2:checked ~ .category label .two,
#dot_3:checked ~ .category label .three{
    border-color: #9d9d9d;
    background-color: #9b59b6;
}
form input[type="radio"]{
    display: none;
}
form .button{
    height: 45px;
    max-width: 45px 0;
}
form .button input{
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
form .button input:hover{
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}
@media (max-width: 584px){
    .container{
        max-width: 100%;
    }
    form .game_details .input_box{
        margin-bottom: 15px;
        width: 100%;
    }
    form .game_details .category{
        width: 100%;
    }
    .container form .game_details{
        max-height: 300px;
        overflow-y: scroll;
    }
    .game_details::-webkit-scrollbar{
        width: 0;
    }
}
</style>
