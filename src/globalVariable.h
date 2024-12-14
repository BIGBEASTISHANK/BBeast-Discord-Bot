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

extern std::chrono::system_clock::time_point now;
extern const time_t CurrentTime;
} // namespace bbGlobalVariable

// Command headers
#include "commands/ban.h"
#include "commands/clear.h"
#include "commands/confess.h"
#include "commands/createtextchannel.h"
#include "commands/createvoicechannel.h"
#include "commands/kick.h"
#include "commands/nickname.h"
#include "commands/ping.h"
#include "commands/slowmode.h"
#include "commands/unban.h"
#include "commands/avatar.h"
#include "commands/calculator.h"