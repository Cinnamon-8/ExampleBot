module.exports = (message) => {
  if(message.author.bot) return;
  if(message.content === 'Hello' || message.content === 'hello' || message.content === 'hi' || message.content === 'Hi'){
    message.reply("Hi");
  }
}