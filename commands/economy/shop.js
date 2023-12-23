const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const Discord = require('discord.js')

module.exports = {
    name: 'shop',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let result = await cs.getShopItems({
        guild: message.guild
    });
    let inv = result.inventory;
    const embed = new Discord.MessageEmbed()
        .setDescription('Shop!')
    for (let key in inv) {
        embed.addField(`${parseInt(key) + 1} - **${inv[key].name}:**`, `Price: ${inv[key].price}`)
    }
    message.channel.send(embed)

    }
};