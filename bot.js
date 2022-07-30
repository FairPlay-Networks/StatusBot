const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// Prefix
let prefix = "!";
client.on("messageCreate", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(`${prefix}test`)) {
    message.channel.send("Test bestanden");
  } else

  if (message.content.startsWith(`${prefix}foo`)) {
    message.channel.send("bar!");
  }
});

// Token
client.login("SuperSecretBotTokenHere");