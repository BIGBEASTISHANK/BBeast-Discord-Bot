module.exports = {
    name: 'embedmsg',
    aliases: ['embmsg'],
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        require('dotenv').config();
        const prefix = process.env.PREFIX;

        const result = args.join(' ').split('|');

        const msgembedcolor = result[0];
        const msgtitle = result[1];
        const msgdescription = result[2];
        const msgfooter = result[3];

        if (!msgembedcolor) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give valid messages, Ex: **\`${prefix}embedmsg\` | \`colorhexcode\` | \`Title\` | \`description\` | \`footer\`**` } });
        if (!msgtitle) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give a **Title**` } });
        if (!msgdescription) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give a **Description**` } });
        if (!msgfooter) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give a **Footer**` } });

        message.channel.bulkDelete(1);

        const embedmsg = new Discord.MessageEmbed()
            .setColor(`${msgembedcolor}`)
            .setTitle(msgtitle)
            .setDescription(msgdescription)
            .setFooter(msgfooter)
        message.channel.send(embedmsg);
    }
}