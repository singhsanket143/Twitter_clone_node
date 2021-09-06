const socket = function(socketServer) {
    let io = require('socket.io')(socketServer, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
          }
    });
    io.sockets.on('connection', function(socket) {
        console.log('New socket connection received', socket.id);
        socket.on('disconnect', function() {
            console.log('Socket disconnected ', socket.id);
        });
        socket.on('join_room', function(data) {
            console.log('Joining req received...', data);
            socket.join(data.chatroom);
            io.in(data.chatroom).emit('user_joined', data);
        });
        socket.on('send_message', function(data) {
            io.in(data.chatroom).emit('new_message', data);
        });

    });
}

module.exports = {socket};