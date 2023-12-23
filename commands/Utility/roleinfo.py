from setting import *

@client.command()
async def userinfo(ctx, member: discord.Member):
    embed = discord.Embed(color=0x00f2ff)
    embed.set_thumbnail(url=f"{member.avatar_url_as(format=None, static_format='webp', size=1024)}")
    embed.add_field(name="Member:", value=f"{member.mention}", inline=False)
    embed.add_field(name="Member name", value=f"{member}", inline=False)
    embed.add_field(name="Member id:", value=f"{member.id}", inline=False)
    embed.add_field(name="Nickname:", value=f"{member.nick}", inline=False)
    embed.add_field(name="Joined at:", value=f"{member.joined_at}", inline=False)
    embed.add_field(name="Roles:", value=f"{member.roles.mention}", inline=False)
    await ctx.send(embed=embed)