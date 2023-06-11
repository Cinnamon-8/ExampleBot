const { Client, GatewayIntentBits} = require("discord.js");
const { CommandHandler } = require("djs-commander");
const path = require("path");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const port = 3000;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
  ],
});

new CommandHandler ({
  client,
  eventsPath: path.join(__dirname,'events'),
  commandsPath: path.join(__dirname,'commands'),

});
(async () => {
  await mongoose.connect(process.env.MONGODB);
  console.log(`LOG: connected to the Database!`);
  client.login(process.env.TOKEN);
app.get('/', (req, res) => {
  res.send('TrivalBot')
})

app.listen(port, () => {
  console.log(`TrivalBot application listening on port ${port}`)
})
})();
