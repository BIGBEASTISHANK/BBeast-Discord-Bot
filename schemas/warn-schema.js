<<<<<<< HEAD
const mongoose = require('mongoose')

const warnSchema = mongoose.Schema({
  guildId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  warnings: {
    type: [Object],
    required: true,
  },
})

=======
const mongoose = require('mongoose')

const warnSchema = mongoose.Schema({
  guildId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  warnings: {
    type: [Object],
    required: true,
  },
})

>>>>>>> jsmerge
module.exports = mongoose.model('warnings', warnSchema)