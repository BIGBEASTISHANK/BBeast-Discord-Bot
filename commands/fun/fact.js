const axios = require('axios');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'fact',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      	if (!args[0]) {
		const { body } = await superagent
			.get('https://nekos.life/api/v2/fact');

		const factembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Here\'s your fact!')
			.setDescription(body.fact + '\n ...and that\'s a fact!')
			.setFooter('Spitting faxx!');
		message.channel.send(factembed);
	}
	else if (args[0] === 'cat') {
		axios.get(`https://api.monke.vip/facts/cat?key=${process.env.monkedev}`)
			.then(function(response) {
				const catfactembed = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle('Here\'s your cat fact!')
					.setDescription(response.data.fact + '\n ...and that\'s a fact!')
					.setFooter('Spitting faxx!');
				message.channel.send(catfactembed);
			})
			.catch(function(error) {
				message.channel.send('❌**Error:** ' + error);
			});
	}
	else if (args[0] === 'dog') {
		axios.get('https://api.monke.vip/facts/dog?key=xRbAMC0IZk2ik4cnssQHejIpj')
			.then(function(response) {
				const dogfactembed = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle('Here\'s your dog fact!')
					.setDescription(response.data.fact + '\n ...and that\'s a fact!')
					.setFooter('Spitting faxx!');
				message.channel.send(dogfactembed);
			})
			.catch(function(error) {
				message.channel.send('❌**Error:** ' + error);
			});
	}
	else if (args[0] === 'monke' || args[0] === 'monkey') {
		axios.get('https://api.monke.vip/facts/monkey?key=xRbAMC0IZk2ik4cnssQHejIpj')
			.then(function(response) {
				const monkefactembed = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle('Here\'s your monkey fact!')
					.setDescription(response.data.fact + '\n ...and that\'s a fact!')
					.setFooter('Spitting faxx!');
				message.channel.send(monkefactembed);
			})
			.catch(function(error) {
				message.channel.send('❌**Error:** ' + error);
			});
	}

    }
};