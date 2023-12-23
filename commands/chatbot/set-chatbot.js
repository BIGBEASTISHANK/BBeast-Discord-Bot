const { MessageEmbed } = require("discord.js");
const Schema = require("../../models/set-chatBot");
const { confirmation } = require("reconlx");

module.exports = {
    name: 'set-chatbot',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        const channell = message.mentions.channels.first();
        if(!channell) return message.channel.send(new MessageEmbed().setAuthor(`Hey, ${message.author.username}`).setTitle("This is a wrong syntax").addFields({name: "Mention the channel", value: `d!set-chatbot ${message.channel}`}).setTimestamp(Date.now()).setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true })).setColor('RANDOM'));

        Schema.findOne({ guild: message.guild.id}, async(err, data) => {
            if(data){
                message.channel.send("There is already a chatbot channel do u want to change it?").then(async (msg) => {
                    const emoji = await confirmation(msg, message.author, ["✅", "❌"], 30000);
                    if(emoji === '✅') {
                        message.channel.send(`${channell} has been set as the chatbot channel`);
                        data.delete()
                        new Schema({ 
                            guild: message.guild.id,
                            channel: channell.id
                        }).save();
                        
                    }
                    if(emoji === '❌') {
                        msg.edit('Cancelled!')
                    }
                });
            } 
            if(!data) {
                new Schema({
                guild: message.guild.id,
                channel: channell.id,
            }).save();
            
            message.channel.send(`${channell} has been set as the chatbot channel`);
            }     
        });
    }
} 