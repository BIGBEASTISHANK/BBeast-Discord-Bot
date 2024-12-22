#pragma once

// Includes
#include <ctime>
#include <dpp/appcommand.h>
#include <dpp/ban.h>
#include <dpp/cluster.h>
#include <dpp/dispatcher.h>
#include <dpp/dpp.h>
#include <dpp/message.h>
#include <dpp/permissions.h>
#include <dpp/snowflake.h>
#include <iomanip>
#include <iostream>
#include <sstream>

// Namespace
namespace bbGlobalVariable {
// Variables
extern const std::string TOKEN;
extern const int EMBED_COLOR;
extern const long int bugReportChannelId;

// Current time
extern std::chrono::system_clock::time_point now;
extern const time_t CurrentTime;

// Link variable
extern std::string botInviteLink;
extern std::string supportServerLink;
extern std::string botSourceCodeLink;

int randomNumGen(int min, int max);
} // namespace bbGlobalVariable

// Command headers
#include "commands/Fun/pp.h"
#include "commands/Fun/calculator.h"

#include "commands/General/confess.h"

#include "commands/Moderation/ban.h"
#include "commands/Moderation/clear.h"
#include "commands/Moderation/createtextchannel.h"
#include "commands/Moderation/createvoicechannel.h"
#include "commands/Moderation/kick.h"
#include "commands/Moderation/nickname.h"
#include "commands/Moderation/slowmode.h"
#include "commands/Moderation/unban.h"

#include "commands/Utility/ping.h"
#include "commands/Utility/serverInfo.h"
#include "commands/Utility/reportBug.h"