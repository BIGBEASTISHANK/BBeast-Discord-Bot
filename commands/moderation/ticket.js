module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(client, message, cmd, args, Discord) {

        const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);

        const categoryId = message.channel.parentID
        channel.setParent(categoryId)

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
        });

        const reactionMessage = await channel.send({ embed: { color: `RANDOM`, description: "Thank you for contacting support!" } });

        try {
            await reactionMessage.react("🔒");
            await reactionMessage.react("⛔");
        } catch (err) {
            channel.send({ embed: { color: `RANDOM`, description: "Error sending emojis!" } });
            throw err;
        }

        const collector = reactionMessage.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("MANAGE_MESSAGES"),
            { dispose: true }
        );

        collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
                case "🔒":
                    channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
                    break;
                case "⛔":
                    channel.send({ embed: { color: `RANDOM`, description: "Deleting this channel in 5 seconds!" } });
                    setTimeout(() => channel.delete(), 5000);
                    break;
            }
        });

        message.channel
            .send({ embed: { color: `RANDOM`, description: `We will be right with you! ${channel}` } })
            .then((msg) => {
                setTimeout(() => msg.delete(), 7000);
                setTimeout(() => message.delete(), 3000);
            })
            .catch((err) => {
                throw err;
            });
    },
};