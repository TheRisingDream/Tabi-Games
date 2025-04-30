<template>
<body>
    <div class="container">
        <div class="title">Создать меропритие</div>
        <form action="#">
            <div class="game_details">
                <div class="input_box">
                    <span class="details">Название игры</span>
                    <input type="text" placeholder="Введите название игры" required>
                </div>
                <div class="input_box">
                    <span class="details">Количество игроков</span>
                    <input type="text" placeholder="Введите название игры" required>
                </div>
                <div class="input_box">
                    <label class="details" for="game_difficult">Сложность игры</label>
                <select name="difficult">
                    <option value="Тяжёлая">Тяжёлая</option>
                    <option value="Средне-тяжёлая">Средне-тяжёлая</option>
                    <option value="Средняя">Средняя</option>
                    <option value="Средне-лёгкая">Средне-лёгкая</option>
                    <option value="Лёгкая">Лёгкая</option>
                </select> 
                </div>
                <div class="input_box">
                    <span class="details">Дата проведения</span>
                    <input type="text" placeholder="Введите дату проведения" required>
                </div>
                <div class="input_box">
                    <span class="details">Обложка</span>
                    <input type="text" placeholder="Вставьте ссылку на картинку" required>
                </div>
            </div>
            <div class="experience_detail">
                <span class="experience_title">Опыт игрока:</span>
                <div class="category">
                    <label for="">
                        <span class="dot one"></span>
                        <span class="experience">Начинающий</span>
                    </label>
                    <label for="">
                        <span class="dot one"></span>
                        <span class="experience">Имеющий опыт</span>
                    </label>
                    <label for="">
                        <span class="dot one"></span>
                        <span class="experience">Опытный</span>
                    </label>
                </div>
            </div>
            <div class="button">
                <input type="submit" value="Создать мероприятие">
            </div>
        </form>
    </div>    
</body>
</template>
<style lang="css" scoped>
body{
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
}
</style>
