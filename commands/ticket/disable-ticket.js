const { MessageEmbed } = require('discord.js')
const schema = require('../../models/ticket')

module.exports = {
    name: 'ticket-disable',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`You don't have permission to use this command`);
        await schema.findOneAndDelete({ Guild: message.guild.id })
        await message.channel.send(`**:ok_hand: Ticket Module for this server is disabled**`)
    }
}