const fetch = require('node-fetch');
require('dotenv').config();
const prefix = process.env.PREFIX

module.exports = {
    name: 'covid',
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        countries = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
            .setTitle('Missing arguments')
            .setColor('#DC143C')
            .setDescription(`You are missing some args (ex: ${prefix}covid all || ${prefix}covid India)`)
            .setTimestamp()

        if (!args[0]) return message.channel.send(noArgs);

        if (args[0] === "all") {
            fetch(`https://covid19.mathdro.id/api`)
                .then(response => response.json())
                .then(data => {
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new Discord.MessageEmbed()
                        .setTitle(`Worldwide COVID-19 Stats :map:`)
                        .setColor('#DC143C')
                        .addField('Confirmed Cases', confirmed)
                        .addField('Recovered', recovered)
                        .addField('Deaths', deaths)

                    message.channel.send(embed)
                })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
                .then(response => response.json())
                .then(data => {
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new Discord.MessageEmbed()
                        .setTitle(`COVID-19 Stats for **${countries}**`)
                        .setColor('#DC143C')                        
                        .addField('Confirmed Cases', confirmed)
                        .addField('Recovered', recovered)
                        .addField('Deaths', deaths)

                    message.channel.send(embed)
                }).catch(e => {
                    return message.channel.send('Invalid country provided')
                })
        }
    }
}