from setting import *

@client.command(aliases=['sm'])
@commands.has_permissions(manage_messages=True)
async def slowmode(ctx, time: str):
    
    # Basic task & variable(s)
    time = time.lower()
    time_ptr = time[-1]
    og_time = int(time.replace(time_ptr, ""))

    if time_ptr == 's':
        time_ptr = "second(s)"
        time = og_time
    elif time_ptr == 'm':
        time_ptr = "minute(s)"
        time = og_time *60
    elif time_ptr == 'h':
        time_ptr = "hour(s)"
        time = og_time * 3600

    # If time is more then 0
    if time > 0:
        
        # If slowmode is already on that time
        if ctx.channel.slowmode_delay == time:
            await ctx.send(embed=discord.Embed(title="Channel is already slowed", description=f"The channel already have slowmode for {og_time} {time_ptr} . Please enter another amount of time!", color=0x00f2ff))
        
        else:
            
            # If time is more then 6 hours
            if time <= 21600:
                await ctx.channel.edit(slowmode_delay=time)
                await ctx.send(embed=discord.Embed(title="Slowmode setted", description=f"Slowmode has been set for {og_time} {time_ptr}!", color=0x00f2ff))
            
            else:
                await ctx.send(embed=discord.Embed(title="Time is too heigh", description=f"Please choose time less then 6 hours!", color=0x00f2ff))

    # If time is less then 0
    elif time < 0:
        await ctx.send(embed=discord.Embed(title="Number is negative", description=f"Please enter a positive number", color=0x00f2ff))
    
    # Remove Slowmode
    else:
        if(ctx.channel.slowmode_delay == 0):
            await ctx.send(embed=discord.Embed(title="No Slowmode", description=f"Slowmode is already removed!", color=0x00f2ff))
        else:
            await ctx.channel.edit(slowmode_delay=0)
            await ctx.send(embed=discord.Embed(title="Slowmode removed", description=f"Slowmode have been removed!", color=0x00f2ff))

# Error(s)
@slowmode.error
async def slowmode_error(ctx, error):
    
    # Missing Argument(s)
    if isinstance(error, commands.MissingRequiredArgument):
        embed=discord.Embed(title="Missing Argument(s)", description=f"Please enter a the amount of time to slow down the chat", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}slowmode 5[s, m, h]")
        await ctx.send(embed=embed)
    
    # Syntex error
    elif isinstance(error, commands.CommandInvokeError):
        embed=discord.Embed(title="Syntex error", description=f"Please enter the syntex properly", color=0x00f2ff)
        embed.add_field(name="Example", value=f"{prefix}slowmode 5[s, m, h]")
        await ctx.send(embed=embed)
        
    # Missing permision
    elif isinstance(error, commands.MissingPermissions):
        await ctx.send(embed=discord.Embed(title="Missing Permision", description=f"Your dont have permission to slow down chat, Noob", color=0x00f2ff))
    
    # Unknown error
    else:
        await unknown_error(ctx, error)