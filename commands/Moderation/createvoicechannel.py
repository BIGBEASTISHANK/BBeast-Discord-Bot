from setting import *

@commands.has_permissions(manage_channels=True)
@client.command(aliases=["cvc"])
async def createvoicechannel(ctx, limit: int=None, *,name: str):

    # Creating channel
    await ctx.guild.create_voice_channel(name, category=ctx.channel.category, user_limit=limit)
    channel = get(ctx.guild.voice_channels, name=name)

    embed=discord.Embed(title="Create Voice Channel", description=f"{channel.mention} channel created sucessfully", color=0x00f2ff)
    await ctx.send(embed=embed)

# Error(s)
@createvoicechannel.error
async def createvoicechannel_error(ctx, error):
    
    # Missing permision
    if isinstance(error, commands.MissingPermissions):
        await ctx.send(embed=discord.Embed(title="Missing Permision", description=f"Your dont have permission to create a channel, Noob", color=0x00f2ff))
    
    # Missing Agrument(s)
    elif isinstance(error, commands.MissingRequiredArgument):
        embed=discord.Embed(title="Missing Argument(s)", description="Please enter all the required agrument(s)!", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}createvoicechannel 5 this is example channel")
        embed.set_footer(text="Use 0 as limit to set no limit!")
        await ctx.send(embed=embed)
    
    # Syntex error
    elif isinstance(error, commands.BadArgument):
        embed=discord.Embed(title="Syntex Error", description="Please enter the syntex properly!", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}createvoicechannel 5 this is example channel")
        embed.set_footer(text="Use 0 as limit to set no limit!")
        await ctx.send(embed=embed)
    
    # Unknown error
    else:
        await unknown_error(ctx, error)