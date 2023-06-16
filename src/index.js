// EXERCÍCIO 01
export function anoBissexto(parameter) {
    
    if (parameter < 0) {
        return "INVALID"
    } else if ((parameter % 4 === 0) && (parameter % 100 !== 0) || (parameter % 400 === 0)){
        return "TRUE"
    } else {
        return "FALSE"
    }
}

// EXERCÍCIO 02
export function pedraPapelTesoura() {

    const opcoes = ["PEDRA", "PAPEL", "TESOURA"]
    const escolhaAleatoria = Math.floor(Math.random() * opcoes.length);
    return opcoes[escolhaAleatoria];

}

// EXERCÍCIO 03
export function checkNumeroPrimo(parameter) {

    if (parameter <= 1) {
        return `INVALID`;
      }
    
      for (let i = 2; i <= Math.sqrt(parameter); i++) {
        if (parameter % i === 0) {
          return `FALSE`;
        }
      }
      return `TRUE`;
    }
