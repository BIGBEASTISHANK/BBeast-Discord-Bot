#include "calculator.h"
#include <stack>

// Precedence of operators
int precedence(char op) {
  if (op == '+' || op == '-')
    return 1;
  if (op == '*' || op == '/')
    return 2;
  return 0;
}

// Applying operator
int applyOp(int a, int b, char op) {
  switch (op) {
  case '+':
    return a + b;
  case '-':
    return a - b;
  case '*':
    return a * b;
  case '/':
    return a / b;
  }
  return 0;
}

// Evaluating the expression
int evaluate(string expression) {
  stack<int> values;
  stack<char> ops;

  // Pushing values and operators to stack
  for (int i = 0; i < expression.length(); i++) {
    if (expression[i] == ' ')
      continue;

    // If it is a number
    if (isdigit(expression[i])) {
      int num = 0;
      while (i < expression.length() && isdigit(expression[i])) {
        num = num * 10 + (int)(expression[i] - '0');
        i++;
      }
      i--;
      values.push(num);
    } else if (expression[i] == '(') {
      ops.push(expression[i]);
    } else if (expression[i] == ')') {
      // Popping operators until '(' is found
      while (!ops.empty() && ops.top() != '(') {
        int val2 = values.top();
        values.pop();
        int val1 = values.top();
        values.pop();
        char op = ops.top();
        ops.pop();
        values.push(applyOp(val1, val2, op));
      }
      ops.pop();
    } else {
      // Popping operators until the precedence of the current operator is
      // greater than or equal to the precedence of the operator at the top of
      // the stack
      while (!ops.empty() &&
             precedence(ops.top()) >= precedence(expression[i])) {
        int val2 = values.top();
        values.pop();
        int val1 = values.top();
        values.pop();
        char op = ops.top();
        ops.pop();
        values.push(applyOp(val1, val2, op));
      }
      ops.push(expression[i]);
    }
  }
  // Popping the remaining operators
  while (!ops.empty()) {
    int val2 = values.top();
    values.pop();
    int val1 = values.top();
    values.pop();
    char op = ops.top();
    ops.pop();
    values.push(applyOp(val1, val2, op));
  }

  // Returning the result
  return values.top();
}

void calculatorCommand(const dpp::slashcommand_t &event, dpp::cluster &bot) {
  // Getting expression
  string expression = get<string>(event.get_parameter("expression"));

  // Embed
  dpp::embed embed =
      dpp::embed()
          .set_color(bbGlobalVariable::EMBED_COLOR)
          .set_title("Calculator")
          .set_description("```js\n" + expression + "\n```")
          .add_field("Result", "`" + to_string(evaluate(expression)) + "`",
                     true)
          .set_timestamp(bbGlobalVariable::CurrentTime);

  // Replying with embed
  event.reply(dpp::message().add_embed(embed));
}