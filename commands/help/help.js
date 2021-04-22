require('dotenv').config();
const prefix = process.env.PREFIX;

module.exports = {
    name: 'help',
    aliases: ['h'],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00f2ff')
            .setTitle(`Guild Prefix: \`${prefix}\``)
            .setAuthor('BIG Beast Help', 'https://images.discordapp.net/avatars/709984874924081174/dcb255eea70abcc9d6014aac2564e7a0.png?size=128', '')
            .setDescription('**<:invite:822410792804417567> [ Invite](https://top.gg/bot/709984874924081174/)** | **<:support:822410788773691392> [ Support Server](https://discord.gg/XfngbaaG2r)** |  **<:sourecode:822410789122080768> [ Source Code](https://github.com/BIGBEASTISHANK/discord-bot-source-code)** | **<:vote:826728613663342642> [ Vote](https://top.gg/bot/709984874924081174/vote)**')
            .setThumbnail('https://images.discordapp.net/avatars/709984874924081174/dcb255eea70abcc9d6014aac2564e7a0.png?size=128')
            .addFields(
                { name: '❯ General', value: '`suggestions` | `query` | `weather` | `covid` | `confess` | `wiki` | `imdb`' },
                { name: '❯ Moderation', value: '`clear` | `Kick` | `Ban` | `clearchannel` | `invite`| `createtextchannel` | `createvoicechannel` | `deletechannel` | `changenickname` | `warn` | `listwarn` | `slowmode` | `deafen` | `undeafen` | `roleinfo`' },
                { name: '❯ Fun', value: '`meme` | `ascii` | `pp` | `8ball` | `tictactoe`' },
                { name: '❯ Music', value: '`play` | `stop` | `queue` | `skip` | `lyrics`' },
                { name: '❯ Image', value: '`bed` | `beautiful` | `affect`' },
                { name: '❯ Economy', value: '`balance` | `addbalance` | `pay` | `work` | `daily` | `playgame`' },
                { name: '❯ Utility', value: '`ping` | `avatars` | `uptime` | `embedmsg` | `calculator` | `platform` | `whois`' },
                { name: '❯ Owner', value: '`botserverlist` | `eval`' }
            )
            .setTimestamp()
        message.channel.send(newEmbed);
    }
}