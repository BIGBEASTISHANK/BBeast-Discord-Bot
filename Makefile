# Compiler and flags
CC = g++
CFLAGS = -ldpp -std=c++17 -I$(SRC_DIR)
LDFLAGS = -ldpp

# Directories
SRC_DIR = ./src
OBJ_DIR = ./obj
COMMANDS_DIR = $(SRC_DIR)/commands

# Find all source files recursively
SOURCES = $(wildcard $(SRC_DIR)/*.cpp) $(wildcard $(COMMANDS_DIR)/*.cpp)
OBJECTS = $(SOURCES:$(SRC_DIR)/%.cpp=$(OBJ_DIR)/%.o)

# Output binary
TARGET = dppbot

# Default target
all: $(TARGET)

run: $(TARGET) ; ./dppbot

# Linking target
$(TARGET): $(OBJECTS)
	@echo "Linking object files into the final executable..."
	@$(CC) $(LDFLAGS) $(OBJECTS) -o $(TARGET)
	@echo "Done!"

# Compilation of source files
$(OBJ_DIR)/%.o: $(SRC_DIR)/%.cpp
	@echo "Compiling $< into $@..."
	@mkdir -p $(dir $@)  # Ensure the object directory exists, including subdirectories
	@$(CC) $(CFLAGS) -c $< -o $@

# Compilation of command source files
$(OBJ_DIR)/commands/%.o: $(COMMANDS_DIR)/%.cpp
	@echo "Compiling command file $< into $@..."
	@mkdir -p $(dir $@)  # Ensure the commands object directory exists
	@$(CC) $(CFLAGS) -c $< -o $@

# Clean target
clean:
	@echo "Cleaning up object files and the final executable..."
	@rm -rf $(OBJ_DIR) $(TARGET)
	@echo "Done!"

# Phony targets (prevent conflicts with files named clean or all)
.PHONY: all clean