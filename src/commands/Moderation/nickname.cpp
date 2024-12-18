#include "nickname.h"

void nicknameCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Variables
  string newNickname = get<string>(event.get_parameter("nickname"));
  dpp::snowflake userId = get<dpp::snowflake>(event.get_parameter("user"));
  dpp::guild_member guildMember = event.command.get_resolved_member(userId);
  string oldNick = guildMember.get_nickname();

  // Changing name
  guildMember.set_nickname(newNickname);
  bot.guild_edit_member(
      guildMember, [event, oldNick,
                    newNickname](const dpp::confirmation_callback_t &callback) {
        // Checking if it gives error or not
        if (callback.is_error()) {
          event.reply(
              dpp::message(
                  "Bot don't have permission to change the user' nickname!")
                  .set_flags(dpp::m_ephemeral));
        } else { // If succesfull
          dpp::embed nickChangeEmbed =
              dpp::embed()
                  .set_color(bbGlobalVariable::EMBED_COLOR)
                  .set_title("Nickname Changed!")
                  .set_description("Changed the ducking nickname...")
                  .add_field("From: ", oldNick, true)
                  .add_field("To:", newNickname, true)
                  .add_field("Changed by:",
                             "<@" + to_string(event.command.member.user_id) +
                                 ">",
                             false)
                  .set_timestamp(bbGlobalVariable::CurrentTime);

          // Replying with embed
          event.reply(dpp::message().add_embed(nickChangeEmbed));
        }
      });
}