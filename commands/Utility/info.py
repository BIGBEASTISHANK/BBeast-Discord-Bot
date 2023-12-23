from setting import *

@client.command()
async def info(ctx):
    
    # Intro
    embed = discord.Embed(
        title=f"Info", description=f"Here is the info of this server!", color=0x00f2ff)
    
    # Guild icon
    embed.set_thumbnail(url=ctx.guild.icon_url)

    # Server Name
    embed.add_field(
        name="Server Name:", value=f"`{ctx.guild.name}`", inline=False)
    
    # Owner of the server
    embed.add_field(
        name="Owner:", value=f"<@{ctx.guild.owner_id}>", inline=False)
    
    # User with nitro
    embed.add_field(
        name="Server Booster(s)", value=f"`{ctx.guild.premium_subscription_count}`", inline=False)
    
    # Member count
    embed.add_field(
        name="Members:", value=f"`{ctx.guild.member_count}`", inline=False)
    
    # Region
    embed.add_field(
        name="Region:", value=f"`{ctx.guild.region}`", inline=False)
    await ctx.send(embed=embed)

# Error(s)
@info.error
async def info_error(ctx, error):    
    
    # Unknown error
    await unknown_error(ctx, error)