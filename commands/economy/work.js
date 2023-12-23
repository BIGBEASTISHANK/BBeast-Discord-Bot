const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'work',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        let result = await cs.work({
            user: message.author,
            guild: message.guild,
            maxAmount: 100,
            replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic'],
            cooldown: 25 //25 seconds,

        });
        if (result.error) return message.channel.send(`You have already worked recently Try again in ${result.time}`);
        else message.channel.send(`You worked as a ${result.workType} and earned $${result.amount}.`)

    }
};