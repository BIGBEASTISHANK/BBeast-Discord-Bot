from setting import *

@client.event
async def on_ready():
    print("Bot started")

    await client.change_presence(status=status, activity=activity)