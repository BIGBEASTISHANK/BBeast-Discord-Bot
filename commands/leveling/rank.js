const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require('canvacord');

module.exports = {
    name: "level",
    aliases: ['lvl', 'rank'],
    permissions: [],
    cooldown: 0,
    description: "..",

    async execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first() || message.author; // Grab the target.

        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.

        const neededXp = Levels.xpFor(parseInt(user.level) + 1)

        const img = "https://i.imgur.com/8oAzl0j.png"; //700px x 250px

        const rank = new canvacord.Rank()
            .setAvatar(target.displayAvatarURL({ dynamic: true, format: 'png' }))
            .setBackground("IMAGE", img)
            .setRank(1, 'RANK', false)
            .setLevel(user.level)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(target.presence.status)
            .setProgressBar("#f47fff", "COLOR")
            .setUsername(target.username)
            .setDiscriminator(target.discriminator);

        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
    }
}