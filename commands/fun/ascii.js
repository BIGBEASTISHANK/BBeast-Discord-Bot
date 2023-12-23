<<<<<<< HEAD
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    aliases: ['help ascii'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord){

        if (!args[0]) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide some text' } });

        msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('Something went wrong');
                console.dir(err);
            }
            if (data.length > 2000) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide text shorter than 2000 characters' } })

            message.channel.send({ embed: { color: `#00f2ff`, description: '```' + data + '```' } })
        })

    }
}
=======
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
>>>>>>> jsmerge
