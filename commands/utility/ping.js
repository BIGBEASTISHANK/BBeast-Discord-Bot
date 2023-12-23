<<<<<<< HEAD
module.exports = {
    name: 'ping',
    permissions: [],
    cooldown: 10,
    execute(client, message, cmd, args, Discord){

        message.channel.send({
            embed: { color: `#00f2ff`, description: 'Finding Bot ping...'} 
        }).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit({
                embed: { color: `#00f2ff`, description: `Pong! (Roundtrip took: ${ping} ms. Heartbeat: ${client.ws.ping} ms)`} 
=======
const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'ping',
    aliases: ['pong'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        message.channel.send({
            embed: { color: `#DC143C`, description: 'Finding Bot ping...'} 
        }).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit({
                embed: { color: `RANDOM`, description: `Pong! (Roundtrip took: ${ping} ms. Heartbeat: ${client.ws.ping} ms)`} 
>>>>>>> jsmerge
            })
        })
   
    }
}