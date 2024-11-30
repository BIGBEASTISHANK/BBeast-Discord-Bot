#include "createtextchannel.h"

void createTextChannelCommand(const dpp::slashcommand_t &event,
                              dpp::cluster &bot) {
  // Variables
  string channelName = get<string>(event.get_parameter("name"));
  dpp::channel newCreateChannel;
  string channelTopic;
  bool isNsfw;

  // Channel topic
  try {
    channelTopic = get<string>(event.get_parameter("topic"));
  } catch (bad_variant_access) {
    channelTopic = "Not decided yet, but surely something awesome!";
  }

  // Is nsfw??
  try {
    isNsfw = get<bool>(event.get_parameter("nsfw"));
  } catch (bad_variant_access) {
    isNsfw = false;
  }

  // Setting channel details
  newCreateChannel.set_guild_id(event.command.guild_id);
  newCreateChannel.set_name(channelName);
  newCreateChannel.set_type(dpp::CHANNEL_TEXT);
  newCreateChannel.set_topic(channelTopic);
  newCreateChannel.set_parent_id(event.command.get_channel().parent_id);
  newCreateChannel.set_nsfw(isNsfw);

  bot.channel_create(
      newCreateChannel,
      [event, channelName](const dpp::confirmation_callback_t &callback) {
        if (callback.is_error())
          event.reply(dpp::message("Please check bot's permission!")
                          .set_flags(dpp::m_ephemeral));
        else
          event.reply(dpp::message("Channel created successfully!")
                          .set_flags(dpp::m_ephemeral));
      });
}