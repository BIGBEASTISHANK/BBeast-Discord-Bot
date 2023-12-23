const { MessageEmbed } = require ('discord.js');
const { trueDependencies } = require('mathjs');
let Embed = new MessageEmbed()
const moment = require('moment')
moment.locale('en');
let inline = true

    let resence = true
const status = {

        online: "💚 Online",

        idle: "🌝 Idle",

        dnd: "🔴 Do Not Disturb",

        offline: "🌚 Offline/Invisible"

      };
module.exports = {
    name: 'whois',
    aliases: ['userinfo'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

            let member = message.mentions.members.first() || message.member,
            user = member.user;
            const joinDiscord = moment(user.createdAt).format('ll');
            const joinServer = moment.utc(member.joinedAt).format('ll');

            let embed = new MessageEmbed()
                .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
                .setDescription([
                    '**Roles**',
                    member.roles.cache.map(r => r).join(' **|** ')
                    ])
                    .setColor('RANDOM')
                .setThumbnail(`${user.displayAvatarURL({ dynamic:true })}`)
                .addField('**UserName:**', `${user}`)
                .addField('**Joined Discord at:**', joinDiscord, true)
                .addField('**Joined Server at:**', joinServer, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .setFooter(`ID: ${user.id}`)
                .setTimestamp();
        

                if (user.presence.activities[0]) {
                    embed.addField('**Presence**', user.presence.activities[0], true);
                    if (user.presence.activities[0].details) embed.addField('​Custom Status', user.presence.activities[0].details, true);
                    if (user.presence.activities[0].state) embed.addField('​ Custom Presence Activity', user.presence.activities[0].state, true);
                }
                embed.addField('Account type', user.bot ? 'Bot' : 'Human', true);
                // Show guild nickname
                if (member && member.nickname) embed.addField('Nickname', member.nickname, true);
                // Show user locale ( i have no idea What it is ) https://discord.js.org/#/docs/main/master/class/User?scrollTo=locale
                if (user.locale) embed.addField('Locale settings', user.locale, true);
        
                if (user.presence.clientStatus && !user.bot) {
                    if (user.presence.clientStatus.mobile) embed.addField('**Using discord on**', `📱 mobile`, true);
                    if (user.presence.clientStatus.desktop) embed.addField('**Using discord on**', `💻 desktop`,true);
                    if (user.presence.clientStatus.web) embed.addField('**Using discord on**', `☁️ website`, true);
                }
                message.channel.send({embed});
        }
}