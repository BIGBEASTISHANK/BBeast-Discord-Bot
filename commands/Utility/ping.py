from setting import *

@client.command()
async def ping(ctx):
    
    # Sending ping info
    await ctx.send(embed=discord.Embed(title=f"Ping", description=f"Latency: {round(client.latency * 1000)}ms", color=0x00f2ff))

# Error(s)
@ping.error
async def ping_error(ctx, error):
    
    # Unknown error
    await unknown_error(ctx, error)