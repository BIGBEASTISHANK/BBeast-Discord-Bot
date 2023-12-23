from setting import *

@client.command()
async def pp(ctx, member:discord.Member=None):
    
    # Variable
    random_number = randint(1, 50)
    alphabet = '='
    ppsize = alphabet * random_number
    member = member or ctx.author
    embed = discord.Embed(title='PP size machine', description=f"{member.mention}'s pp \n 8{ppsize}D", color=0x00f2ff)

    await ctx.send(embed=embed)

# Error(s)
@pp.error
async def pp_error(ctx, error):
    
    # Unknown error
    await unknown_error(ctx, error)
