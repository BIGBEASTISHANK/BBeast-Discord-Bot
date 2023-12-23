const discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
    name: 'ascii',
    aliases: [],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

   let text = args.join(" ");
   if(!text) {
return message.channel.send({
    embed: { description: 'Please type the text you want to convert to ascii', color: '#DC143C' }
})
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send({
    embed: { description: 'Please type something below 20 characters!', color: '#DC143C' }
})
}

figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};