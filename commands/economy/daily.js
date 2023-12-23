const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'daily',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let result = await cs.daily({
        user: message.author,
        guild: message.guild,
        amount: 100,

    });
    if (result.error) return message.channel.send(`You have used daily recently Try again in ${result.time}`);
    else message.channel.send(`You have earned $${result.amount}.`)

    }
};