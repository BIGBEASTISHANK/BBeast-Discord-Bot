
module.exports = {
    name: 'invitetrack',
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            const sortedInvites = Object.keys(inviteCounter).sort()

            for (const invite of sortedInvites) {
                const count = inviteCounter[invite]
                message.channel.send({ embed: { color: `RANDOM`, description: `${invite} has invited ${count} member(s)!` } })
            }
        })
    }
}