// This isn't complete, I am working on this.....



#include "avatar.h"

void avatarCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Getting user to get avatar of
  dpp::snowflake userId;
  dpp::user user;

  try {
    userId = get<dpp::snowflake>(event.get_parameter("user"));
  } catch (bad_variant_access) {
    user = event.command.get_issuing_user();
    event.reply(user.get_avatar_url(4096, dpp::i_png, true));
    return;
  }
}