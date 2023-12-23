const CurrencySystem = require("currency-system");
const Discord = require("discord.js");
const cs = new CurrencySystem;

module.exports = {
    name: 'global-lb',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    let data = await cs.globalLeaderboard();
    if (data.length < 1) return message.channel.send("Nobody's in Global leaderboard yet.");
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