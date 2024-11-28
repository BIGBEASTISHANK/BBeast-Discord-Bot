#include "unban.h"

void unbanCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Getting User Id
  dpp::snowflake userId = get<dpp::snowflake>(event.get_parameter("user_id"));

  bot.guild_ban_delete(
      event.command.guild_id, userId,
      [event](const dpp::confirmation_callback_t &callback) {
        // Confirmation
        if (callback.is_error())
          event.reply(dpp::message("Please check user id or bot's permission!")
                          .set_flags(dpp::m_ephemeral));
        else
          event.reply(dpp::message("Unbanned user succesfully!")
                          .set_flags(dpp::m_ephemeral));
      });
}