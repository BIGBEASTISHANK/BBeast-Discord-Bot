module.exports = {
    name: 'heal',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
 var images = [
 "https://media.discordapp.net/attachments/710349584773414914/812531053586546708/unknown.png?width=440&height=291",
 "https://media.discordapp.net/attachments/710349584773414914/812232959654363156/unknown.png?width=440&height=214",
 "https://cdn.discordapp.com/attachments/710349584773414914/812545657981108234/unknown.png",
  "https://cdn.discordapp.com/attachments/710349584773414914/812545893433606144/unknown.png",
"https://cdn.discordapp.com/attachments/710349584773414914/812546204038463548/e81flf21b5f51.png",
  "https://cdn.discordapp.com/attachments/710349584773414914/812547318347595776/unknown.png",
"https://cdn.discordapp.com/attachments/710349584773414914/812593294101184512/unknown.png"
 ];
 var image = Math.floor(Math.random() * images.length);
 message.channel.send(`${images[image]}`);

}
}