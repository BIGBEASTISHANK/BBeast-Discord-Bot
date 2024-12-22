#include "pp.h"
#include <variant>

void ppCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Variables
  dpp::snowflake userId;

  try {
    userId = get<dpp::snowflake>(event.get_parameter("user"));
  } catch (bad_variant_access) {
    userId = event.command.get_issuing_user().id;
  }

  // Sending embed message
  dpp::embed embed =
      dpp::embed()
          .set_title("PP Calculator")
          .set_description("<@" + to_string(userId) + ">'s PP size is\n**8" +
                               []() -> string {
            int randomNum = bbGlobalVariable::randomNumGen(2, 10);

            string size{""};
            for (int i{0}; i < randomNum; i++)
              size += "=";

            return size;
          }() + "D**")
          .set_color(bbGlobalVariable::EMBED_COLOR)
          .set_timestamp(bbGlobalVariable::CurrentTime);
  event.reply(dpp::message().add_embed(embed));
}