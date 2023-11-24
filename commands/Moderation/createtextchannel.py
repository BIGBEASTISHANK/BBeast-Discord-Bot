from setting import *

@commands.has_permissions(manage_channels=True)
@client.command(aliases=["ctc"])
async def createtextchannel(ctx, *,name: str):
    
    # Basic task
    name = name.replace(" ", "-")

    # Creating channel
    await ctx.guild.create_text_channel(name, category=ctx.channel.category)
    channel = get(ctx.guild.text_channels, name=name)

    embed=discord.Embed(title="Create Text Channel", description=f"{channel.mention} channel created sucessfully", color=0x00f2ff)
    await ctx.send(embed=embed)

# Error(s)
@createtextchannel.error
async def createtextchannel_error(ctx, error):
    
    # Missing permision
    if isinstance(error, commands.MissingPermissions):
        await ctx.send(embed=discord.Embed(title="Missing Permision", description=f"Your dont have permission to create a channel, Noob", color=0x00f2ff))
        
    # Missing Agrument(s)
    elif isinstance(error, commands.MissingRequiredArgument):
        embed=discord.Embed(title="Missing Argument(s)", description="Please enter all the required agrument(s)!", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}createtextchannel this is example channel")
        await ctx.send(embed=embed)
    
    # Unknown error
    else:
        await unknown_error(ctx, error)