const weather = require('weather-js');

module.exports = {
    name: 'weather',
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        weather.find({ search: args.join(" "), degreeType: 'C' }, function (error, result) {
            if (!args[0]) return message.channel.send({ embed: { color: `#DC143C`, description: 'Please specify a location' } })

            if (result === undefined || result.length === 0) returnmessage.channel.send({ embed: { color: `#DC143C`, description: `**Invalid** location! Give a place or state!` } });

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setColor('#DC143C')
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Celsius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)


            message.channel.send(weatherinfo)
        })
    }
}