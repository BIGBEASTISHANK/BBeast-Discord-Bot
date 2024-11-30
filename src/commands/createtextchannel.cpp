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

  // Creating channel
  bot.channel_create(newCreateChannel, [event, channelName, isNsfw,
                                        channelTopic](
                                           const dpp::confirmation_callback_t
                                               &callback) {
    if (callback.is_error())
      event.reply(dpp::message("Please check bot's permission!")
                      .set_flags(dpp::m_ephemeral));
    else {
      dpp::embed channelEmbed =
          dpp::embed()
              .set_color(bbGlobalVariable::EMBED_COLOR)
              .set_title("🆕 Text Channel Created")
              .set_description(
                  "A new text channel has been successfully created!")
              .add_field("Channel Name", channelName, true)
              .add_field("NSFW", isNsfw ? "Yes" : "No", true)
              .add_field("Channel Topic", channelTopic, false)
              .add_field("Created By",
                         "<@" + to_string(event.command.member.user_id) + ">",
                         true)
              .set_timestamp(time(nullptr));

      // Reply with the embed
      event.reply(
          dpp::message().add_embed(channelEmbed));
    }
  });
}