# Importing Libsimport discord
import os
import discord
from random import *
from discord.utils import get
from datetime import datetime
from dotenv import load_dotenv
from discord.ext import commands

# Inalizing
load_dotenv()

# Defining variables
prefix = os.getenv("PREFIX")
token = os.getenv("TOKEN")

status = discord.Status.dnd
activity = discord.Game("with discord servers 😈")

intent = discord.Intents.default()
intent.message_content = True

client = commands.Bot(command_prefix=commands.when_mentioned_or(prefix), help_command=None, intents=intent)

# File locations
event_path = "./events/"
command_path = "./commands/"
filelist = []

# Function
async def unknown_error(ctx, error):
    embed = discord.Embed(title="Their is an error executing the command!",
    description=f"```py\n{error} \n```", color=0x00f2ff)

    invite = await ctx.channel.create_invite()
    embed.add_field(name="Server Info", value=f"Command issued by {ctx.author.mention} in [Server]({invite}) **{ctx.guild.name}**")
    embed.set_thumbnail(url=ctx.guild.icon_url)
    channel = client.get_channel(int(os.getenv("UNKNOWN_ERROR_ID")))
    await channel.send(embed=embed)
    await ctx.send(embed=embed)