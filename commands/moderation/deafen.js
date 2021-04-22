module.exports = {
    name: 'deafen',
    aliases: ['def'],
    permissions: ["DEAFEN_MEMBERS"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if(!args[0]) return message.channel.send({ embed: { color: `#00f2ff`, description: "Please Tag the person to deafen!" } })

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if (!member) return message.channel.send({ embed: { color: `#00f2ff`, description: "Unable to find the mentioned user in this guild." } })

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No Reason Provided"


        try {
            member.voice.setDeaf(true, reason);
            message.channel.send({ embed: { color: `#00f2ff`, description: `${member} was deafened. **Reason**: ${reason}` } })
        } catch (err) {
            console.log(err)
            message.channel.send({ embed: { color: `#00f2ff`, description: `${author} **There was an error trying to execute this command!** \n\n \`Error:\` \`\`\`js\n ${err} \`\`\`` } });
        }

    }
}