const Discord = require('discord.js');
const urban = require('urban');

module.exports = {
    name: 'urban',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

	const saymessage = args.join(' ');
	const trollface = urban(saymessage);
	trollface.first(function(json) {
		const m = new Discord.MessageEmbed()
			.setTitle(`Definition for ${saymessage}`)
			.setDescription('**' + saymessage + '**: ' + json.definition + '\n\n' + json.example + '\n Go to ' + json.permalink + ' for more information')
			.setColor('RANDOM');
		try{message.channel.send(m);}
		catch(error) {message.channel.send('Word not found');}
	});
}
};