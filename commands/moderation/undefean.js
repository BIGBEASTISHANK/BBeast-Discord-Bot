  
module.exports = {
    name: 'undeafen',
    aliases: ['undef'],
    permissions: ["DEAFEN_MEMBERS"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if(!args[0]) return message.channel.send({ embed: { color: `RANDOM`, description: "Please Tag the person to undeafen!" } })

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if (!member) return message.channel.send({ embed: { color: `RANDOM`, description: "Unable to find the mentioned user in this guild." } })


        try {
            member.voice.setDeaf(false);
            message.channel.send({ embed: { color: `RANDOM`, description: `${member} was undeafened. Now be nice.` } })
        } catch (err) {
            console.log(err)
            message.channel.send({ embed: { color: `RANDOM`, description: `${author} **There was an error trying to execute this command!** \n\n \`Error:\` \`\`\`js\n ${err} \`\`\`` } });
        }

    }
}