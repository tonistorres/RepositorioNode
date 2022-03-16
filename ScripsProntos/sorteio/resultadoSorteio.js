const resultadoDoSorteio = (numeroSorteado, numeroDigitado) => {
  if (numeroSorteado === numeroDigitado) {
    return `Parabéns, número correto!`;
  } else {
    return `Opa, não foi dessa vez. O número era-->> ${numeroSorteado}`;
  }
};


module.exports=resultadoDoSorteio;