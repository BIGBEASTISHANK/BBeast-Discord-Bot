const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const Discord = require('discord.js')

module.exports = {
    name: 'removeitem',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
          if (!args[0]) return message.channel.send('Which item to remove?')
    let result = await cs.removeItem({
        guild: message.guild,
        item: parseInt(args[0])
    });
    if (result.error) {
        if (result.type == 'Invalid-Item-Number') return message.channel.send('There was a error, Please enter item number to remove.!')
        if (result.type == 'Unknown-Item') return message.channel.send('There was a error, The Item Does not exist!')
    } else message.channel.send('Done! Successfully removed the `' + result.inventory.name + '` from shop!')

    }
};