#include "confess.h"

void confessCommand(const dpp::slashcommand_t &event, dpp::cluster &bot){
        try {
        // Variables
        string paraMsg = get<string>(event.get_parameter("message"));

        // Embeds
        dpp::embed embed = dpp::embed()
                               .set_color(bbGlobalVariable::EMBED_COLOR)
                               .set_title("Anonymous Confession!")
                               .set_description(paraMsg)
                               .set_timestamp(bbGlobalVariable::CurrentTime);

        // Sending msg
        dpp::message msg(event.command.channel_id, embed);
        bot.message_create(msg);

        // Confirm to user that their message was sent
        event.reply(dpp::message("Your confession has been sent anonymously!")
                        .set_flags(dpp::m_ephemeral));

      } catch (const exception &e) {
        event.reply(
            dpp::message("Failed to send your confession. Please try again.")
                .set_flags(dpp::m_ephemeral));
      }
}