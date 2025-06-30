const socket = io(); // Otomatik olarak sunucuya bağlanır

const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const messagesDiv = document.getElementById('messages');

// Mesaj gönderme
sendButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();
  
  if (username && message) {
    socket.emit('chatMessage', { username, message });
    messageInput.value = ''; // Gönderdikten sonra temizle
  }
});

// Gelen mesajları ekrana yaz
socket.on('chatMessage', (data) => {
  const p = document.createElement('p');
  p.textContent = `${data.username}: ${data.message}`;
  messagesDiv.appendChild(p);
});
