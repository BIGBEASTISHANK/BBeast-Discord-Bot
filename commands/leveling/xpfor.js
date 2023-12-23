const Levels = require('discord-xp');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: `xpFor`,
    aliases: ['xp'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        let zero = args.join(" ");
        if(!zero) return message.channel.send(`**Please provide a number to check XP for!**`);
        if(isNaN(zero)) return message.channel.send(`**That needs to be a number!**`);

        const round = Math.round(zero);
        const num = parseInt(round);

        const level = await Levels.fetch(message.author.id, message.guild.id);

        const xpfornum = Levels.xpFor(num);

        const xpForEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`*️⃣ XP required for Level ${num}:`)
        .setDescription(`**${level.xp}** / **${xpfornum}**`);

        await message.channel.send(xpForEmbed);
    },
};