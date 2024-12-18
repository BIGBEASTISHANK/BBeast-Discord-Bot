#include "ban.h"
#include <dpp/message.h>

void banCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // User to ban
  dpp::snowflake userToBan = get<dpp::snowflake>(event.get_parameter("user"));

  // Reason to ban
  string reasonToBan;
  try {
    reasonToBan = get<string>(event.get_parameter("reason"));
  } catch (const bad_variant_access &) {
    reasonToBan = "No Reason, just like that!!";
  }

  // Delete message time
  int64_t daysToDelete;
  try {
    daysToDelete = get<int64_t>(event.get_parameter("days")) * 86400;
  } catch (const bad_variant_access &) {
    daysToDelete = 0;
  }

  // If trying to self ban
  if (userToBan == event.command.member.user_id || userToBan == bot.me.id) {
    event.reply(dpp::message("You cannot ban yourself or the bot!")
                    .set_flags(dpp::m_ephemeral));
    return;
  }

  // Ban cluster
  bot.guild_ban_add(
      event.command.guild_id, userToBan, daysToDelete,
      [&bot, event, userToBan, reasonToBan,
       daysToDelete](const dpp::confirmation_callback_t &callback) {
        if (callback.is_error()) {
          // Ban failed
          event.reply(dpp::message("Failed to ban the user. Check bot "
                                   "permissions and user status.")
                          .set_flags(dpp::m_ephemeral));
          return;
        }

        string bannedByMsg =
            "<@" + to_string(event.command.member.user_id) + ">";

        // Create an embed for ban confirmation
        dpp::embed embed =
            dpp::embed()
                .set_color(bbGlobalVariable::EMBED_COLOR)
                .set_title("User Banned")
                .set_description("A user has been banned from the server.")
                .add_field("Banned User ID", to_string(userToBan), true)
                .add_field("Banned By", bannedByMsg, true)
                .add_field("Reason", reasonToBan, false)
                .add_field("Deleted Message Days",
                           to_string(daysToDelete / 86400), true)
                .set_timestamp(bbGlobalVariable::CurrentTime);

        // DMing user why they have been banned
        bot.direct_message_create(
            userToBan, dpp::message("You have been banned from the server: `" +
                                    event.command.get_guild().name +
                                    "` \n Reason: **" + reasonToBan + "**"));

        // Send confirmation message
        event.reply(dpp::message().add_embed(embed));
      });
}