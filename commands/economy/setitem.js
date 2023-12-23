const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const Discord = require('discord.js')

module.exports = {
    name: 'sellitem',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          cs.setItems({
        guild: message.guild,
        shop: [{
            name: 'Watch',
            price: 20
        }, {
            name: 'Rolex',
            price: 1230
        }]
    }).then(console.log)

    }
};