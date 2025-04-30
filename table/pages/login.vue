<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const email = useState('email',(()=>''))
const password = useState('password',(()=>''))
async function login(){
    const user = await $fetch('/api/users/login', {
        method: "post",
        body: {
            email:email.value,
            password:password.value
        }
    })
    if(user){
    authStore.login(user);
    await navigateTo('/')
    };
    }
</script>
<template>
    <section class="login_back">
        <div class="content">
        <div class="info">
            <h1>Tabi Games</h1>
            <p>- ваша идеальная онлайн-платформа для общения, обмена опытом и наслаждения любимыми настольными играми! Мы собираем вместе всех любителей настольных игр, чтобы создать сообщество, где каждый найдет единомышленников и сможет поделиться страстью к играм.</p>
        </div> 
        <div class="login_wrapper">
            <div class="login_box">
                <form method='POST' @submit.prevent="login">
                    <h1>Авторизация</h1>
                    <div class="input_box">
                        <input type="text" placeholder="Почта" required v-model="email">
                    </div>
                    <div class="input_box">
                        <input type="password" placeholder="Пароль" required  v-model="password">
                    </div>
                    <div class="remember_forgot">
                        <label><input type="checkbox">Запомнить меня?</label>
                        <a href="">Забыли пароль</a>
                    </div>
                    <button type="submit" class="btn">Войти</button>
                    <div class="register_link">
                        <p>Не Зарегистрированы?</p>
                        <NuxtLink to="/register"><a href="">Регистрация</a></NuxtLink>
                    </div>
                </form>
            </div>
        </div>
        </div>

    </section>
</template>
<style scoped>
.content{
    display: flex;
    align-items: center;
    padding: 20px 100px 0;
    gap: 60px;
    height: 100vh;
}
.info h1{
    font-size: 50px;
}
.info p{
    margin: 10px 0 25px;
    font-size: 20px;
}
.btn{
    display: inline-block;
    padding: 12px 50px;
    background: #fff;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    font-size: 16px;
    color: #333;
    font-weight: 600;
}
.login_box{
    width: 450px;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    border-radius: 15px;
    padding: 50px 40px;
    }
.login_box h1{
    font-size: 36px;
    text-align: center;
    line-height: 1;
}
.login_box .input_box{
    margin: 30px 0;
}
.login_box .input_box input{
    width: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    outline: none;
    border-radius: 40px;
    padding: 13px 50px 13px 20px;
    font-size: 16px;
    color: #fff;
}
.login_box .input_box input::placeholder{
    color: #fff;
}
.login_box .remember_forgot{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}
.login_box .remember_forgot label{
    display: flex;
}
.login_box .remember_forgot label input{
    accent-color: #fff;
    margin-right: 6px;
}
a{
    text-decoration: none;
    color: #fff;
}
.login_box .remember_forgot a:hover,
    .login_box .register_link a:hover{ 
        text-decoration: underline;    
    }
.login_box .btn{
    width: 100%;
    border: none;
    cursor: pointer;    
}
.login_box .register_link{
    display: flex;
    justify-content: center;
    font-size: 14.5px;
    margin-top: 15px;
}
.login_box .register_link a {
    font-weight: 600;
    margin-left: 6px;
}
.login_back {
    background: url("../public/third_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
@media (max-width: 1000px) {
.content{
    flex-wrap: wrap;
}   
}
@media (max-width: 500px) {
.content{
    gap: 40px;
    padding: 50px 20px;
    height: max-content;
} 
.login_box{
    width: 350px;
}   
}
</style>