  
const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const economy = mongoose.Schema({
  guildId: reqString,
  userId: reqString,
  bbics: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('economy', economy)