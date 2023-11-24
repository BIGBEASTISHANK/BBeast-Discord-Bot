from turtle import title
from setting import *

@commands.has_permissions(ban_members=True)
@client.command()
async def unban(ctx, *, member):
    
    # Variable
    banned_user = await ctx.guild.bans()
    member_name, member_discriminator= member.split('#')

    # Checking ban list of the server to find mentioned user
    for ban_entry in banned_user:
        user = ban_entry.user

        # Unbanning user
        if(user.name, user.discriminator) != (member_name, member_discriminator):
            await ctx.send(embed=discord.Embed(title="User not found", description="User already unbenned or has not been banned!", color=0x00f2ff))
            return
        
        # If the user is already unbanned
        else:
            await ctx.guild.unban(user)
            await ctx.send(embed=discord.Embed(title="Unbanned a user", description=f"{user.mention} has been unbanned", color=0x00f2ff))
            return

# Error(s)
@unban.error
async def unban_error(ctx, error):
    
    # Missing Argument(s)
    if isinstance(error, commands.MissingRequiredArgument):
        embed=discord.Embed(title="Missing Argument(s)", description="Please enter user name & discriminator to unban!", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}unban {ctx.author}")
        await ctx.send(embed=embed)
        
    # Invalid Argument
    elif isinstance(error, commands.CommandInvokeError):
        embed=discord.Embed(title="Invalid Argument", description=f"Please enter a valid argument", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}unban {ctx.author}")
        
    # Missing Permision
    elif isinstance(error, commands.MissingPermissions):
        await ctx.send(embed=discord.Embed(title="Missing Permision", description=f"Your dont have permission to unban, Noob", color=0x00f2ff))
    
    # Unknown Error
    else:
        await unknown_error(ctx, error)