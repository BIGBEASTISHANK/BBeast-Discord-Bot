#pragma once

// Includes
#include <ctime>
#include <iomanip>
#include <sstream>
#include <dpp/dpp.h>

#include "../globalVariable.h"

// Namespaces
using namespace std;

namespace bbFunc
{
    string CurrentDateTime()
    {
        chrono::system_clock::time_point now = chrono::system_clock::now();
        time_t currentTime = chrono::system_clock::to_time_t(now);
        tm *localTime = localtime(&currentTime);
        ostringstream timeStr;
        timeStr << put_time(localTime, "%I:%M %p");

        return timeStr.str();
    }
}

// Variables
const string BOT_TOKEN = bbGlobalVariable::TOKEN;
