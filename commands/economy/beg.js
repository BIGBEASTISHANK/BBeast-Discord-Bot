const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'beg',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let result = await cs.beg({
        user: message.author,
        guild: message.guild,
        minAmount: 100,
        maxAmount: 400

    });
    if (result.error) return message.channel.send(`You have begged recently Try again in ${result.time}`);
    else message.channel.send(`You have earned $${result.amount}.`)

    }
};