#include "serverInfo.h"

void serverInfoCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
    // Embed message to send
    dpp::embed embed = dpp::embed()
        .set_author(event.command.get_guild().name, "", event.command.get_guild().get_icon_url())
        .set_color(bbGlobalVariable::EMBED_COLOR)
        .set_thumbnail(event.command.get_guild().get_icon_url())
        .set_description(event.command.get_guild().description)
        // Fields start
        .add_field("Owner", "<@" + to_string(event.command.get_guild().owner_id) + ">", true)
        .add_field("Members", to_string(event.command.get_guild().member_count), true)
        .add_field("Roles", to_string(event.command.get_guild().roles.size()), true)
        .add_field("Channels", to_string(event.command.get_guild().channels.size()), true)
        .add_field("Emojis", to_string(event.command.get_guild().emojis.size()), true)
        .add_field("Boosts", to_string(event.command.get_guild().premium_subscription_count), true)
        .add_field("Verification Level", to_string(event.command.get_guild().verification_level), true)
        .add_field("System Channel", "<#" + to_string(event.command.get_guild().system_channel_id) + ">", true)
        .add_field("Rules Channel", "<#" + to_string(event.command.get_guild().rules_channel_id) + ">", true)
        // Fields end
        .set_footer(dpp::embed_footer().set_text("ID: " + to_string(event.command.get_guild().id)))
        .set_timestamp(bbGlobalVariable::CurrentTime);
    
    // Sending message
    event.reply(dpp::message().add_embed(embed));
}
