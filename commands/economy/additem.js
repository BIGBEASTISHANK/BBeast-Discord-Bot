const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'additem',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    message.channel.send('What should be item name?');
    let Name = await message.channel.awaitMessages(msg => msg.author.id == message.author.id, {
        max: 1
    });

    message.channel.send('What should be its price?');
    let Price = await message.channel.awaitMessages(msg => msg.author.id == message.author.id, {
        max: 1
    });
    let result = await cs.addItem({
        guild: message.guild,
        inventory: {
            name: Name.first().content,
            price: parseInt(Price.first().content)
        }
    });
    if (result.error) {
        if (result.type == 'No-Inventory-Name') return message.channel.send('There was a error, Please enter item name to removadd.!')
        if (result.type == 'Invalid-Inventory-Price') return message.channel.send('There was a error, invalid price!')
        if (result.type == 'No-Inventory-Price') return message.channel.send('There was a error, You didnt specify price!')
        if (result.type == 'No-Inventory') return message.channel.send('There was a error, No data recieved!')
    } else message.channel.send('Done! Successfully added `' + Name.first().content + '` to the shop!')

    }
}