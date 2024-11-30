#include "slowmode.h"

void slowmodeCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Variable
  int64_t amountToSlowmode = get<int64_t>(event.get_parameter("amount"));
  dpp::channel channelToEdit = event.command.channel;

  // Error correction
  if (amountToSlowmode > 21600 || amountToSlowmode < 0) {
    event.reply(dpp::message("Enter number between 0 - 21600!")
                    .set_flags(dpp::m_ephemeral));
    return;
  }
  channelToEdit.set_rate_limit_per_user(amountToSlowmode);

  // Setting slowmode
  bot.channel_edit(
      channelToEdit,
      [event, amountToSlowmode](const dpp::confirmation_callback_t &callback) {
        if (callback.is_error())
          event.reply(dpp::message("Check Bot's permission!")
                          .set_flags(dpp::m_ephemeral));
        else
          event.reply(dpp::message("Set slowmode succesfully!")
                          .set_flags(dpp::m_ephemeral));
      });
}