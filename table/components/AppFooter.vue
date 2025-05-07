<script setup>
const route = useRoute();

const footer = computed(() => {
  const currentPage = route.path;
  if (currentPage === '/') {
    return 'sec_third';
  } else if (currentPage === '/login' || currentPage === '/register' || currentPage ==='/event' || currentPage ==='/updateEvent') {
    return 'sec_third';
  } else {
    return ''; // Или какое-то значение по умолчанию
  }
});
</script>
<template> 
<section :class="footer">
<div class="foot">
<p class="text_foot">Tabi Games © 2024</p>
<a href=""><img class="logo" src="/public/up-arrow.png" alt=""></a>
<div>
    <a><img class="logo" src="/public/vk.png"></a>
    <a><img class="logo" src="/public/telegram.png"></a>
</div>    
</div>

</section>

</template>
<style scoped>
.foot{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logo{
    width: 34px;
    padding: 5px;
}
.text_foot{
    font-size: 19px;
}
/* Классы для background */
.sec_third {
    background: url("../public/third_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
.login_back {
    background: url("../public/second_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
</style>
