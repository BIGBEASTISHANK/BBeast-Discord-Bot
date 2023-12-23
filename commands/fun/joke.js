const Discord = require('discord.js');
const oneLinerJoke = require('one-liner-joke');

module.exports = {
    name: 'joke',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

  const getRandomJoke = oneLinerJoke.getRandomJoke();
	let tags = getRandomJoke.tags;
	tags = tags.toString();
	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('RANDOM JOKES FOR YOU')
		.setDescription(`${getRandomJoke.body} \n\nTags:${tags}`)
		.setFooter(`Requested by ${message.author.username}`);
	message.channel.send(embed);

    }
};