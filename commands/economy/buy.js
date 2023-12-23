const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'buy',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let thing = args[0]
    if (!thing) return message.channel.send('Please provide item number')
    if (isNaN(thing)) return message.channel.send('Please provide valid item number')
    message.channel.send(`Please type \`yes\` to confirm paying`)
    let col = await message.channel.awaitMessages(msg => msg.author.id == message.author.id, {
        max: 1
    });
    if (col.first().content.toLowerCase() === 'yes') {

        let result = await cs.buy({
            user: message.author,
            guild: message.guild,
            item: parseInt(args[0])
        });
        if (result.error) {
            if (result.type === 'No-Item') return message.channel.send('Please provide valid item number');
            if (result.type === 'Invalid-Item') return message.channel.send('item does not exists');
            if (result.type === 'low-money') return message.channel.send(`**You don't have enough balance to buy this item!**`);
        } else return message.channel.send(`**Successfully bought  \`${result.inventory.name}\` for $${result.inventory.price}**`)



    } else message.channel.send('**Purchase Cancelled!**')

    }
};