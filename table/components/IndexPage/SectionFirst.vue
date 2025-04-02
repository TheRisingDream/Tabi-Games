<template>
    <section class="sec_first">
    <div class="div_info">
        <h1 class="sec_title">Tabi Games</h1>
        <p class="sec_info">Это онлайн-платформа, которая помогает любителям настольных игр находить друг друга и играть вместе.</p>
        <button class="btn_join"><NuxtLink to="/login" class="link">Присоединиться</NuxtLink></button> 
    </div>
    </section>
</template>
<style scoped>
*{
    color: #fff;
}
.sec_first{
    background: url("../../public/first_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
.div_info{
    padding-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
}
.sec_title{
    margin-top: 250px;
    margin-bottom: 10px;
    font-size: 50px;
    font-weight: 500;
}
.sec_info{
    text-align: center;
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 2rem;
    width: 40%;
}
.btn_join{
    padding: 25px 30px;
    font-weight: 600;
    background-color: #166aa7;
    border: none;
    box-shadow: 0 0 20px #166aa7;
    border-radius: 15%;
    cursor: pointer;
    font-size: 20px;
}
.link{
    text-decoration: none;
}
/* .sec_second{
    color: black;
} */
@media (max-width: 1200px) {
    .sec_title{
        margin-top: 90px;
    }   
    .navbar .logo{
        text-align: center;
    }
}
</style>