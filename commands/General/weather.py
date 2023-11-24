import requests
from setting import *
from bs4 import BeautifulSoup
 
@client.command()
async def weather(ctx, city: str):
    
    # creating url and requests instance
    url = "https://www.google.com/search?q="+"weather"+city
    html = requests.get(url).content
    
    # getting raw data
    soup = BeautifulSoup(html, 'html.parser')
    temp = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
    str = soup.find('div', attrs={'class': 'BNeawe tAd8D AP7Wnd'}).text
    
    # formatting data
    data = str.split('\n')
    time = data[0]
    sky = data[1]
    
    # printing all data
    embed=discord.Embed(title="Weather Report!", description=f"Here is the weather report of {city}!", color=0x00f2ff)
    embed.add_field(name="Temprature", value=temp, inline=False)
    embed.add_field(name="Time", value=time, inline=False)
    embed.add_field(name="Sky Description", value=sky, inline=False)
    await ctx.send(embed=embed)