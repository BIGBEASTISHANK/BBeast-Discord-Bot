const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'clyde',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    const text = args.join(' ');

	if (!text) {
		return message.channel.send('**Enter Text**');
	}

	const m = await message.channel.send('<a:loadingonline:787905402603438100>');
	try {
		const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
		const json = await res.json();
		const attachment = new Discord.MessageAttachment(json.message, 'clyde.png');
		message.channel.send(attachment);
		m.delete({ timeout: 5000 });
	}
	catch (e) {
		m.edit(e.message);
	}

    }
};