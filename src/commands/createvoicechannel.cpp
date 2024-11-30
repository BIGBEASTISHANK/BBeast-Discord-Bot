#include "createvoicechannel.h"
#include <dpp/message.h>
#include <dpp/restresults.h>
#include <variant>

void createVoiceChannelCommand(const dpp::slashcommand_t &event,
                               dpp::cluster &bot) {
  // Variables
  string channelName = get<string>(event.get_parameter("name"));
  dpp::channel createVoiceChannel;
  bool isNsfw;

  // isNsfw
  try {
    isNsfw = get<bool>(event.get_parameter("nsfw"));
  } catch (bad_variant_access) {
    isNsfw = false;
  }

  // Setting channel details
  createVoiceChannel.set_name(channelName);
  createVoiceChannel.set_type(dpp::CHANNEL_VOICE);
  createVoiceChannel.set_guild_id(event.command.guild_id);
  createVoiceChannel.set_parent_id(event.command.channel.parent_id);
  createVoiceChannel.set_nsfw(isNsfw);

  // Creating channel
  bot.channel_create(
      createVoiceChannel, [event, channelName, isNsfw](
                              const dpp::confirmation_callback_t &callback) {
        if (callback.is_error())
          event.reply(dpp::message("Please check bot's permission!")
                          .set_flags(dpp::m_ephemeral));
        else {
          dpp::embed channelEmbed =
              dpp::embed()
                  .set_color(bbGlobalVariable::EMBED_COLOR)
                  .set_title("🆕 Voice Channel Created")
                  .add_field("Channel Name", channelName, true)
                  .add_field("NSFW", isNsfw ? "Yes" : "No", true)
                  .add_field("Created By",
                             "<@" + to_string(event.command.member.user_id) +
                                 ">",
                             false)
                  .set_timestamp(time(nullptr));

          // Reply with the embed
          event.reply(dpp::message().add_embed(channelEmbed));
        }
      });
}