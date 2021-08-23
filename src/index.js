module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [
    "[",
    "(",
    "|",
    "{",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ];
  const BRACKETS_MAP = {
    ["]"]: "[",
    [")"]: "(",
    ["|"]: "|",
    ["}"]: "{",
    ["1"]: "1",
    ["2"]: "2",
    ["2"]: "1",
    ["3"]: "3",
    ["4"]: "4",
    ["4"]: "3",
    ["5"]: "5",
    ["6"]: "6",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_MAP[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
