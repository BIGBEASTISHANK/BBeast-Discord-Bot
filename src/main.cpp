#include "./main.h"

int main()
{
  // Instantiating bot
  dpp::cluster bot(BOT_TOKEN);

  bot.on_log(dpp::utility::cout_logger());

  // On slashcommand event
  bot.on_slashcommand([&bot](const dpp::slashcommand_t &event)
                      {
    // Ping command
    if (event.command.get_command_name() == "ping") {
      // Variables
      ostringstream ping;

      // Logics
      ping << fixed << setprecision(0) << bot.rest_ping * 1000;

      dpp::embed embed = dpp::embed()
      .set_color(bbGlobalVariable::EMBED_COLOR)
      .set_title("Ping")
      .set_description("Latency: " + ping.str() + "ms")
      .set_footer("Time: " + bbFunc::CurrentDateTime(), "");

      dpp::message msg(event.command.channel_id, embed);
      event.reply(msg);
    }

    // Confess Command 
    else if (event.command.get_command_name() == "confess") {
      string paraMsg = get<string>(event.get_parameter("message"));

      dpp::embed embed = dpp:: embed()
      .set_color(bbGlobalVariable::EMBED_COLOR)
      .set_title("Anonymous Confession!")
      .set_description(paraMsg)
      .set_footer("Time: " + bbFunc::CurrentDateTime(), "");

      dpp::message msg(event.command.channel_id, embed);
      event.reply("");
      bot.message_create(msg);
    } });

  // On ready event
  bot.on_ready([&bot](const dpp::ready_t &event)
               {
    if (dpp::run_once<struct clear_bot_commands>()) {
      // Registring slash command
      dpp::slashcommand ping("ping", "Get ping of bot", bot.me.id); // Ping

      dpp::slashcommand confess("confess", "Confess your feelings!", bot.me.id); // Confess
      confess.add_option(dpp::command_option(dpp::co_string, "message", "Give a message to send it anonymously in this channel!", true));

      bot.global_bulk_command_create({ping, confess}); // Creating slash command
    };

    // Outputing when bot is ready
    cout << "Bot is ready" << endl; });

  // Startimg bot
  bot.start(dpp::st_wait);
}