module.exports = {
    name: 'avatar',
    aliases: ['ava', 'av'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        let user = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s Avatar!`)
            .setImage(user.avatarURL({ size: 2048, dynamic: true }))
            .setColor('#00f2ff');
        message.channel.send(embed);

    }
};