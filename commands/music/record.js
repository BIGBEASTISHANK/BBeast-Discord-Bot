const fs = require("fs");

module.exports = {
    name: 'record',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    const voicechannel = message.member.voice.channel;
    if (!voicechannel) return message.channel.send("Please join a voice channel first!");

    const connection = await message.member.voice.channel.join();
    const receiver = connection.receiver.createStream(message.member, {
        mode: "pcm",
        end: "silence"
    });

    const writer = receiver.pipe(fs.createWriteStream(`./recorded-${message.author.id}.pcm`));
    writer.on("finish", () => {
        message.member.voice.channel.leave();
        message.channel.send("Finished writing audio");
    })
    }
}