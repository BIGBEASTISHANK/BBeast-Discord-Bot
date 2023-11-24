from setting import *

@client.command()
async def confess(ctx, *,words:str):
    # Clearing chat
    await ctx.channel.purge(limit=1)

    # Sending confession
    embed=discord.Embed(title="Anonymous Confession", description=f"{words}", color=0x00f2ff)
    await ctx.send(embed=embed)

# Error(s)
@confess.error
async def confess_error(ctx, error):
    
    # Missing Argument(s)
    if isinstance(error, commands.MissingRequiredArgument):
        embed=discord.Embed(title="Argument Missing", description="Please enter something to confess", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}confess something")
        await ctx.send(embed=embed)
        time.sleep(2)
        await ctx.channel.purge(limit=2)
        
    # Unknown Error
    else:
        await unknown_error(ctx, error)