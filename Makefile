# Compiler and flags
CC = g++
CFLAGS = -ldpp -std=c++17
LDFLAGS = -ldpp

# Directories
SRC_DIR = ./src
OBJ_DIR = ./obj

# Source and object files
SOURCES = $(wildcard $(SRC_DIR)/*.cpp)
OBJECTS = $(SOURCES:$(SRC_DIR)/%.cpp=$(OBJ_DIR)/%.o)

# Output binary
TARGET = dppbot

# Default target
all: $(TARGET)

# Linking target
$(TARGET): $(OBJECTS)
	@echo "Linking object files into the final executable..."
	@$(CC) $(LDFLAGS) $(OBJECTS) -o $(TARGET)
	@echo "Done!"

# Compilation of source files
$(OBJ_DIR)/%.o: $(SRC_DIR)/%.cpp
	@echo "Compiling $< into $@..."
	@mkdir -p $(OBJ_DIR)  # Ensure the object directory exists
	@$(CC) $(CFLAGS) -c $< -o $@

# Clean target
clean:
	@echo "Cleaning up object files and the final executable..."
	@rm -rf $(OBJ_DIR) $(TARGET)
	@echo "Done!"

# Phony targets (prevent conflicts with files named clean or all)
.PHONY: all clean
