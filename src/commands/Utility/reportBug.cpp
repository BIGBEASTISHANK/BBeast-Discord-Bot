#include "reportBug.h"

void reportBugCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Getting bug
  string bug = get<string>(event.get_parameter("bug"));

  // Creating embed
  dpp::embed embed =
      dpp::embed()
          .set_author(event.command.get_issuing_user().username, "",
                      event.command.get_issuing_user().get_avatar_url())
          .set_color(bbGlobalVariable::EMBED_COLOR)
          .set_thumbnail(event.command.get_issuing_user().get_avatar_url())
          .set_description("**Reported bug:** " + bug)
          .add_field("Server Name", event.command.get_guild().name, true)
          .add_field("Server ID", to_string(event.command.get_guild().id), true)
          .add_field("Reported by", event.command.get_issuing_user().get_mention(), true)
          .set_timestamp(bbGlobalVariable::CurrentTime);

  // Send embed message into support server
  bot.message_create(dpp::message(bbGlobalVariable::bugReportChannelId, embed));

  // Sending message
  bot.message_create(
      dpp::message(event.command.channel_id,
                   event.command.get_issuing_user().get_mention() +
                       " Bug report sent! Please join support server to keep up "
                       "with your report!"
                       "\nReport: ```c++\n" + bug + "\n```\n"
                       "Support server link: " +
                       bbGlobalVariable::supportServerLink)
          .set_flags(dpp::m_ephemeral));
}