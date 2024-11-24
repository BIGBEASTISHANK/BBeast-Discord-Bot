#include "./main.h"
#include <dpp/permissions.h>

int main() {
  // Instantiating bot
  dpp::cluster bot(BOT_TOKEN);

  // Logger
  bot.on_log(dpp::utility::cout_logger());

  // On slashcommand event
  bot.on_slashcommand([&bot](const dpp::slashcommand_t &event) {
    // Ping command
    if (event.command.get_command_name() == "ping") {
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

    // Confess Command
    else if (event.command.get_command_name() == "confess") {
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

      } catch (const std::exception &e) {
        event.reply(
            dpp::message("Failed to send your confession. Please try again.")
                .set_flags(dpp::m_ephemeral));
      }
    }

    // Clear command
    else if (event.command.get_command_name() == "clear") {
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

            auto messages = std::get<dpp::message_map>(callback.value);
            std::vector<dpp::snowflake> message_ids;

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
                [event, amountToClean](
                    const dpp::confirmation_callback_t &del_callback) {
                  if (del_callback.is_error()) {
                    event.reply(dpp::message("Failed to delete messages!")
                                    .set_flags(dpp::m_ephemeral));
                    return;
                  }

                  std::string msgReply =
                      "Deleted " + std::to_string(amountToClean) + " messages!";
                  event.reply(
                      dpp::message(msgReply).set_flags(dpp::m_ephemeral));
                });
          });
    }
  });

  // On ready event
  bot.on_ready([&bot](const dpp::ready_t &event) {
    if (dpp::run_once<struct clear_bot_commands>()) {
      // Registring slash command

      // Ping
      dpp::slashcommand ping("ping", "Get ping of bot", bot.me.id);

      // Confess
      dpp::slashcommand confess("confess", "Confess your feelings!", bot.me.id);
      confess.add_option(dpp::command_option(
          dpp::co_string, "message",
          "Give a message to send it anonymously in this channel!", true));

      // Clear
      dpp::slashcommand clear("clear", "Clear message in channel!", bot.me.id);
      clear.add_option(dpp::command_option(
          dpp::co_integer, "amount", "Give amount of message to clear", true));
      clear.set_default_permissions(dpp::p_manage_messages);

      bot.guild_bulk_command_create(
          {ping, confess, clear},
          791350584597807137); // Creating slash command
    };

    // Outputing when bot is ready
    cout << "Bot is ready" << endl;

    // Setting bot online status
    bot.set_presence(
        dpp::presence(dpp::ps_dnd, dpp::at_game, "with discord servers"));
  });

  // Starting bot
  bot.start(dpp::st_wait);
}
