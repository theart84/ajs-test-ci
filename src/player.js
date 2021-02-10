export default function checkHealth(player) {
  if (player.health > 50) {
    return 'healthy';
  }
  if (player.health >= 15 && player.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
