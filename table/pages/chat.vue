<script setup>
import { io } from "socket.io-client";
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const auth_user = computed(() => authStore.user ?? 'Нет данных о пользователе')
// const newUser = computed(() => authStore.event_id)
const socket = io();
const newMessage = ref('');
const newUser = ref(authStore.event_id);
const messages = ref([]);
const user = ref(null); 
const user_id = ref(null); 
// const user = await $fetch(`/api/chat/findUser`, {
//         method: 'post',
//         body: {
//             id_post: eventId.value
//         }
//     });

console.log(auth_user)
socket.emit('logged_in', auth_user.value._id);
async function loadMessages(receiverId) {
    messages.value = await $fetch('/api/chat/messages', {
        method: 'POST',
        body: {
            sender_id: auth_user.value._id,
            resiver_id: receiverId
        }
    });
    console.log('id',receiverId)
}
async function findUser(){
  const find_user = await $fetch(`/api/chat/findUser`, {
        method: 'post',
        body: {
            id_user: newUser.value
        }
    });
    console.log('find user', newUser.value)
    user.value = find_user.username
    user_id.value = find_user._id
    loadMessages(find_user._id);
    newUser.value = ''
}
console.log(messages)
const senders = await $fetch('/api/chat/getSenders', {
        method: 'POST',
        body: { userId: auth_user.value._id }
    });
console.log("write", senders)
socket.on('chat message', (msg) => {
    messages.value.push(msg);
    console.log("ws work")
    console.log(messages)
  });
function selectChat(sender) {
    user.value = sender.sender; 
    user_id.value = sender.sender_id; 
    console.log("sender", sender)
    loadMessages(sender.sender_id); 
}
function sendMessage (){
  const msg = {
    text: newMessage.value,
    sender: auth_user.value.username,
    sender_id: auth_user.value._id,
    resiver: user.value,
    resiver_id: user_id.value
  };
  socket.emit('chat message', msg);
  console.log("send is ok")
  newMessage.value = '';
}


</script>

<template>
<section>
  <div class="senders-list">
    <h3>Люди, написавшие вам:</h3>
    <ul>
        <li v-for="sender in senders" @click="selectChat(sender)">
            {{ sender.sender }} 
        </li>
    </ul>
</div>
    <div class="new-chat">
      <input v-model="newUser" placeholder="Введите имя пользователя или ID" />
      <button @click="findUser">Начать чат с новым пользователем</button>
    </div>
<div class="chat-window"  v-if="user">
      <h3>Чат с {{ user }}</h3>
      <div class="messages">
        <div v-for="msg in messages">
        <b>{{ msg.sender_id === auth_user._id ? 'Я' : msg.sender }}:</b> {{ msg.message }}
      </div>

      </div>
      <input v-model="newMessage" placeholder="Введите сообщение" />
      <button @click="sendMessage">Отправить</button>
      <!-- <button @click="closeChat">Закрыть чат</button> -->
    </div>
</section>

</template>
<style scoped>
section{
    background: url("../public/third_back.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
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

