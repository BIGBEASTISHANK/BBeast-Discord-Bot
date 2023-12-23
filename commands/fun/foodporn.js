const fetch = require('node-fetch'),
{ MessageEmbed } = require('discord.js');

module.exports = {
    name: 'foodporn',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
      		const data = await fetch(
			'https://www.reddit.com/r/food/random/.json',
		).then((res) => res.json());

		const children = data[0].data.children[0];
		const permaLink = children.data.permalink;
		const url = `https://reddit.com${permaLink}`;
		const image = children.data.url;
		const title = children.data.title;
		const upvotes = children.data.ups;
		const comments = children.data.num_comments;

		const embed = new MessageEmbed(message)
			.setTitle(`${title}`)
			.setURL(url)
			.setImage(image)
			.setFooter(`👍: ${upvotes} -  💬: ${comments}`);

		message.channel.send({ embed });
	}
};