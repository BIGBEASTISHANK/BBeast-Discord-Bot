const Levels = require('discord-xp');

module.exports = {
    name: 'xpset',
    aliases: ['xpedit'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const prefix = process.env.PREFIX;
        if (message.author.id !== message.guild.owner.id) return;

        let usage = prefix + `set @member [level, xp] [add, set, remove] <number>`;
        let expectedArgs = `❌**Expected more arguments!**\n\n\`${usage}\``;
        const mm = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!args[0]) return message.channel.send(expectedArgs);
        if (!mm) return message.channel.send(`**Member not found, check that they're still in the server!**`);
        if (!args[1]) return message.channel.send(expectedArgs);
        if (!['xp', 'level'].includes(args[1])) return message.channel.send(`**Are you editing that members XP or level?**`);

        const value = Number(args[3]);
        const LevelUser = Levels.fetch(mm.user.id, message.guild.id);
        if (!LevelUser) return message.channel.send(`**That member must be level 1 before you can edit their XP or level!**`);

        if (args[1] == 'xp') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.channel.send(`**Are you adding, setting, or removing XP from that member?**`);

            if (args[2] == 'add') {
                if (!value) return message.channel.send(`**Please give an amount of xp to add!**`);
                try {
                    await Levels.appendXp(mm.user.id, message.guild.id, value);
                    await message.channel.send(`**Successfully added \`${value}\` XP to ${mm.user.tag}!**`);
                } catch (err) {
                    await message.channel.send(`**Failed to add XP.**`);
                    console.log(err);
                };
            } else if (args[2] == 'set') {
                if (!value) return message.channel.send(`**Please specify what to set the XP to!**`);
                try {
                    await Levels.setXp(mm.user.id, message.guild.id, value);
                    await message.channel.send(`**Successfully set ${mm.user.tag}'s XP to \`${value}\`!**`);
                } catch (err) {
                    await message.channel.send(`**Failed to set XP.**`);
                    console.log(err);
                };
            } else if (args[2] == 'remove') {
                if (!value) return message.channel.send(`**Please give an amount of xp to remove!**`);
                try {
                    await Levels.subtractXp(mm.user.id, message.guild.id, value);
                    await message.channel.send(`**Successfully removed \`${value}\` XP to ${mm.user.tag}!**`);
                } catch (err) {
                    await message.channel.send(`**Failed to remove XP.**`);
                    console.log(err);
                };
            };
        } else if (args[1] == 'level') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.channel.send(`**Are you adding, setting, or removing XP from that member?**`);

            if (args[2] == 'add') {
                if (!value) return message.channel.send(`**Please give an amount of levels to add!**`);
                try {
                    await Levels.appendLevel(mm.user.id, message.guild.id, value);
                    await message.channel.send(`**Successfully added \`${value}\` levels to ${mm.user.tag}!**`);
                } catch (err) {
                    await message.channel.send(`**Failed to add levels.**`);
                    console.log(err);
                };
            } else if (args[2] == 'set') {
                if (!value) return message.channel.send(`**Please specify what to set their level to!**`);
                try {
                    await Levels.setLevel(mm.user.id, message.guild.id, value);
                    await message.channel.send(`**Successfully set ${mm.user.tag}'s level to \`${value}\`!**`);
                } catch (err) {
                    await message.channel.send(`**Failed to set level.**`);
                    console.log(err);
                };
            } else if (args[2] == 'remove') {
                if (!value) return message.channel.send(`**Please give an amount of levels to remove!**`);
                try {
                    await Levels.subtractLevel(mm.user.id, message.guild.id, value);
                    await message.channel.send(`**Successfully removed \`${value}\` levels from ${mm.user.tag}!**`);
                } catch (err) {
                    await message.channel.send(`**Failed to remove levels.**`);
                    console.log(err);
                };
            };
        };
    },
};