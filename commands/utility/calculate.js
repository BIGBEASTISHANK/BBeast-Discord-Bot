const math = require ('mathjs')

module.exports = {
    name: 'calculate',
    aliases: ['cal'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if (!args[0]) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide a question' } });

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide a **valid** question' } })
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#00f2ff')
            .setTitle('Calculator')
            .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);
    }
}