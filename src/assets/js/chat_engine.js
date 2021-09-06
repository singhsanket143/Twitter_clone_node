console.log("Chat engine On!!");

class ChatEngine {
    constructor(chatBox, userEmail) {
        this.chatBox = $(`#${chatBox}`);
        this.userEmail = userEmail;
        this.socket = io.connect('http://localhost:3001');
        if(this.userEmail) {
            this.connectionHandler();
        }
    }

    connectionHandler() {
        this.socket.on('connect', function() {
            console.log('connection established with backend');
        })
    }
}