module.exports = {
    name: 'avatars',
    execute(client, message, cmd, args, Discord) {
        message.channel.send(message.author.displayAvatarURL());
        message.channel.send({ embed: { color: `#00f2ff`, description: message.author.displayAvatarURL() } });
    }
}