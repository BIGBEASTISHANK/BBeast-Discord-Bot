<<<<<<< HEAD
require('dotenv').config();
const prefix = process.env.PREFIX;

module.exports = {
    name: 'help',
    aliases: ['h'],
=======
const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'help',
>>>>>>> jsmerge
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
<<<<<<< HEAD
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
=======
            .setColor('RANDOM')
            .setTitle('Guild Prefix: `d!`')
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setDescription('**:tools: [ Support Server](https://discord.gg/bVdRg2RHFS)**')
            .setThumbnail(message.guild.iconURL({ dynamic: true })) 
            .addFields(
                { name: ':compression: General', value: '`suggestions` | `weather` | `covid` | `confess`' },
                { name: ':tickets: Moderation', value: '`purge` | `Kick` | `Ban` | `clearchannel` | `invitetrack` | `nickname` | `warn` | `warnings` | `unwarn` | `createtextchannel` | `createvoicechanne` | `deafen` | `undeafen` | `slowmode` | `lock/unlock` | `roleadd/roledel/roleinfo` | `lockdown on/off` | `pullvc` | `mute` | `unmute` | `voicekick` | `say`' },
                { name: ':hugging: Fun', value: '`meme` | `ascii` | `amazeme` | `minecraft` | `pp` | `wallpaper` | `pokemon` | `joke` | `sudo` | `tWeet` | `dare` | `truth` | `joke` | `fact` | `binary`' },
                { name: ':stars: Image', value: '`shit` | `slap` | `spank` | `trash` | `triggered` | `wanted` | `wasted` | `rainbow` | `rip` | `fuse` | `delete` | `facepalm` | `hitler` | `jail` | `rainbow` | `kiss` | `jokeoverhead` | `bed` | `blur` | `affect` | `beautiful`' },
                { name: ':bowling: Games', value: '`8ball` | `rps` | `TicTacToe` | `snake` | `aki` | `hangman` | `dice` | `fight` | `fast-type`' },
                { name: ':musical_note: Music', value: '`play` | `stop` | `queue` | `skip` | `lyrics` | `record` | `playrec` | `autoplay` | `pause` | `resume` | `stop` | `volume` | `loop` | `jumpto`' },
                { name: ':level_slider: Leveling', value: '`level-leaderboard` | `rank` | `xpfor` | `xpset`'},
                { name: ':money_with_wings: Economy', value: '`balance` | `addbalance` | `give` | `bal-leaderboard` | `gamble` | `rob` | `withdraw` | `work`' },
                { name: ':gear: Utility', value: '`ping` | `serverinfo` | `avatars` | `calculator` | `imdb` | `whois` | `embedmsg` | `translate` | `wiki` | `platform` | `servericon` | `screenshot` | `platform` | `reminder` | `worldclock` | `urban`' },
                { name: ':robot: Chatbot', value: '`set-chatbot` | `remove-chatbot`'},
                { name: '🎙️ soundboard', value: '`ahshit` | `bruh` | `coffin` | `end` | `error` | `gasgasgas` | `nani` | `omg` | `oof` | `run` | `sadviolin` | `startup` | `wow`' },
                { name: ':soon: Comingsoon', value: '`giveaway` | `more economy cmd soon`' },
            )
            .setFooter('want to invite bot do d!invitebot')
>>>>>>> jsmerge
        message.channel.send(newEmbed);
    }
}