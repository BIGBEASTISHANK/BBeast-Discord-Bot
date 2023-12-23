module.exports = {
    name: 'clearchannel',
    aliases: ['cc', 'nuke'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
        })

    }
}