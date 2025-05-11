<script setup>
definePageMeta({
  middleware: ["auth"]
})
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
    <h3 class="title_chat">Чаты: </h3>
    <div class="chat" v-for="sender in senders" @click="selectChat(sender)">
      <div class="chat_box">
        <p>{{ sender.sender }}</p>
      </div>
    </div>
</div>
<div class="new-chat" v-if="user == null ">
  <div class="blur">
    <div class="input_box">
    <input v-model="newUser" placeholder="Введите ID" />
    </div>
    <button @click="findUser" class="btn">Начать чат с новым пользователем</button>
  </div>
 
      
      
</div>
<div v-if="user" class="chat">
  <div class="chat-window">
      <h3 class="title_chat">Чат с {{ user }}</h3>
      <div class="messages">
        <div v-for="msg in messages" class="text_chat">
        <b>{{ msg.sender_id === auth_user._id ? authStore.user.username : msg.sender }}:</b> {{ msg.message }}
        </div>

      </div>
      <div class="input_box">
      <input v-model="newMessage" placeholder="Введите сообщение" />
      </div>
      <button @click="sendMessage" class="btn">Отправить</button>
      <!-- <button @click="closeChat">Закрыть чат</button> -->
    </div>
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
    justify-content: space-around;
    height: 88vh;
    padding: 10px;
}
.text_chat{
  font-size: 18px;
  margin: 5px;
}
.title_chat{
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.blur{
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 15px;
  padding: 10px;
}
.new-chat{
  display: flex;
  align-items: center;
}
.input_box input{
    width: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    outline: none;
    border-radius: 40px;
    padding: 13px 50px 13px 20px;
    font-size: 16px;
    color: #fff;
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
    margin-top: 5px;
}
.chat_box{
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    padding: 10px;
    margin: 10px;
    width: 100px;
    text-align: center;
    cursor: pointer;
    transition: all ease;
}
.chat_box:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
}

.chat-window {
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 15px;
  padding: 10px;
  width: 500px;
  margin-top: 20px;
}
.chat{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
}
.senders-list{
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 15px;
  padding: 10px;
  width: 300px;
}
.my-msg {
  background-color: #def;
  padding: 3px;
  border-radius: 3px;
}
</style>

