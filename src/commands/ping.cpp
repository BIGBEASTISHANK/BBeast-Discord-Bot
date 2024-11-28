#include "ping.h"

void pingCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Variables
  ostringstream ping;

  ping << fixed << setprecision(0)
       << bot.rest_ping * 1000; // setting ping message

  // Embeds
  dpp::embed embed = dpp::embed()
                         .set_color(bbGlobalVariable::EMBED_COLOR)
                         .set_title("Ping")
                         .set_description("Latency: " + ping.str() + "ms")
                         .set_timestamp(bbGlobalVariable::CurrentTime);

  // Sending message
  dpp::message msg(event.command.channel_id, embed);
  event.reply(msg.set_flags(dpp::m_ephemeral));
}