const Discord = require('discord.js');

module.exports = {
    name: 'suffle-guess',
    aliases: ['shuffleguess'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

var randomWords = require('random-words');
const word = randomWords();

const { ShuffleGuess } = require('weky');
const game = new ShuffleGuess({
              message: message,
              word: word, // or a simple word
              winMessage: "GG you won!", // message sent when user's message matches with the word
              colorReshuffleButton: 'green', // color of the reshuffle button (regen)
              messageReshuffleButton: 'reshuffle', // text of the reshuffle button (regen)
              colorCancelButton: 'red', // color of the cancel button (exit, quit, stop)
              messageCancelButton: 'cancel', // text of the cancel button
              client: client
});
game.start();

    }
};
