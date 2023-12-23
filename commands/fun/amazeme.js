const discord = require("discord.js");
const got = require("got");

module.exports = {
    name: "amazeme",
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord){

        got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var amazeme = content[0].data.children[0].data.url;
        let wow = new discord.MessageEmbed()
        .setDescription(`**` + title + `**`)
        .setImage(amazeme)
        .setColor('#DC143C')
        message.channel.send(wow)
    }).catch(console.error);

    }
};