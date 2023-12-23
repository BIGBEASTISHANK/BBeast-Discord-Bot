module.exports = {
    name: 'test6',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      const { Snake } = require('weky');
new Snake({
    message: message,
    embed: {
    title: 'Snake', //embed title
    color: "RANDOM", //embed color
    gameOverTitle: "Game Over", //game over embed title
    },
    emojis: {
      empty: '⬛', //zone emoji
      snakeBody: ':green_square:', //snake
      food: ':shallow_pan_of_food: ', //food emoji
      //control
      up: '⬆️', 
      right: '⬅️',
      down: '⬇️',
      left: '➡️',
      },
    }).start()

    }
};