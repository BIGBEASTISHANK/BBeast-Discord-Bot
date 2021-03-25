module.exports = {
    name: 'deletechannel',
    aliases: ['delchnl', 'delc'],
    execute(client, message, cmd, args, discord) {
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.delete()
        }else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'You are missing `MANAGE CHANNELS` permission'}})
        }
    }
}