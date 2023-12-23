<<<<<<< HEAD
module.exports = {
    name: 'daily',
    aliases: [],
    permissions: [],
    cooldown: 86400,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const mention = message.mentions.users.first() || message.author


        const bbics = 50

        const guildId = message.guild.id
        const userId = mention.id

        const newbbics = await economy.addbbics(guildId, userId, bbics)


        message.channel.send({ embed: { color: `#00f2ff`, description: `<@${userId}> has earned a daily wages of **${bbics}**, He now has **${newbbics}**!` } })
    }
}
=======
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
>>>>>>> jsmerge
