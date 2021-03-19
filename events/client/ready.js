const mongo = require('../../mongo')

module.exports = async (client, Discord) => {

    console.log(`Beast is ready!`);

    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongo!')
        } finally {
            mongoose.connection.close()
        }
    })
}