#include "./main.h"

int main()
{
  // Instantiating bot
  dpp::cluster bot(BOT_TOKEN);

  // Logger
  bot.on_log(dpp::utility::cout_logger());

  // On slashcommand event
  bot.on_slashcommand([&bot](const dpp::slashcommand_t &event)
                      {
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
      event.reply(msg);
    }

    // Confess Command
    else if (event.command.get_command_name() == "confess") {
      // Variables
      string paraMsg = get<string>(event.get_parameter("message"));

      // Embeds
      dpp::embed embed =
          dpp::embed()
              .set_color(bbGlobalVariable::EMBED_COLOR)
              .set_title("Anonymous Confession!")
              .set_description(paraMsg)
              // .set_footer("Time: " + bbFunc::CurrentDateTime(), "");
              .set_timestamp(bbGlobalVariable::CurrentTime);

      // Sending msg
      dpp::message msg(event.command.channel_id, embed);
      event.reply("");
      bot.message_create(msg);
    }

    // Ban command
    else if (event.command.get_command_name() == "ban") {
      // Variables
      string reason = get<string>(event.get_parameter("reason"));
      dpp::snowflake userTB = get<dpp::snowflake>(event.get_parameter("user"));
      uint32_t temp;
      bot.guild_ban_add(event.command.guild_id, userTB, temp);
      cout<<temp;
      event.reply("banned");
    } });

  // On ready event
  bot.on_ready([&bot](const dpp::ready_t &event)
               {
    if (dpp::run_once<struct clear_bot_commands>()) {
      // Registring slash command

      // Ping
      dpp::slashcommand ping("ping", "Get ping of bot", bot.me.id);

      // Confess
      dpp::slashcommand confess("confess", "Confess your feelings!", bot.me.id);
      confess.add_option(dpp::command_option(
          dpp::co_string, "message",
          "Give a message to send it anonymously in this channel!", true));

      // Ban
      dpp::slashcommand ban("ban", "Slowdown chat", bot.me.id);
      ban.set_default_permissions(
          dpp::p_ban_members); // checking for permission
      ban.add_option(
          dpp::command_option(dpp::co_user, "user", "User to ban", true));
      ban.add_option(
          dpp::command_option(dpp::co_string, "reason", "reason to ban", true));

      bot.global_bulk_command_create(
          {ping, confess, ban}); // Creating slash command
    };

    // Outputing when bot is ready
    cout << "Bot is ready" << endl;

    // Setting bot online status
    bot.set_presence(
        dpp::presence(dpp::ps_dnd, dpp::at_game, "with discord servers")); });

  // Startimg bot
  bot.start(dpp::st_wait);
}