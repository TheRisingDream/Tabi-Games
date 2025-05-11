<script setup>
definePageMeta({
    middleware: ["auth"]
})
</script>

<template>
    <main class="sec_third">
    <section>
    <EventPageFormEvent />
    </section>
    <section>
    <EventPageSectionUserEvent />
    </section>    
    </main>
</template>
<style lang="css" scoped>
.sec_third {
    background: url("../public/third_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}</style>
