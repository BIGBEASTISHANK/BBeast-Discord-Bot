const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: 'use',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          let item = args[0];
    if (!item) return message.channel.send("What item you wana use?")
    let haveItem = false;
    const arr = await cs.getUserItems({
        user: message.author,
        guild: message.guild,
    })
    for (key of arr.inventory) {
        if (key.name.toLowerCase().includes(item.toLowerCase())) haveItem = true
    };
    if (haveItem) {
        let money = Math.floor((Math.random() * 10) + 1) * 100 // 100 - 1000
        let result = await cs.addMoney({
            user: message.author,
            guild: message.guild,
            amount: money,
            wheretoPutMoney: 'wallet'
        });
        if (result.error) {
            console.log(result)
            return message.channel.send("Unknown error occured see console.")
        } else return message.channel.send("You've used " + item + " and earned $" + money)

    } else return message.channel.send("buy it first")
    }

}