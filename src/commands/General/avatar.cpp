// This isn't complete, I am working on this.....
// Doubt in d++ help server

#include "avatar.h"

void avatarCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Getting user to get avatar of
  dpp::snowflake userId;

  try {
    userId = get<dpp::snowflake>(event.get_parameter("user"));
  } catch (bad_variant_access) {
    userId = event.command.get_issuing_user().id;
  }

  bot.user_get(userId, [event](const dpp::confirmation_callback_t &callback) {
    dpp::user user = get<dpp::user>(callback.value);

    // Replying with avatar
    event.reply(user.get_avatar_url(4096, dpp::i_png, true));
  });
}