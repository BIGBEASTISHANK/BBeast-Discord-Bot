<<<<<<< HEAD
module.exports = {
    name: 'work',
    aliases: [],
    permissions: [],
    cooldown: 3600,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const mention = message.mentions.users.first() || message.author


        const bbics = Math.floor(Math.random() * (1000 - 100) + 100);

        const guildId = message.guild.id
        const userId = mention.id

        const newbbics = await economy.addbbics(guildId, userId, bbics)


        message.channel.send({ embed: { color: `#00f2ff`, description: `<@${userId}> has worked hard and earned **${bbics}**. They now have **${newbbics} BBIC(s)**!` } })
    }
}
=======
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
>>>>>>> jsmerge
