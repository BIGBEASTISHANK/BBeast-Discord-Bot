#include "globalVariable.h"
#include "../env.h"

namespace bbGlobalVariable {

const std::string TOKEN = bbenv::TOKEN;
const int EMBED_COLOR = 0x00f2ff;
const long int bugReportChannelId = 1177890074512338984;

// Current time
std::chrono::system_clock::time_point now = std::chrono::system_clock::now();
const time_t CurrentTime = std::chrono::system_clock::to_time_t(now);

// Link variables
std::string botInviteLink = "https://discord.com/oauth2/authorize?client_id=1082013284628176937&permissions=8&integration_type=0&scope=bot";
std::string supportServerLink = "https://bigbeastishank.com/discord";
std::string botSourceCodeLink = "https://github.com/BIGBEASTISHANK/BBeast-Discord-Bot/tree/c++";
} // namespace bbGlobalVariable