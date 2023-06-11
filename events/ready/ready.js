const {ActivityType} = require("discord.js");

module.exports = (ready,client) => {
  console.log(`Bot is successful loggedIn as $TrivalBot`);
  client.user.setActivity('Just a casual bot', { type: ActivityType.Watching });
  
}