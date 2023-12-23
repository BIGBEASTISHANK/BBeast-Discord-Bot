module.exports = {
    name: 'minecraft',
    aliases: [''],
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        require('dotenv').config();
        const prefix = process.env.PREFIX;

        const sentence = args.join("+")


        if (!sentence) return message.channel.send('Please specify a text.')
        if (sentence > 22) return message.channel.send("Please type a text no bigger than 22 characters")   


           let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Achievement unlocked!')
            .setFooter(' ')
            .setImage(`https://api.cool-img-api.ml/achievement?text=${sentence}`)
        message.channel.send(embed);
    }
}