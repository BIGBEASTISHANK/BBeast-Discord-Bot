const mongo = require('../../../mongo')
const profileSchema = require('../../../schemas/economy')

const bbicsCache = {} // { 'guildId-userId': bbics }

module.exports = (client) => { }

module.exports.addbbics = async (guildId, userId, bbics) => {
  return await mongo().then(async (mongoose) => {
    try {

      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            bbics,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )


      bbicsCache[`${guildId}-${userId}`] = result.bbics

      return result.bbics
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getbbics = async (guildId, userId) => {
  const cachedValue = bbicsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {

      const result = await profileSchema.findOne({
        guildId,
        userId,
      })

      let bbics = 0
      if (result) {
        bbics = result.bbics
      } else {
        await new profileSchema({
          guildId,
          userId,
          bbics,
        }).save()
      }

      bbicsCache[`${guildId}-${userId}`] = bbics

      return bbics
    } finally {
      mongoose.connection.close()
    }
  })
}