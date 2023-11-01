function determinarTransporte(distancia) {
  if (distancia < 1000) {
    return "pie";
  } else if (distancia >= 1000 && distancia < 10000) {
    return "bicicleta";
  } else if (distancia >= 10000 && distancia < 30000) {
    return "colectivo";
  } else if (distancia >= 30000 && distancia < 100000) {
    return "auto";
  } else {
    return "avión";
  }
}
console.log(determinarTransporte(500)); // Output: "pie"
console.log(determinarTransporte(5000)); // Output: "bicicleta"
console.log(determinarTransporte(20000)); // Output: "colectivo"
console.log(determinarTransporte(70000)); // Output: "auto"
console.log(determinarTransporte(200000)); // Output: "avión"
