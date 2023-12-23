from setting import *
from keepalive import keep_alive

# Executing bot events
for root, dirs, files in os.walk(event_path):
	for file in files:
		filelist.append(os.path.join(root,file))

for event_file in filelist:
    exec(open(event_file).read())

# Executing bot commands
for root, dirs, files in os.walk(command_path):
	for file in files:
		filelist.append(os.path.join(root,file))

for command_file in filelist:
  	exec(open(command_file).read())

# Running the bot
keep_alive() # Uncomment this when pushing to repo
client.run(token)