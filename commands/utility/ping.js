const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'ping',
    description: 'Bot ping',
    execute(client, message, cmd, args, Discord){

        message.channel.send({
            embed: { color: `#00f2ff`, description: 'Finding Bot ping...'} 
        }).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit({
                embed: { color: `#00f2ff`, description: `Pong! (Roundtrip took: ${ping} ms. Heartbeat: ${client.ws.ping} ms)`} 
            })
        })
   
    }
}