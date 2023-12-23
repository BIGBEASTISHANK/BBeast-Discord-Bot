const pagination = require('discord.js-pagination');
const Discord = require('discord.js')

module.exports = {
    name: 'helpinfo',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bot Information')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true })) 
        .setDescription('**:tools: [ Support Server](https://discord.gg/bVdRg2RHFS)**')
        .addField('**Prefix**', 'Bots prefix is: `d!`')
        .addField('**Pages**', '⠀')
        .addField('1.Bot Information', 'This page')
        .addField('2.Information', 'Bot info')
        .addField('3.Fun', 'Shows fun commnads')
        .addField('4.General', 'Show generall commands')
        .addField('5.Moderation', 'Shows moderation commands')
        .addField('6.Image', 'Shows image commands')
        .addField('7.Games', 'Shows games commands')
        .addField('8.Music', 'Shows music commands')
        .addField('9.Economy', 'Shows economy commands')
        .addField('10.Utility', 'Shows utility commands')
        .addField('11.ChatBot', 'AI chat bot')
        .addField('12.comingsoon', 'Shows comingsoon commands')
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')
        .setFooter('want to invite bot do d!invitebot')

        const Information = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Information')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!ping`', 'Shows you the bots ping!')

        const general = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('General')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!suggestions`', 'You can ask suggestions')
        .addField('`d!weather`', 'Get weather update of your city')
        .addField('`d!covid`', 'Get covid update of your country')
        .addField('`confess`', 'confess someone without knowing them who send the message')

        const moderation = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Moderation')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!purge`', 'Deletes bulk messages')
        .addField('`d!kick`', 'Kick a specified user!')
        .addField('`d!ban`','Ban a specified user!')
        .addField('`d!crealchannel`','Delete all message of specified channel!')
        .addField('`d!nickname`','Change the nickname of specified user!')
        .addField('`d!warn`','Give warm to specified user!')
        .addField('`d!warnlist`','Show warn of specified user!')
        .addField('`d!createtextchannel`','Create text channel!')
        .addField('`d!createvoicechannel`','Create voice channe!')
        .addField('`d!defean`','Give server defean to specified user!')
        .addField('`d!undefean`','undean specified user!')
        .addField('`d!slowmode`','slowmode to specifoed channel!')
        .addField('`d!lock`','lock that channel')
        .addField('`d!unlock`','unlock locked channel')
        .addField('`d!roleadd`','Give specified role to specified user!')
        .addField('`d!roledel`','Remove specified role from specified user!')
        .addField('`d!roleinfo`','Give info of specified role!')
        .addField('`d!lockdown on/off`','Lockdown server!')
        .addField('`d!mute`','To use use mute cmd create `muted` role')
        .addField('`d!unmute`','unmute specified user!')
        .addField('`d!pullvc`','Pull specified user to your vc! ')
        .addField('`d!voicekick`','kick specified user from vc!')

        const fun = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Fun')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!meme`', 'Sends a random meme from random meme redits!')
        .addField('d!howgay', 'Tells you how gay someone is :eyes:')
        .addField('`d!ascii`', 'Try your self!')
        .addField('`d!amazeme`', 'Try your self!')
        .addField('`d!pp`', 'Try your self!')
        .addField('`d!pokemon`', 'Search pokemon information')
        .addField('`d!minecraft`', 'Send custom minecraft achievement')
        .addField('`d!wallpaper`', 'Send random desktop wallpaper')

        const image = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Image')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!shit`', 'Try your self!')
        .addField('`d!slap`', 'Try your self!')
        .addField('`d!spank`', 'Try your self!')
        .addField('`d!trash`', 'Try your self!')
        .addField('`d!triggered`', 'Try your self!')
        .addField('`d!wanted`', 'Try your self!')
        .addField('`d!wasted`', 'Try your self!')
        .addField('`d!rainbow`', 'Try your self!')
        .addField('`d!rip`', 'Try your self!')
        .addField('`d!fuse`', 'Try your self!')
        .addField('`d!delete`', 'Try your self!')
        .addField('`d!facepalm`', 'Try your self!')
        .addField('`d!hitler`', 'Try your self!')
        .addField('`d!jail`', 'Try your self!')
        .addField('`d!rainbow`', 'Try your self!')
        .addField('`d!kiss`', 'Try your self!')
        .addField('`d!jokeoverhead`', 'Try your self!')
        .addField('`d!bed`', 'Try your self!')
        .addField('`d!blur`', 'Try your self!')
        .addField('`affect`', 'Try your self!')
        .addField('`d!beautiful`', 'Try your self!')
      

        const games = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Games')
        .addField('`d!8ball`', 'Ask it a question and it will respond.....')
        .addField('`d!snake`', 'Play classic snake game!')
        .addField('`d!rps`', 'Play rock paper scissors against the bot')
        .addField('`d!tictactoe`', 'Play tictactoe against a specified user!')

        const music = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Music')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!play`', 'Play specified song!')
        .addField('`d!stop`', 'Stop the playing song!')
        .addField('`d!queue`', 'Add the song to queue!')
        .addField('`d!skip`', 'Skip the song!')
        .addField('`d!lyrics`', 'Give specified song lyrics!')
        .addField('`d!record`', 'Record your voice!')
        .addField('`d!playrec`', 'Play your last recording!')

        const economy = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Economy')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!balance`', 'check your balance')
        .addField('`d!addbalance`', 'Add balance to specified user!')
        .addField('`d!pay`', 'Pay specified user!')
        .addField('`d!work`', 'Work and earn')
        .addField('`d!daily`', 'Claim daily')
        .addField('`d!playgame`', 'Try your self')

        const utility = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Utility')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`d!serverinfo`', 'Gives information about the server')
        .addField('`d!avatars`', 'Show your avatar')
        .addField('`d!servericon`', 'Show server icon')
        .addField('`d!whois`', 'Give information of specified user!')
        .addField('`d!translate`', 'Trnaslate any language to specified language')
        .addField('`d!wiki`', 'Search anything you want to search!')
        .addField('`d!platform`', 'Tell your or specified user which platform you are using now')
        .addField('`d!screenshot`', 'Take screenshot of site!')
        .addField('`d!embedmsg`', 'Send custom embed message!')
        .addField('`d!calculator`', 'Calculate number!')
        .addField('`d!imdb`', 'Give information about specified movies or series!')
        .addField('`d!bugreport`', 'Report bug to owner')
        .addField('`d!urban`', 'Don\'t know meaning of a word? We got you covered')
        .addField('`d!membercount`', 'shows how many members are there in your server')
        .addField('`d!findemoji`', 'Find emoji')
        .addField('`d!reminder`', 'Bot will reminder you if you have set reminder')

        const chatbot = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('ChatBot')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`chatbot`', 'To use chatbot you need create channel named `🧠┃ai-chat` or `chatbot`')

        const comingsoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Comingsoon')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('`comingsoon`', 'leveling system | more command soon')

            const pages = [
            BotInfo,
            Information,
            fun,
            general,
            moderation,
            image,
            games,
            music,
            economy,
            chatbot,
            comingsoon,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)


    }
};