const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'deposite',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        let money = args.join(" ");
        if (!money) return message.channel.send("Enter the amount you want to deposite.");

        let result = await cs.deposite({
            user: message.author,
            guild: message.guild,
            amount: money
        });
        if (result.error) {
            if (result.type === 'money') return message.channel.send("Specify an amount to deposite");
            if (result.type === 'negative-money') return message.channel.send("You can't deposite negative money");
            if (result.type === 'low-money') return message.channel.send("You don't have that much money in wallet.");
            if (result.type === 'no-money') return message.channel.send("You don't have any money to deposite");
        } else {
            if (result.type === 'all-success') return message.channel.send("You have deposited all your money to your bank");
            if (result.type === 'success') return message.channel.send(`You have deposited $${result.amount} money to your bank.`);
       
        }
    }
}