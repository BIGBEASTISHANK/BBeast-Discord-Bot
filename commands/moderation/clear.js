module.exports = {
    name: 'clear',
    aliases: ['purge', 'cls'],
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("MANAGE_MESSAGES")){
        if (!args[0]) return message.channel.send({
            embed: { color: `#00f2ff`, description: 'Please enter the amount of messages to clear!'} 
        })

        if(isNaN(args[0])) return message.channel.send({
            embed: { color: `#00f2ff`, description: ' Please type a real number!'} 
        })

        if(args[0] > 100) return message.channel.send({
            embed: { color: `#00f2ff`, description: "You can't remove more than 100 messages!"} 
        })
        
        if(args[0] < 1) return message.channel.send({
            embed: { color: `#00f2ff`, description: 'You have to delete at least one message!'} 
        })

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });

       } else {
           message.channel.send({
            embed: { color: `#00f2ff`, description: 'You are missing `MANAGE MASSAGES` permission'} 
        })
       }

 }
}  