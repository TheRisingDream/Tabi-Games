<script setup>
import { io } from "socket.io-client";

const socket = io();
const isConnected = ref('');
const transport = ref("N/A");
socket.on("hello", (data) => {
       isConnected.value = data
    });
</script>

<template>
<div>
  <p>Status: {{ isConnected }}</p>
</div>
</template>
