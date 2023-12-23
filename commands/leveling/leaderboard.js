const Discord = require('discord.js');
const Levels = require('discord-xp');
const bot = new Discord.Client();

module.exports = {
    name: "level-leaderboard",
    aliases: ['lvlb'],
    permissions: [],
    cooldown: 0,
    description: "..",

    async execute(client, message, cmd, args, Discord) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

        if (rawLeaderboard.length < 1) return message.reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true); // We process the leaderboard.

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.

        const embed =  new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("LEADERBOARD")
        .setDescription(lb.join("\n\n"))

        message.channel.send(embed);
    }
}