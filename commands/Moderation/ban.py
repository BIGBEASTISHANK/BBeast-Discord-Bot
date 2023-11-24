from setting import *

@commands.has_permissions(ban_members=True)
@client.command()
async def ban(ctx, member : discord.Member, *, reason: str="No reason"):
    
    # Banning member
    await member.ban(reason=reason)
    await ctx.send(embed=discord.Embed(title="banned a user", description=f"{member.mention} has been banned for `{reason}`", color=0x00f2ff))

# Error(s)
@ban.error
async def ban_error(ctx, error):
    
    # Missing Argument(s)
    if isinstance(error, commands.MissingRequiredArgument):
        embed=discord.Embed(title="Missing Argument(s)", description='Please mention the user to ban', color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}ban {ctx.author.mention}")
        await ctx.send(embed=embed)
        
    # Member not found
    elif isinstance(error, commands.MemberNotFound):
        await ctx.send(embed=discord.Embed(title="Member not found", description="Member you mentioned is not in the server!", color=0x00f2ff))
    
    # Role not high enough
    elif isinstance(error, commands.CommandInvokeError):
        await ctx.send(embed=discord.Embed(title="Role not high enough", description=f"This user is at the top of the role hierarchy then me. Please put me on the top in order to perform this task!", color=0x00f2ff))
    
    # Missing permision
    elif isinstance(error, commands.MissingPermissions):
        await ctx.send(embed=discord.Embed(title="Missing Permision", description=f"Your dont have permission to ban, Noob", color=0x00f2ff))
    
    # Unknown error
    else:
        await unknown_error(ctx, error)