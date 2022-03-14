const funcPromises = require("./funcaoSemPromisse");

function main() {
  try {
    funcPromises(2, 0);
  } catch (error) {
    console.log("erro: %s", error.message);
  }
}
main();
