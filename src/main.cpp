#include "main.h"

// Command headers
#include "commands/ban.h"
#include "commands/clear.h"
#include "commands/confess.h"
#include "commands/createtextchannel.h"
#include "commands/createvoicechannel.h"
#include "commands/kick.h"
#include "commands/ping.h"
#include "commands/slowmode.h"
#include "commands/unban.h"
#include <dpp/appcommand.h>

int main() {
  // Instantiating bot
  dpp::cluster bot(BOT_TOKEN);

  // Logger
  bot.on_log(dpp::utility::cout_logger());

  // On slashcommand event
  bot.on_slashcommand([&bot](const dpp::slashcommand_t &event) {
    ///////////////////////
    // Utilities Section //
    ///////////////////////
    // Ping command
    if (event.command.get_command_name() == "ping") {
      pingCommand(event, bot);
    }

    /////////////////////
    // General section //
    /////////////////////
    // Confess Command
    else if (event.command.get_command_name() == "confess") {
      confessCommand(event, bot);
    }

    ////////////////////////
    // Moderation Section //
    ////////////////////////
    // Clear command
    else if (event.command.get_command_name() == "clear") {
      clearCommand(event, bot);
    }
    // Ban Command
    else if (event.command.get_command_name() == "ban") {
      banCommand(event, bot);
    }
    // unban command
    else if (event.command.get_command_name() == "unban") {
      unbanCommand(event, bot);
    } else if (event.command.get_command_name() == "kick") {
      kickCommand(event, bot);
    }
    // Create Text Channel command
    else if (event.command.get_command_name() == "createtextchannel") {
      createTextChannelCommand(event, bot);
    }
    // Create voice channel command
    else if (event.command.get_command_name() == "createvoicechannel") {
      createVoiceChannelCommand(event, bot);
    }
    // Slowmode command
    else if (event.command.get_command_name() == "slowmode") {
      slowmodeCommand(event, bot);
    }
  });

  // On ready event
  bot.on_ready([&bot](const dpp::ready_t &event) {
    // Registring slash command
    if (dpp::run_once<struct clear_bot_commands>()) {
      ///////////////////////
      // Utilities Section //
      ///////////////////////
      // Ping
      dpp::slashcommand ping("ping", "Get ping of bot", bot.me.id);

      /////////////////////
      // General section //
      /////////////////////
      // Confess
      dpp::slashcommand confess("confess", "Confess your feelings!", bot.me.id);
      confess.add_option(dpp::command_option(
          dpp::co_string, "message",
          "Give a message to send it anonymously in this channel!", true));

      ////////////////////////
      // Moderation Section //
      ////////////////////////
      // Clear
      dpp::slashcommand clear("clear", "Clear message in channel!", bot.me.id);
      clear
          .add_option(dpp::command_option(dpp::co_integer, "amount",
                                          "Give amount of message to clear",
                                          true))
          .set_default_permissions(dpp::p_manage_messages);

      // Ban
      dpp::slashcommand ban("ban", "Bans a user from current server!",
                            bot.me.id);
      ban.add_option(dpp::command_option(dpp::co_user, "user",
                                         "Mention user to ban!", true))
          .add_option(dpp::command_option(dpp::co_string, "reason",
                                          "Reason to ban!", false))
          .add_option(dpp::command_option(dpp::co_integer, "days",
                                          "Delete message days old!", false))
          .set_default_permissions(dpp::p_ban_members);

      // Unban
      dpp::slashcommand unban("unban", "Unban user from this server!",
                              bot.me.id);
      unban.add_option(dpp::command_option(dpp::co_user, "user_id",
                                           "Enter user id to unban!", true));
      unban.set_default_permissions(dpp::p_ban_members);

      // Kick
      dpp::slashcommand kick("kick", "Kick user from server!", bot.me.id);
      kick.add_option(dpp::command_option(dpp::co_user, "user",
                                          "Mention user to kick!", true))
          .add_option(dpp::command_option(dpp::co_string, "reason",
                                          "Reason to kick the user!", false))
          .set_default_permissions(dpp::p_kick_members);

      // Create text channel
      dpp::slashcommand createTextChannel(
          "createtextchannel", "Create a text channel in current catagory!",
          bot.me.id);
      createTextChannel
          .add_option(dpp::command_option(dpp::co_string, "name",
                                          "Enter name of the channel!", true))
          .add_option(dpp::command_option(dpp::co_string, "topic",
                                          "What's the topic of this channel!",
                                          false))
          .add_option(dpp::command_option(dpp::co_boolean, "nsfw",
                                          "Is it nsfw?", false))
          .set_default_permissions(dpp::p_manage_channels);

      // Create Voice Channel
      dpp::slashcommand createVoiceChannel(
          "createvoicechannel", "Create a voice channel in current catagory!",
          bot.me.id);
      createVoiceChannel
          .add_option(dpp::command_option(dpp::co_string, "name",
                                          "Enter name of the channel!", true))
          .add_option(dpp::command_option(dpp::co_boolean, "nsfw",
                                          "Is this channel nsfw?", false))
          .set_default_permissions(dpp::p_manage_channels);

      // Slowmode
      dpp::slashcommand slowmode("slowmode", "Add slowmode to the channel!",
                                 bot.me.id);
      slowmode
          .add_option(dpp::command_option(
              dpp::co_integer, "amount",
              "Enter the amount of slowdown n seconds!", true))
          .set_default_permissions(dpp::p_manage_channels)
          .set_default_permissions(dpp::p_manage_messages);

      /////////////////////
      // Logical Section //
      /////////////////////
      // Creating bulk command
      bot.guild_bulk_command_create(
          {ping, confess, clear, ban, unban, kick, createTextChannel,
           createVoiceChannel, slowmode},
          791350584597807137,
          [&bot](const dpp::confirmation_callback_t &callback) {
            if (callback.is_error()) {
              cerr << "Error registering commands: "
                   << callback.get_error().message << endl;
            } else {
              cout << "Commands registered successfully" << endl;
            }
          });
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
