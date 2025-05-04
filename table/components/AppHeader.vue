<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const route = useRoute();

const header = computed(() => {
  const currentPage = route.path;
  if (currentPage === '/') {
    return 'main_page';
  } else if (currentPage === '/login' || currentPage === '/register' || currentPage ==='/event') {
    return 'login_back';
  } else {
    return ''; 
  }
});

const nickname = ref('');
// Функция для обновления ника
const updateNickname = () => {
  if (authStore.user !== null) {
    nickname.value = authStore.user.username;
  } else {
    nickname.value = 'Профиль'; 
  }
};

updateNickname();
watchEffect(() => {
  updateNickname();
});
// let header = ref("")
// let route = useRoute();
// let CurentPage = route.path;
// if (CurentPage == "/"){
//     header = 'main_page'
// }
// else if(CurentPage == "/login"){
//     header = 'login_back'
// }

</script>
<template>
    <section :class="header">
        <nav class="navbar">
            <a href="" class="logo">Tabi Games</a>
            <ul>
                <li><NuxtLink to="/"><a>Home</a></NuxtLink></li> 
                <li><NuxtLink to="/messangers"><a>Сообщения</a></NuxtLink></li>
                <li><NuxtLink to="/event"><a>Мероприятия</a></NuxtLink></li>
                <li><NuxtLink to="/friend"><a>Друзья</a></NuxtLink></li>
                <li><NuxtLink to="/profile"><a>{{nickname}}</a></NuxtLink></li>
            </ul>
        </nav>
    </section>
</template>
<style scoped>
a{
    cursor: pointer;
    text-decoration: none;
    color: #fff;
}
.navbar{
    left: 0;
    right: 0;
    width: 100%;
    padding: 25px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    flex-wrap: wrap;
    /* background-color: #3b82f6; */
}
.navbar .logo{
    font-size: 30px;
    font-weight: 700;
}
.navbar ul{
    display: flex;
    flex-wrap: wrap;
}
.navbar ul li{
    position: relative;
    list-style: none;
    margin-left: 35px;
}
.navbar ul li::after{
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scale(0);
    transform-origin: right;
    transition: transform .5s;
}
.navbar ul li:hover::after{
    transform: scale(1);
    transform-origin: left;
}
.navbar ul li a{
    font-size: 20px;
    font-weight: 500;
} 
/* Классы для background */
.login_back {
    background: url("../public/third_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
.main_page{
    background: url("../public/first_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
@media (max-width: 425px) {
    .navbar ul li {
        margin-top: 10px;
    }   
    .navbar .logo{
        text-align: center;
    }
}
@media (max-width: 1024px) {
    .navbar ul li {
        margin-top: 10px;
    }   
    .navbar ul li a {
        font-size: 26px;
    } 
    .navbar .logo{
        text-align: center;
}
}

    </style>