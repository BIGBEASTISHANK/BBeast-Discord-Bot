const Discord = require('discord.js');
require('dotenv').config();

const poll = require('./commands/general/poll')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on("ready", () =>{
    client.user.setPresence({ activity: { name: `-help | ${client.guilds.cache.size} guilds`, type: "LISTENING"  }, status: 'online' })
    poll(client)
})

client.login(process.env.DISCORD_TOKEN);