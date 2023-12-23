module.exports = {
    name: 'pp',
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const randomnumber = Math.floor(Math.random() * (50 - 2) + 2);
        const alphabet = '='
        const author = message.mentions.users.first() || message.author
        const ppsize = alphabet.repeat(Math.floor(Math.random() * randomnumber))

        const ppcalc = new Discord.MessageEmbed()
<<<<<<< HEAD
            .setColor('#00f2ff')
            .setTitle(`peepee size machine`).setDescription(`${author}'s pp \n 8${ppsize}D`)
            .setFooter(`yes, I stole this machine from Mito`)
=======
            .setColor('RANDOM')
            .setTitle(`peepee size machine`).setDescription(`${author}'s pp \n 8${ppsize}D`)
>>>>>>> jsmerge
        message.channel.send(ppcalc);

    }
}