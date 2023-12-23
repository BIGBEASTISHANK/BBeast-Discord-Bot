const Discord = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;
const mongoose = require('mongoose');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.command = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on("ready", () => {
    client.user.setPresence({ activity: { name: `${prefix}help | ${client.guilds.cache.size} guilds`, type: "LISTENING" }, status: 'online' })
})

client.on("guildCreate", (guild) => {

    const { MessageEmbed } = require('discord.js');

    const serverjoin = new MessageEmbed()
        .setColor('#00f2ff')
        .setThumbnail(`${guild.iconURL()}`)
        .setTitle('Joined A New server!')
        .addField('Name:', `**${guild.name}**`, true)
        .addField('Members:', `**${guild.memberCount}**`, true)
        .setTimestamp();

    client.channels.cache.get('826738618486751242').send(serverjoin);

});

client.login(process.env.TOKEN);