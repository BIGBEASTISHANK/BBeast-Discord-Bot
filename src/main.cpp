#include "main.h"
#include "help.h"

// Type alias for command handler function
using CommandHandler =
    function<void(const dpp::slashcommand_t &, dpp::cluster &)>;

int main() {
  // Instantiating bot
  dpp::cluster bot(BOT_TOKEN);

  // Logger
  bot.on_log(dpp::utility::cout_logger());

  // Create a map of command names to their handler functions
  unordered_map<string, CommandHandler> commandHandlers = {
      {"help", helpCommand},
      {"ping", pingCommand},
      {"confess", confessCommand},
      {"clear", clearCommand},
      {"ban", banCommand},
      {"unban", unbanCommand},
      {"kick", kickCommand},
      {"createtextchannel", createTextChannelCommand},
      {"createvoicechannel", createVoiceChannelCommand},
      {"slowmode", slowmodeCommand},
      {"nickname", nicknameCommand}};

  // On slashcommand event
  bot.on_slashcommand(
      [&bot, &commandHandlers](const dpp::slashcommand_t &event) {
        // Get the command name
        string commandName = event.command.get_command_name();

        // Find the corresponding handler
        auto it = commandHandlers.find(commandName);
        if (it != commandHandlers.end()) {
          // Call the handler function if found
          it->second(event, bot);
        } else {
          // Optional: Handle unknown commands
          event.reply("Unknown command!");
        }
      });

  // On ready event (rest of the code remains the same as in the original
  // implementation)
  bot.on_ready([&bot](const dpp::ready_t &event) {
    // Registring slash command
    if (dpp::run_once<struct clear_bot_commands>()) {
      ///////////////////////
      // Utilities Section //
      ///////////////////////
      // Help
      dpp::slashcommand help("help", "Shows all command avaliable!",
                             bot.me.id);
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

      // Nickname
      dpp::slashcommand nickname("nickname", "Change nickname of user!",
                                 bot.me.id);
      nickname
          .add_option(dpp::command_option(
              dpp::co_user, "user",
              "Whom do you want to change the nickname for?", true))
          .add_option(dpp::command_option(dpp::co_string, "nickname",
                                          "Enter new and sexy nickname!", true))
          .set_default_permissions(dpp::p_manage_nicknames);

      /////////////////////
      // Logical Section //
      /////////////////////
      // Creating bulk command
      vector<dpp::slashcommand> commandList = {
          help,
          ban,
          kick,
          ping,
          unban,
          clear,
          confess,
          slowmode,
          nickname,
          createTextChannel,
          createVoiceChannel,
      };
      bot.guild_bulk_command_create(
          commandList, 791350584597807137,
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