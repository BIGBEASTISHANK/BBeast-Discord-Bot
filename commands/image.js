var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true,
    }
})
module.exports = {
    name: 'image',
    aliases: ['img'],
    async execute(client, message, cmd, args, Discord) {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please Enter an image name'}});

        const image_result = await google.scrape(image_query,1);
        message.channel.send(image_result[0].url);
    }
}