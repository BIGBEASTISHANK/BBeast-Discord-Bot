const Discord = require('discord.js')
require('dotenv').config();
const prefix = process.env.PREFIX;

module.exports = {
    name: 'help',
    aliases: ['h'],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00f2ff')
            .setTitle(`Guild Prefix: \`${prefix}\``)
            .setAuthor('BIG Beast Help', 'https://images.discordapp.net/avatars/709984874924081174/dcb255eea70abcc9d6014aac2564e7a0.png?size=128', '')
            .setDescription('**<:invite:822410792804417567> [ Invite](https://discord.com/oauth2/authorize?client_id=709984874924081174&scope=bot&permissions=8)** | **<:support:822410788773691392> [ Support Server](https://discord.gg/XfngbaaG2r)** |  **<:sourecode:822410789122080768> [ Source Code](https://github.com/BIGBEASTISHANK/discord-bot-source-code)** | **<:website:822426577899618389> [ Website](https://bigbeastishank.github.io)**')
            .setThumbnail('https://images.discordapp.net/avatars/709984874924081174/dcb255eea70abcc9d6014aac2564e7a0.png?size=128')
            .addFields(
                { name: 'General', value: '`suggestions` | `poll`' },
                { name: 'Moderation', value: '`clear` | `Kick` | `Ban` | `clearchannel` | `invite`| `createtextchannel` | `createvoicechannel` | `deletechannel` | `changenickname`' },
                { name: 'Fun', value: '`meme`' },
                { name: 'Music', value: '`play` | `stop` | `queue` | `skip`' },
                { name: 'Utility', value: '`ping` |`avatars`' },
                { name: 'Owner', value: '`server` | `eval`' }
            )
            .setFooter('More Command soon')
        message.channel.send(newEmbed);
    }
}