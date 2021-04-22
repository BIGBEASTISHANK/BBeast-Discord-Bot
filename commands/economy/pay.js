module.exports = {
    name: 'pay',
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const { guild, member } = message

        const target = message.mentions.users.first()
        const author = message.author
        if (!target) {
            message.channel.send({ embed: { color: `#00f2ff`, description: `${author} Please specify someone to give BBIC(s) to.` } })
            return
        }

        const bbicsToGive = args[1]
        if (isNaN(bbicsToGive)) {
            message.channel.send({ embed: { color: `#00f2ff`, description: `${author} Please provide a valid number of BBIC(s) to give.` } })
            return
        }

        const bbicsOwned = await economy.getbbics(guild.id, member.id)
        if (bbicsOwned < bbicsToGive) {
            message.channel.send({ embed: { color: `#00f2ff`, description: `${author} You do not have **${bbicsToGive}** BBIC(s)! Please check your balance.` } })
            return
        }

        const remainingbbics = await economy.addbbics(
            guild.id,
            member.id,
            bbicsToGive * -1
        )
        const newBalance = await economy.addbbics(guild.id, target.id, bbicsToGive)

        message.channel.send({
            embed: {
                color: `#00f2ff`, description:
                    `${author} have given <@${target.id}> ${bbicsToGive} BBIC(s)! Now ${target} have **${newBalance}** BBIC(s) and you have **${remainingbbics}** BBIC(s)!`
            }
        })
    }
}