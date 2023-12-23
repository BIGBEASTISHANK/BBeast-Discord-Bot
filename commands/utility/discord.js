
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'discord',
  aliases: [''],
  permissions: [],
  cooldown: 0,
  async execute(client, message, cmd, args, Discord) {

    const embed = new MessageEmbed()
      .setTitle('Important Discord Links')
      .setColor('RANDOM')
      .addField('Policies', '[`Terms`](https://discord.com/terms), [`Privacy`](https://discord.com/privacy), [`Guidelines`](https://discord.com/guidelines), [`Acknowledgements`](https://discord.com/acknowledgements), [`Licenses`](https://discord.com/licenses)')
      .addField('Resources', '[`Support`](https://support.discord.com/hc/en-us), [`Safety`](https://discord.com/safety), [`Blog`](https://blog.discord.com/), [`Feedback`](https://feedback.discord.com/), [`Partners`](https://discord.com/partners), [`Verification`](https://discord.com/verification), [`Developers`](https://discord.com/developers/docs), [`StreamKit`](https://discord.com/streamkit), [`Open Source`](https://discord.com/open-source), [`Security`](https://discord.com/security), [`Moderation`](https://discord.com/moderation)')
      .addField('Company', '[`About`](https://discord.com/company), [`Jobs`](https://discord.com/jobs), [`Branding`](https://discord.com/branding), [`Newsroom`](https://discord.com/newsroom), [`Store`](https://discordmerch.com/)')
      .addField('Product', '[`Download`](https://discord.com/download), [`Why Discord`](https://discord.com/why-discord-is-different), [`Inspiration`](https://discord.com/inspiration), [`College`](https://discord.com/college), [`Nitro`](https://discord.com/nitro), [`Status`](https://status.discord.com/)');
    message.channel.send(embed)


  }
}