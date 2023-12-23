
const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    aliases: [],
    permissions: [],
    cooldown: 0,

    async execute(client, message, cmd, args, Discord) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("RANDOM")

        message.channel.send(howgayembed);
    }
}