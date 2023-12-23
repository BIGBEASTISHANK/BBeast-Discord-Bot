const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'balance',
    aliases: ['bal'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else if (!args[0]) {
        user = message.author;
    }

    let result = await cs.balance({
        user: user,
        guild: message.guild
    });
    message.channel.send({embed:{ color: 'RANDOM', description: `${user.tag}, \n have $${result.wallet} in his wallet and $${result.bank} in there bank.`}});

    }
};