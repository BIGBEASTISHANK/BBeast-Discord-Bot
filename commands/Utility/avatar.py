from setting import *

@client.command(aliases=["ava"])
async def avatar(ctx, member: discord.Member,):
    
    # Showing avatar
    embed=discord.Embed(title=f"Avatar", description=f"[Avatar]({member.avatar_url}) of {member.mention}", color=0x00f2ff)
    embed.set_image(url=member.avatar_url)
    await ctx.send(embed=embed)
    
# Error
@avatar.error
async def avatar_error(ctx, error):
    
    # Missing Agrument(s)
    if isinstance(error, commands.MissingRequiredArgument):
       embed=discord.Embed(title="Missing Argument(s)", description="Please enter all the required agrument(s)!", color=0x00f2ff)
       embed.add_field(name="Example", value=f"{prefix}avatar {ctx.author.mention}")
       await ctx.send(embed=embed)
    
    # Member not found
    elif isinstance(error, commands.MemberNotFound):
        await ctx.send(embed=discord.Embed(title="Member not found", description="Member you mentioned is not in the server!", color=0x00f2ff))
    
    # Unknown error
    else:
        await unknown_error(ctx, error)