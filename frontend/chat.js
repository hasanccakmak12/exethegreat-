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
const COLORS = [
  "#e74c3c", "#8e44ad", "#3498db",
  "#16a085", "#f39c12", "#d35400"
];

function getColorForUsername(username) {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLORS.length;
  return COLORS[index];
}
const msg = document.createElement("div");
msg.classList.add("message");
msg.classList.add(data.username === username ? "you" : "other");
msg.textContent = `${data.username}: ${data.message}`;
