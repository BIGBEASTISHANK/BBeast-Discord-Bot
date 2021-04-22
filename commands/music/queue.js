module.exports = {
    name: 'queue',
    aliases: ['que'],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('How Use Queue command!')
        .setDescription('Just type `-play [song name]` and it will be added in queue')
        .addFields(
        )
        message.channel.send(newEmbed);
 }
}