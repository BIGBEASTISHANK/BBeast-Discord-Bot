const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const Discord = require("discord.js");

module.exports = {
    name: 'bal-leaderboard',
    aliases: ['ballb'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    let data = await cs.leaderboard(message.guild.id);
    if (data.length < 1) return message.channel.send("Nobody's in leaderboard yet.");
    const msg = new Discord.MessageEmbed();
    let pos = 0;
    // This is to get First 10 Users )
    data.slice(0, 10).map(e => {
        pos++
        if (!client.users.cache.get(e.userID)) return;
        msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** - Bank: **${e.bank}**`, true);
    });

    message.channel.send(msg).catch();

    }
};