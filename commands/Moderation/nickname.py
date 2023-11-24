from setting import *

@commands.has_permissions(manage_nicknames=True)
@client.command(aliases=["nick"])
async def nickname(ctx, user: discord.Member, *,name: str):
   
   # Variable
   character = 0;
   
   # Basic function
   for x in name:
      character += 1
      
   if character <= 32:
      # Changing Nick name
      await user.edit(nick=name);
      await ctx.send(embed=discord.Embed(title="Changes Nickname", description=f"{user.mention}'s nickname has been changes!", color=0x00f2ff))
   else:
      await ctx.send(embed=discord.Embed(title="Very Long Name", description=f"Please make sure that the name is under or equal to `32` characters!", color=0x00f2ff))
   
# Error
@nickname.error
async def nickname_error(ctx, error):
   
   # Missing Argument(s)
   if isinstance(error, commands.MissingRequiredArgument):
      embed=discord.Embed(title="Missing Argument(s)", description="You are missing required agrument(s)", color=0x00f2ff)
      embed.add_field(name="Example", value=f"{prefix}nickname {ctx.author.mention} Example")
      embed.set_footer(text="Please note: The name character can be only (32) or fewer.")
      await ctx.send(embed=embed)
      
   # Missing Permission
   elif isinstance(error, commands.MissingPermissions):
      await ctx.send(embed=discord.Embed(title="Missing Permision", description=f"Your dont have permission to change nickname, Noob", color=0x00f2ff))
   
   # Member not found
   elif isinstance(error, commands.MemberNotFound):
       await ctx.send(embed=discord.Embed(title="Member not found", description="Member you mentioned is not in the server!", color=0x00f2ff))
   
   # Role not high enough
   elif isinstance(error, commands.CommandInvokeError):
       await ctx.send(embed=discord.Embed(title="Role not high enough", description=f"This user is at the top of the role hierarchy then me. Please put me on the top in order to perform this task!", color=0x00f2ff))
       
   # Unknown erroe
   else:
      await unknown_error(ctx, error)
