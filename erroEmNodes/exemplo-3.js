function server() {
  setInterval(() => {
    console.log("servidor rodando");
    main();
  }, 500);
}

// disparando um erro
function main() {
  try {
    throw new Error("deu ruim");
  } catch (error) {
    console.log(error.message);
  }
}

server();
