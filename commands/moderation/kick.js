module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("KICK_MEMBERS")){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send({
                embed: { color: `#00f2ff`, description: `${memberTarget} have been kicked`} 
            })
        }else{
            message.channel.send({
                embed: { color: `#00f2ff`, description: 'Please enter the name whome to kick'} 
            })
        }
    } else {
        message.channel.send({
            embed: { color: `#00f2ff`, description: 'You are missing `KICK MEMBER` permission'} 
        })
    }
    }
}