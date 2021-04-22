module.exports = {
    name: 'deletechannel',
    aliases: ['delchnl', 'delc'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        message.channel.delete()
    }
}