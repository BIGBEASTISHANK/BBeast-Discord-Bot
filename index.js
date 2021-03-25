const Discord = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;
const keepAlive = require("./server");


const poll = require('./commands/general/poll')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on("ready", () =>{
    client.user.setPresence({ activity: { name: `${prefix}help | ${client.guilds.cache.size} guilds`, type: "LISTENING"  }, status: 'online' })
    poll(client)
})

keepAlive();
client.login(process.env.TOKEN);