<<<<<<< HEAD
const { MessageEmbed } = require('discord.js');
=======
const { MessageEmbed } = require ('discord.js');
>>>>>>> jsmerge
const moment = require('moment')
moment.locale('en');
module.exports = {
    name: 'platform',
    aliases: ['pf'],
    permissions: [],
    cooldown: 0,
    description: 'Information of the user.',
<<<<<<< HEAD
    execute(client, message, cmd, args, Discord) {

        let member = message.mentions.members.first() || message.member,
            user = member.user;
        if (user.bot) {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please mention a human account!' } })
        }
        let embed = new MessageEmbed()
            .setTitle('Platform')
            .setColor('#00f2ff')

        if (user.presence.clientStatus && !user.bot) {
            if (user.presence.clientStatus.mobile) embed.addField('**Using discord on**', `:mobile_phone: Mobile App`, true);
            if (user.presence.clientStatus.desktop) embed.addField('**Using discord on**', `:desktop:  Desktop App`, true);
            if (user.presence.clientStatus.web) embed.addField('**Using discord on**', `:globe_with_meridians:  Desktop Web`, true);
        } else {
            embed.setDescription('The user is either invisible or offline.')
        }
        message.channel.send({ embed });
    }
=======
    execute(client, message, cmd, args, Discord){

            let member = message.mentions.members.first() || message.member,
            user = member.user;
            if (user.bot){
                message.channel.send({
                    embed : { description: 'Please mention a human account!', color: 'RED' }
            })
        }
            let embed = new MessageEmbed()
            .setTitle('Platform')
            .setColor('RANDOM')
    
              if (user.presence.clientStatus && !user.bot) {
                    if (user.presence.clientStatus.mobile) embed.addField('**Using discord on**', `:mobile_phone: Mobile App`, true);
                    if (user.presence.clientStatus.desktop) embed.addField('**Using discord on**', `:desktop:  Desktop App`,true);
                    if (user.presence.clientStatus.web) embed.addField('**Using discord on**', `:globe_with_meridians:  Desktop Web`, true);
                } else {
                    embed.setDescription('The user is either invisible or offline.')
                }
                message.channel.send({embed});
        }
>>>>>>> jsmerge
}