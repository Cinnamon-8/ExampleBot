module.exports = {
  data:{
    name: 'ping',
    description: 'Displays Bots Ping!',
  },
  run:  ( {interaction, client} ) => {
    interaction.reply(`Pong! API Latency is ${client.ws.ping}ms`);
  },
}