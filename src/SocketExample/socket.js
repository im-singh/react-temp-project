import io from 'socket.io-client';

var socket;
const SC = {}
socket = io("http://localhost:5000", { autoConnect: false });

function connectSocket(user) {
    socket.auth = { user };
    socket.connect();
    // socket.onAny((event, ...args) => {
    //     console.log(event, args);
    // });
}
function emitActions(action, data) {
    socket.emit(action, data);
}
function returnId() {
    return socket.id;
}
function subscribeToEvent(type, cb) {
    socket.on(type, data => {
        cb(data)
    });
}
function unsubscribeFromEvent(type, cb) {
    socket.off(type, cb);
}
function returnSocket() {
    return socket;
}
SC.unsubscribeFromEvent = unsubscribeFromEvent;
SC.emitAction = emitActions;
SC.returnSocket = returnSocket;
SC.subscribeToEvent = subscribeToEvent;
SC.connectSocket = connectSocket;
SC.returnId = returnId;
export default SC;