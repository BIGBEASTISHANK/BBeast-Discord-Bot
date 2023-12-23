<<<<<<< HEAD
module.exports = async (client, Discord) => {

    const mongo = require('../../mongo')

    console.log(`Beast is ready!`);

    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongo!')
        } finally {
            mongoose.connection.close()
        }
    })
=======
module.exports = async (client, Discord) => {

    const mongo = require('../../mongo')

    console.log(`Beast is ready!`);

    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongo!')
        } finally {
            mongoose.connection.close()
        }
    })
>>>>>>> jsmerge
}