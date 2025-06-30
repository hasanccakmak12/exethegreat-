const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// 🟢 frontend klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, '../frontend')));

// 🟢 Ana sayfada index.html'i gönder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı');

  socket.on('chatMessage', (data) => {
    io.emit('chatMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı ayrıldı');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
