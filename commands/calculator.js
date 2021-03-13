module.exports = {
    name: 'calculator',
    aliasis: ['cal'],
    execute(client, message, cmd, args, Discord){

        let method = args [0];
        let firstNumber = Number(args[1])
        let secondNumber = Number(args[2])
        const operation = ['+', '-', '*', '/']

        if (!method) return message.reply({
            embed: { color: `#00f2ff`, description: 'Please selext an oppreation.'}
        })

        if (!args[1]) return message.reply({
            embed: { color: `#00f2ff`, description: 'Please select two numbers'}
        })

        if (!operation.includes(method)) return message.reply({
            embed: { color: `#00f2ff`, description: 'When chosing an operatiom, please select `+` `-` `*` `/` only'}
        })

        if (!args[2]) return message.reply({
            embed: { color: `#00f2ff`, description: 'Please select a number to use input'}
        })

        if (isNaN(firstNumber)) return message.reply({
            embed: { color: `#00f2ff`, description: '1st number is not a number'}
        })
        
        if (isNaN(secondNumber)) return message.reply({
            embed: { color: `#00f2ff`, description: '2nd number is not a number' } 
            })

        if (method === '+') {
            let doMath = firstNumber + secondNumber
            message.channel.send({
                embed: { color: `#00f2ff`, description: `Answer is: ${doMath}, am I right or am I right.`} 
            })
        }

        if (method === '-') {
            let doMath = firstNumber - secondNumber
            message.channel.send({
                embed: { color: `#00f2ff`, description: `Answer is: Answer is: ${doMath}, am I right or am I right., am I right or am I right.`} 
            })
        }

        if (method === '*') {
            let doMath = firstNumber * secondNumber
            message.channel.send({
                embed: { color: `#00f2ff`, description: `Answer is: ${doMath}, am I right or am I right.`} 
            })
        }

        if (method === '/') {
            let doMath = firstNumber / secondNumber
            message.channel.send({
                embed: { color: `#00f2ff`, description: `Answer is: ${doMath}, am I right or am I right.`} 
            })
        }

 }
}