<script setup>
import { io } from "socket.io-client";
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const auth_user = computed(() => authStore.user ?? 'Нет данных о пользователе')
const eventId = computed(() => authStore.event_id)
const socket = io();
const newMessage = ref('');
const messages = ref([]);
const user = await $fetch(`/api/chat/findUser`, {
        method: 'post',
        body: {
            id_post: eventId.value
        }
    });

console.log(auth_user)
socket.emit('logged_in', auth_user.value._id);
messages.value = await $fetch(`/api/chat/messages`, {
        method: 'post',
        body: { sender_id: auth_user.value._id,
                resiver_id: user._id }
    });
console.log(messages)

socket.on('chat message', (msg) => {
    // Проверяем, что сообщение относится к текущему чату
      messages.value.push(msg);
    console.log("ws work")
    console.log(messages)
  });
function sendMessage (){
  const msg = {
    text: newMessage.value,
    sender: auth_user.value.username,
    sender_id: auth_user.value._id,
    resiver: user.username,
    resiver_id: user._id
  };
  socket.emit('chat message', msg);
  console.log("send is ok")
  newMessage.value = '';
}


</script>

<template>
<div class="chat-window">
      <h3>Чат с {{ user.username }}</h3>
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index">
        <b>{{ msg.sender_id === auth_user._id ? 'Я' : msg.sender }}:</b> {{ msg.message }}
      </div>

      </div>
      <input v-model="newMessage" placeholder="Введите сообщение" />
      <button @click="sendMessage">Отправить</button>
      <!-- <button @click="closeChat">Закрыть чат</button> -->
    </div>
</template>
<style scoped>
.chat-window {
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  margin-top: 20px;
}
.messages {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #eee;
  margin-bottom: 10px;
  padding: 5px;
}
.my-msg {
  background-color: #def;
  padding: 3px;
  border-radius: 3px;
}
</style>

