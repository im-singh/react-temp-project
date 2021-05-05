const express = require('express');
const app = express();
const cors = require("cors");
// const http = require('http').createServer(app);
// const io = require('socket.io')(http, {
//     cors: {
//         origin: '*',
//     }
// }
// );

const Mongoose = require('./Mongo/MongoConnect')

app.use(cors())
app.use(express.json())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization');
//     if (req.method == 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE');
//         return res.status(200).json({});
//     }
//     next();
// })
// app.get("/", (req, res) => {
//     res.json({ status: "hello you are here" })
// });
// app.put("/name/:id", (req, res) => {
//     console.log('params: ', req.params);
// });
// app.use("/h", router);
Mongoose.connect();


app.use('/items', require('./items/router'));
app.use('/auth', require("./User/router"))
app.all("*", (req, res) => {
    res.send("404 not found");
})
// io.use((socket, next) => {
//     const username = socket.handshake.auth.user;
//     if (!username) {
//         return next(new Error('invalid username'))
//     }
//     socket.username = username;
//     next();
// })

// io.on("connection", (socket) => {
//     const users = [];

//     for (let [id, socket] of io.of("/").sockets) {
//         users.push({
//             userID: id,
//             username: socket.username,
//         });
//     }
//     socket.on("disconnect", () => {
//         console.log('user disconneted')
//     })
//     socket.emit("users", users);

//     socket.broadcast.emit("user_connected", {
//         userID: socket.id,
//         username: socket.username,
//     });

//     socket.on("private_message", (data) => {
//         console.log("Message: ", data);
//         socket.to(data.reciver).emit("private_message", data);
//     })
// });





//simple /socket and /socketClass components
// io.on('connection', (socket) => {
//     console.log('A user connected', socket);
//     console.log('query: ', socket.handshake.query);
//     socket.on("disconnect", () => {
//         console.log('user disconnected')
//     })
//     socket.on("userMessage", (data) => {
//         console.log("🚀 ~ file: Server.js ~ line 35 ~ socket.on ~ data", data)
//         let { msg } = data;
//         socket.emit("messageUsers", { msg })
//     })
//     socket.on("hello", data => {
//         let { msg } = data;
//         console.log("🚀 ~ file: Server.js ~ line 41 ~ io.on ~ msg", msg)
//         socket.emit("messageUsers", { msg })
//     })
// })

app.listen(4000, () => {
    console.log("PORT: 4000")
})
// http.listen(5000, () => {
//     console.log("Server is listening on 5000")
// })