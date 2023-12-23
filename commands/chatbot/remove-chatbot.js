const { MessageEmbed } = require("discord.js");
const Schema = require("../../models/set-chatBot");
const { confirmation } = require("reconlx")

module.exports = {
    name: 'remove-chatbot',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        message.channel.send(new MessageEmbed().setTitle("Are you sure you want to remove chatbot from your server?")
        .setDescription("According to your suggestions, you guys want us to make a command that removes the chatbot data from a channel! \n if you want to remove the data please Click on ✅ or ❌ if you want to keep it")).then(async (msg) => {
            const emoji = await confirmation(msg, message.author, ["✅", '❌'], 30000);
            if(emoji === '✅') {
                Schema.findOne({ guild: message.guild.id}, async(err, data) => {
                    if(data) data.delete();
                    if(!data) return message.channel.send("You didn't setup the chatbot");
                    await msg.edit("Chatbot data has been succefully removed!")
                });
            }
            if(emoji === '❌') {
                message.channel.send("Cancelled!")
                await msg.delete();
            }
        })    
    }
}