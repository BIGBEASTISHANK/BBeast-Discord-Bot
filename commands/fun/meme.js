<<<<<<< HEAD
const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send({
                    embed: { color: `#00f2ff`, description: 'Happy now :)' }
                })
                const memeEmbed = new Discord.MessageEmbed()
                    .setColor('#00f2ff')
                    .setTitle(`${json.title}`)
                    .setImage(json.url)
                    .setURL(json.postLink)
                message.channel.send(memeEmbed);

            });
    }
}
=======
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  aliases: [],
    permissions: [],
    cooldown: 0,
  async execute(client, message, cmd, args, Discord) {
    const data = await fetch(
      "https://www.reddit.com/r/memes/random/.json"
    ).then((res) => res.json());

    const children = data[0].data.children[0];
    const permaLink = children.data.permalink;
    const url = `https://reddit.com${permaLink}`;
    const image = children.data.url;
    const title = children.data.title;
    const upvotes = children.data.ups;
    const comments = children.data.num_comments;

    const embed = new MessageEmbed()
      .setColor('#DC143C')
      .setTitle(`${title}`)
      .setURL(url)
      .setImage(image)
      .setFooter(`👍 ${upvotes} | 💬 ${comments}`);

    message.channel.send({ embed });
  },
};
>>>>>>> jsmerge
