module.exports = {
    name: 'dm',
    aliases: ["MANAGE_GUILD"],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if (!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);
        if (!user)
            return message.channel.send({ embed: { color: `#00f2ff`, description: `You did not mention a user, or you gave an invalid id` } });
        if (!args.slice(1).join(" "))
            return message.channel.send({ embed: { color: `#00f2ff`, description: "You did not specify your message" } });
        user.user
            .send(args.slice(1).join(" "))
            .catch(() => message.channel.send({ embed: { color: `#00f2ff`, description: "That user could not be DMed!" } }))
            .then(() => message.channel.send({ embed: { color: `#00f2ff`, description: `Sent a message to ${user.user.tag}` } }));
    },
};