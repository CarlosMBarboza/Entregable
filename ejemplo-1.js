const edad = prompt('Ingrese su edad ', ' ');

if (Number.isNaN(edad)){
  document.write("Debe ingresar un numero");
}else if(edad >=18){
  document.write(`Usted es mayor de ${edad}`);
}else{
  document.write(`Usted es menor de ${edad}`);
}


