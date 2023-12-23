<<<<<<< HEAD
module.exports = {
    name: 'embedmsg',
    aliases: ['embmsg'],
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        require('dotenv').config();
        const prefix = process.env.PREFIX;

        const result = args.join(' ').split('|');

        const msgembedcolor = result[0];
        const msgtitle = result[1];
        const msgdescription = result[2];
        const msgfooter = result[3];

        if (!msgembedcolor) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give valid messages, Ex: **\`${prefix}embedmsg\` | \`colorhexcode\` | \`Title\` | \`description\` | \`footer\`**` } });
        if (!msgtitle) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give a **Title**` } });
        if (!msgdescription) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give a **Description**` } });
        if (!msgfooter) return message.channel.send({ embed: { color: `#00f2ff`, description: `Please give a **Footer**` } });

        message.channel.bulkDelete(1);

        const embedmsg = new Discord.MessageEmbed()
            .setColor(`${msgembedcolor}`)
            .setTitle(msgtitle)
            .setDescription(msgdescription)
            .setFooter(msgfooter)
        message.channel.send(embedmsg);
    }
}
=======
const Discord = require("discord.js")

module.exports = {
    name: 'embed',
    aliases: ['e'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        try {

            const filter = msg => msg.author.id == message.author.id;
            const options = {
                max: 1
            };
            //===============================================================================================
            // Getting Started
            const embed = new Discord.MessageEmbed();
            message.channel.send("Reply `skip` to skip question, Reply `cancel` to stop the command.");
            //===============================================================================================
            // Getting Title
            message.channel.send("Type title for the embed");
            let title = await message.channel.awaitMessages(filter, options);
            if (title.first().content == 'cancel') return message.channel.send('Cancelled the command')
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content);
    
            //===============================================================================================
            // Getting Description
            message.channel.send("Type Description for the embed");
            let Description = await message.channel.awaitMessages(filter, options);
            if (Description.first().content == 'cancel') return message.channel.send('Cancelled the command')
            if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content);
    
            //===============================================================================================
            // Getting Footer
            message.channel.send("Type footer for the embed");
            let Footer = await message.channel.awaitMessages(filter, options);
         if (Footer.first().content == 'cancel') return message.channel.send('Cancelled the command')
            if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content); 
    
            //===============================================================================================
            // Getting URL
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') {
                message.channel.send("Provide URL for the embed (Type `skip` if you didn't specify title)");
                let URL = await message.channel.awaitMessages(filter, options);
                if (URL.first().content == 'cancel') return message.channel.send('Cancelled the command')
                if (URL.first().content !== 'skip' && URL.first().content !== 'cancel') embed.setURL(URL.first().content);
            }
    
            //===============================================================================================
            // Getting Color
            message.channel.send("Send Hex Color . Default color is Red (Hex: #ff0000)");
            let Color = await message.channel.awaitMessages(filter, options);
            if (Color.first().content == 'cancel') return message.channel.send('Cancelled the command')
            if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136")
    
            //===============================================================================================
            // Getting Author Field
            message.channel.send("Type Author Field for the embed");
            let Author = await message.channel.awaitMessages(filter, options);
            if (Author.first().content == 'cancel') return message.channel.send('Cancelled the command')
            if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content);
    
            //===============================================================================================
            // Getting TimeStamp
            message.channel.send("Do you want any Timestamp (Time Now) ? Reply `yes` or `no`");
            let TimeStamp = await message.channel.awaitMessages(filter, options);
            if (TimeStamp.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (TimeStamp.first().content !== 'yes') embed.setTimestamp();
    
            message.channel.send("Which channel do you want to send the embed ? Mention channel or specify Channel ID")
            let Channel = await message.channel.awaitMessages(filter, options);
        const ch = await Channel.first().mentions.channels.first() || message.guild.channels.cache.get(Channel.first())
        if(ch) return ch.send(embed)
        message.channel.send(embed)
  } catch (error) {
            console.error(error);
        }
    }
}

>>>>>>> jsmerge
