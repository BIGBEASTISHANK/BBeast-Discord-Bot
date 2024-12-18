#include "help.h"

void helpCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Embed message to send
  dpp::embed helpEmbed =
      dpp::embed()
          .set_author(bot.me.username + "'s Help page", "",
                      bot.me.get_avatar_url())
          .set_title("Slashcommand `/` only!")
          .set_color(bbGlobalVariable::EMBED_COLOR)
          .set_thumbnail(bot.me.get_avatar_url())
          .set_description("**<:invite:822410792804417567> [ "
                           "Invite](" +
                           bbGlobalVariable::botInviteLink +
                           ")** | "
                           "**<:support:822410788773691392> [ Support "
                           "Server](" +
                           bbGlobalVariable::supportServerLink +
                           ")** |  "
                           "**<:sourecode:822410789122080768> [ Source "
                           "Code](" +
                           bbGlobalVariable::botSourceCodeLink + ")**")
          .add_field("**❯ General**", "`confess`", false)
          .add_field("**❯ Moderation**",
                     "`clear` | `unban` | `kick` | `slowmode` |  `ban` | "
                     "`createtextchannel` | `createvoicechannel` | `nickname`",
                     false)
          .add_field("**❯ Fun**", "`calculator`", false)
          .add_field("**❯ Utility**", "`ping` | `help`", false)
          .set_timestamp(bbGlobalVariable::CurrentTime);

  // Replying with embed
  event.reply(dpp::message().add_embed(helpEmbed));
}