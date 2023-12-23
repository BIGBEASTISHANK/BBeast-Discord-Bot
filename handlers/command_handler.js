<<<<<<< HEAD
const fs = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const command_files = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of command_files) {
            const command = require(`../commands/${dirs}/${file}`);
            if (command.name) {
                client.command.set(command.name, command);
            }else {
                continue;
            }
        }
    }
    ['general', 'help', 'fun', 'moderation', 'music', 'utility', 'owner', 'economy', 'testing', 'image'].forEach(e => load_dir(e));
=======
const fs = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
            const command_files = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

            for (const file of command_files) {
                const command = require(`../commands/${dirs}/${file}`);
                if (command.name) {
                    client.command.set(command.name, command);
                } else {
                    continue;
                }
            }
        }
        ['backup', 'chatbot', 'economy', 'moderation', 'music', 'utility', 'owner', 'economy', 'testing', 'image'].forEach(e => load_dir(e));
>>>>>>> jsmerge
}