#include "clear.h"

void clearCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Get amount of messages to delete
  int64_t amountToClean = get<int64_t>(event.get_parameter("amount"));

  // Validate input
  if (amountToClean <= 1 || amountToClean > 100) {
    event.reply(dpp::message("Please provide a number between 2 and 100!")
                    .set_flags(dpp::m_ephemeral));
    return;
  }

  // Get messages to delete
  bot.messages_get(
      event.command.channel_id, 0, 0, 0, amountToClean,
      [&bot, event,
       amountToClean](const dpp::confirmation_callback_t &callback) {
        if (callback.is_error()) {
          event.reply(dpp::message("Failed to fetch messages!")
                          .set_flags(dpp::m_ephemeral));
          return;
        }

        auto messages = get<dpp::message_map>(callback.value);
        vector<dpp::snowflake> message_ids;

        // Extract message IDs
        for (const auto &message : messages) {
          message_ids.push_back(message.first);
        }

        if (message_ids.empty()) {
          event.reply(dpp::message("No messages to delete!")
                          .set_flags(dpp::m_ephemeral));
          return;
        }

        // Delete messages
        bot.message_delete_bulk(
            message_ids, event.command.channel_id,
            [event,
             amountToClean](const dpp::confirmation_callback_t &del_callback) {
              if (del_callback.is_error()) {
                event.reply(dpp::message("Failed to delete messages, check bot's permission!")
                                .set_flags(dpp::m_ephemeral));
                return;
              }

              string msgReply =
                  "Deleted " + to_string(amountToClean) + " messages!";
              event.reply(dpp::message(msgReply).set_flags(dpp::m_ephemeral));
            });
      });
}