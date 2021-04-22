const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://Discordbot:ishank12@beastbot.rkj2v.mongodb.net/Discord_Bot_Database?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}