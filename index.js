
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`Eingeloggt als ${client.user.tag}`);
});

// Antwort auf !hallo
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === '!hallo') {
    message.reply('Hallo! 👋');
  }
});

// Neue Mitglieder begrüßen
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(
    ch => ch.name === '𝓌𝒾𝓁𝓁𝓀𝑜𝓂𝓂𝑒𝓃' && ch.isTextBased()
  );
  if (!channel) return;
  channel.send(`Willkommen auf dem Server, ${member}! 🎉`);
});

client.login(process.env.DISCORD_TOKEN);
