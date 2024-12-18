#include "kick.h"
#include <variant>

void kickCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Variables
  dpp::snowflake userId = get<dpp::snowflake>(event.get_parameter("user"));

  // Reason to kick
  string reason;
  try {
    reason = get<string>(event.get_parameter("reason"));
  } catch (const bad_variant_access &) {
    reason = "No Reason, just like that!!";
  }

  // Cant kick self
  if (userId == event.command.member.user_id || userId == bot.me.id) {
    event.reply(dpp::message("You can't kick yourself or bot!")
                    .set_flags(dpp::m_ephemeral));
    return;
  }

  // Kicking user
  bot.guild_member_kick(
      event.command.guild_id, userId,
      [event, userId, reason,
       &bot](const dpp::confirmation_callback_t &callback) {
        if (callback.is_error())
          event.reply(
              dpp::message("Unable to kick this user, check bot's permission!")
                  .set_flags(dpp::m_ephemeral));
        else {
          // Create an embed for successful kick
          dpp::embed kickEmbed =
              dpp::embed()
                  .set_color(bbGlobalVariable::EMBED_COLOR)
                  .set_title("User Kicked")
                  .set_description("A user has been kicked from the server.")
                  .add_field("Kicked User", "<@" + to_string(userId) + ">",
                             true)
                  .add_field("Kicked By",
                             "<@" + to_string(event.command.member.user_id) +
                                 ">",
                             true)
                  .add_field("Reason", reason, false)
                  .set_timestamp(bbGlobalVariable::CurrentTime);

          // Reply with the embed
          event.reply(dpp::message().add_embed(kickEmbed));
        }
      });
}