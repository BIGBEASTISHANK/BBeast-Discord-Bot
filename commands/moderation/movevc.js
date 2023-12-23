const { ownerID } = require("../../owner.json")

module.exports = {
    name: 'pullvc',
    aliases: ['pull'],
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send('Please mention a member!');
        if (!member.voice.channel) return message.channel.send('The member you mention is not in a voice channel!');
        if (!message.member.voice.channel) return message.channel.send('Please join a voice channel');
        member.voice.setChannel(message.member.voice.channel);
        message.channel.send('moved member')

    }
}