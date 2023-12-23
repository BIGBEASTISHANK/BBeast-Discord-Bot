module.exports = {
    name: 'confess',
    aliases: [],
    permissions: [],
    cooldown: 5,
    async execute(client, message, cmd, args, Discord) {

        const { content } = message
        const text = content
        const split = text.split(' ')
        const toconfess = args.join(' ')

        if (split.length < 2) {
            message.channel.send({ embed: { color: `#DC143C`, description: 'Plese tell somthing to confess!' } })
            setTimeout(async function () {
                await message.channel.bulkDelete(2)
            }, 2000);
            return;
        } else {
            await message.channel.bulkDelete(1)
            const confess = new Discord.MessageEmbed()
                .setColor(`	#DC143C`)
                .setTitle('Anonymous Confession!')
                .setDescription(toconfess)
                .setTimestamp()

            message.channel.send(confess)
        }
    }
}