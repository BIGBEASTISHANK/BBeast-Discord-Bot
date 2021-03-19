module.exports = {
    name: 'invitetrack',
    execute(client, message, cmd, args, Discord) {
        if (message.member.permissions.has("MANAGE_MESSAGES")) {
            const { guild } = message

            guild.fetchInvites().then((invites) => {
                const inviteCounter = {
                    bob: 19,
                    joe: 30,
                }

                invites.forEach((invite) => {
                    const { uses, inviter } = invite
                    const { username, discriminator } = inviter

                    const name = `${username}#${discriminator}`

                    inviteCounter[name] = (inviteCounter[name] || 0) + uses
                })

                const sortedInvites = Object.keys(inviteCounter).sort(
                    (a, b) => inviteCounter[b] - inviteCounter[a]
                )

                console.log(sortedInvites)

                sortedInvites.length = 3

                for (const invite of sortedInvites) {
                    const count = inviteCounter[invite]
                    message.channel.send({
                        embed: { color: `#00f2ff`, description: `${invite} has invited ${count} member(s)!` }
                    })
                }
            })
        } else {
            message.channel.send({
                embed: { color: `#00f2ff`, description: 'You are missing `MANAGE MASSAGES` permission' }
            })
        }
    }
}