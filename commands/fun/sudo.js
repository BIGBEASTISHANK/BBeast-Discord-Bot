const Discord = require('discord.js');

module.exports = {
    name: 'sudo',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const { sudo } = require('weky')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)
        const msg = args.slice(1).join(" ")
        if(!msg) return message.reply('What should the user say?')
        const sud = new sudo({
            message: message,
            text: msg,
            member: member,
        })
        sud.start()

    }
};
