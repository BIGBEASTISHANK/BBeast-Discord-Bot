const { Client, Message, MessageEmbed } = require('discord.js');
const { FastType } = require("weky")
const txtgen = require('txtgen');

module.exports = {
    name: 'fast-type',
    aliases: ['type'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

              const sentence = txtgen.sentence();
        const game = new FastType({
            message: message,
            winMessage: "Congrats you won",
            sentence: sentence,
            loseMessage: "You lost ;(",
            time: 50000,
            startMessage: "Good Luck Hope you win!"
        })

    game.start()
    }

};