const { MessageEmbed } = require("discord.js"); //for embed functionality

module.exports = {
    name: 'dice',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const dice = [1, 2, 3, 4, 5, 6];
        const firstDie = dice[Math.floor(Math.random()*dice.length)];
        const secondDie = dice[Math.floor(Math.random()*dice.length)];

        const embed = new MessageEmbed()  
        .setColor('RANDOM') 
        .setTimestamp()

        if (firstDie === 1 && secondDie === 1) {
            embed
            .setTitle("__**SNAKE EYES**__") 
            .setDescription("YOU GOT SNAKE EYES!")
            .attachFiles(["./assets/snakeeyes.jpg"])
            .setImage("attachments://snakeeyes.jpg"); 
        } else {
            embed
            .setTitle("Here's your roll!") 
            .addField("__**First Die**__", firstDie, true)
            .addField("__**Second Die**__", secondDie, true);  
        }
        message.channel.send(embed);
    }
};