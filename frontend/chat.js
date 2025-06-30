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

export default function Message({ username, message }) {
  const color = getColorForUsername(username);

  return (
    <div>
      <strong style={{ color }}>{username}: </strong>
      <span>{message}</span>
    </div>
  );
}
