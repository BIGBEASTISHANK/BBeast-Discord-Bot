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
            })
        })
   
    }
}