import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
import { Message } from "~/server/models/message.model";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();
  
  let clients =  new Map();

  io.bind(engine);
  io.on("connection", function (socket) {
    console.log("ws connected");
    socket.on('logged_in', async function(data) {
          clients.set(data, socket.id);
          console.log(socket.id)
        })
    
    socket.on('chat message', async function (data) {
      const message = new Message({
              message: data.text,
              sender: data.sender,
              sender_id: data.sender_id,
              resiver: data.resiver,
              resiver_id: data.resiver_id,
              socket_id: socket.id
            });
            // console.log(message);
            await message.save();
            // console.log('resiver', data.resiver_id)
      io.to(clients.get(data.resiver_id)).emit('chat message', {
        message: data.text,
        receiver: data.receiver,
        sender: data.sender,
      });
      // console.log('sender', data.sender_id)
      io.to(clients.get(data.sender_id)).emit('chat message', {
        message: data.text,
        receiver: data.receiver,
        sender: data.sender,
      });
    })
  });

  nitroApp.router.use("/socket.io/", defineEventHandler({
    handler(event) {
      engine.handleRequest(event.node.req, event.node.res);
      event._handled = true;
    },
    websocket: {
      open(peer) {
        // @ts-expect-error private method and property
        engine.prepare(peer._internal.nodeReq);
        // @ts-expect-error private method and property
        engine.onWebSocket(peer._internal.nodeReq, peer._internal.nodeReq.socket, peer.websocket);
      }
    }
  }));
});