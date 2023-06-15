import express from 'express';
import morgan from 'morgan';
import './db/db.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import usersRouter from './routes/users.router.js';
import handlebars from 'express-handlebars';
import { errorHandler } from './middlewares/errorHandler.js';
import { __dirname } from './path.js';
// import { Server } from 'socket.io';
// import viewsRouter from './messages.router.js/'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set ('views', __dirname + '/views');

//aca ingresa peticion y va a products.router.js
app.use('/products', productsRouter)
app.use('/carts', cartsRouter)
app.use('/users', usersRouter)
// app.use('/messages', viewsRouter)

app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, ()=>
console.log(`server ok on port ${PORT}`)
);

// const socketServer = new Server(httpServer);

// socketServer.on('connection', async (socket)=>{
//     socket.emit('userConect', socket.id);
//     const arrayMsg = await msgDao.getAllMessages();
//     socket.emit('arrayMsg', arrayMsg);
//     socket.on('newMessage', async (data)=>{
//         const userName = data.userName
//         const message = data.message
//         await msgDao.sendMessage(userName, message);
//         const arrayMsgUpdated = await msgDao.getAllMessages();
//         socket.emit('arrayMsg', arrayMsgUpdated);
//     });
//     socket.on('deleteMsg', async (msgId)=>{
//         await msgDao.deleteMessage(msgId);
//         const arrayMsgUpdatedDel = await msgDao.getAllMessages();
//         socket.emit('arrayMsg', arrayMsgUpdatedDel);
//     });
// });




