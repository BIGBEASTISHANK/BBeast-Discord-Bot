#include "main.h"

// Command headers
#include "commands/ban.h"
#include "commands/ping.h"
#include "commands/clear.h"
#include "commands/confess.h"

int main() {
  // Instantiating bot
  dpp::cluster bot(BOT_TOKEN);

  // Logger
  bot.on_log(dpp::utility::cout_logger());

  // On slashcommand event
  bot.on_slashcommand([&bot](const dpp::slashcommand_t &event) {
    // Ping command
    if (event.command.get_command_name() == "ping") {
      pingCommand(event, bot);
    }
    // Confess Command
    else if (event.command.get_command_name() == "confess") {
      confessCommand(event, bot);
    }
    // Clear command
    else if (event.command.get_command_name() == "clear") {
      clearCommand(event, bot);
    }
    // Ban Command
    else if (event.command.get_command_name() == "ban") {
      banCommand(event, bot);
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

      // Ban
      dpp::slashcommand ban("ban", "Bans a user from current server!",
                            bot.me.id);
      ban.add_option(dpp::command_option(dpp::co_user, "user",
                                         "Mention user to ban!", true));
      ban.add_option(dpp::command_option(dpp::co_string, "reason",
                                         "Reason to ban!", false));
      ban.add_option(dpp::command_option(
          dpp::co_integer, "seconds",
          "How many seconds to delete messages for!", false));
      ban.set_default_permissions(dpp::p_ban_members);

      // Creating bulk command
      bot.guild_bulk_command_create(
          {ping, confess, clear, ban},
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
