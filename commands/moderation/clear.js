<<<<<<< HEAD
module.exports = {
    name: 'clear',
    aliases: ['purge', 'cls'],
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if (!args[0]) return message.channel.send({
            embed: { color: `#00f2ff`, description: 'Please enter the amount of messages to clear!' }
        })

        if (isNaN(args[0])) return message.channel.send({
            embed: { color: `#00f2ff`, description: ' Please type a real number!' }
        })

        if (args[0] > 100) return message.channel.send({
            embed: { color: `#00f2ff`, description: "You can't remove more than 100 messages!" }
        })

        if (args[0] < 1) return message.channel.send({
            embed: { color: `#00f2ff`, description: 'You have to delete at least one message!' }
        })

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}
=======
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['purge', 'cls'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord){

      const { MessageEmbed } = require("discord.js")
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You don\'t have permission to use this command').then(m => m.delete({timeout: 5000}));
        if (!message.guild.me.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('I don\'t have permission to use that command').then(m => m.delete({timeout: 5000}))
        
        let deleteAmount;
    
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!').then(m => m.delete({timeout: 5000})) }
    
        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!').then(m => m.delete({timeout: 5000}))
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        await message.channel.send(`Successfully Deleted **${deleteAmount}** Messages.`).then(m => m.delete({timeout: 5000}))

 }
}  
>>>>>>> jsmerge
