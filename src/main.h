#pragma once

// Includes
#include <string>
#include <cstdint>
#include <dpp/message.h>
#include <dpp/cluster.h>
#include <dpp/appcommand.h>
#include <dpp/dispatcher.h>
#include "../globalVariable.h"

// Namespaces
using namespace std;

// Variables
dpp::cluster bot();
const string BOT_TOKEN = bbGlobalVariable::TOKEN;
