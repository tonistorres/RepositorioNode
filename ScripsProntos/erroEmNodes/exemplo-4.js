function server() {
    setInterval(() => {
      console.log("servidor rodando");
      main();
    }, 500);
  }
  
  // disparando um erro
  function main() {
    try {
      simuladorApi();
    } catch (error) {
      console.log(error.message);
    }
  }
  
  function simuladorApi(){
      setTimeout(()=>{
          throw new Error('erro assíncrono');
      });
  }

  server();
  