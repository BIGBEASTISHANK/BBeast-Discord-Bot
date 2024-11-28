#pragma once

// Includes
#include <ctime>
#include <iomanip>
#include <sstream>
#include <iostream>
#include <dpp/dpp.h>
#include <dpp/ban.h>
#include <dpp/message.h>
#include <dpp/cluster.h>
#include <dpp/snowflake.h>
#include <dpp/appcommand.h>
#include <dpp/dispatcher.h>
#include <dpp/permissions.h>

// Namespace
namespace bbGlobalVariable {
// Variables
extern const std::string TOKEN;
extern const int EMBED_COLOR;

extern std::chrono::system_clock::time_point now;
extern const time_t CurrentTime;
} // namespace bbGlobalVariable