#include "globalVariable.h"
#include "../env.h"

namespace bbGlobalVariable {

const std::string TOKEN = bbenv::TOKEN; // Enter your token here
const int EMBED_COLOR = 0x00f2ff;

std::chrono::system_clock::time_point now = std::chrono::system_clock::now();
const time_t CurrentTime = std::chrono::system_clock::to_time_t(now);
} // namespace bbGlobalVariable