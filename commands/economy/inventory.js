const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const Discord = require('discord.js')

module.exports = {
    name: 'inventory',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let result = await cs.getUserItems({
        user: message.author,
        guild: message.guild,
    });
    let inv = result.inventory.slice(0,10)
    const embed = new Discord.MessageEmbed()
    .setDescription('Your Inventory!')
    for (key of inv) {
        embed.addField(`**${key.name}:**`, `Amount: ${key.amount}`)
    }
    message.channel.send(embed)

    }
};