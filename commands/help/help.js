const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'help',
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00f2ff')
            .setTitle('Guild Prefix: `-`')
            .setAuthor('BIG Beast Help', 'https://images.discordapp.net/avatars/709984874924081174/dcb255eea70abcc9d6014aac2564e7a0.png?size=128', '')
            .setDescription("**<:invite:822410792804417567> [ Invite](https://discord.com/oauth2/authorize?client_id=709984874924081174&scope=bot&permissions=1345473623)** | **<:support:822410788773691392> [ Support Server](https://discord.gg/W9nmeZ2Bse)** |  **<:sourecode:822410789122080768> [ Source Code](https://github.com/BIGBEASTISHANK/discord-bot-source-code)** | **<:website:822426577899618389> [ Website](https://bigbeastishank.github.io)**")
            .setThumbnail('https://images.discordapp.net/avatars/709984874924081174/dcb255eea70abcc9d6014aac2564e7a0.png?size=128')
            .addFields(
                { name: 'General', value: '`suggestions` | `poll` | `createtextchannel` | `createvoicechannel`' },
                { name: 'Moderation', value: '`clear` | `Kick` | `Ban` | `clearchannel` | `invitetrack`' },
                { name: 'Fun', value: '`meme` | `calculator`' },
                { name: 'Music', value: '`play` | `stop` | `queue` | `skip`' },
                { name: 'Utility', value: '`ping` | `serverinfo` | `invitetrack`' }
            )
            .setFooter('More Command soon')
        message.channel.send(newEmbed);
    }
}