/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let acumuladorEdad = 0;
	let promedio;
	let flag = 0;
	let HombreMasPesado;
	let MasPesado = 0;
	
	for(let i = 0;i < 5;i++){


		nombre = prompt("Ingrese nombre");
		while(nombre == ""){
			nombre = prompt("Ingrese el nombre nuevamente");
		}
		edad = parseInt(prompt("Ingrese edad"));
		while(edad <= 0 || isNaN(edad)){
		edad = parseInt(prompt("Ingrese una edad valida"));
		}
		acumuladorEdad += edad;
		sexo = prompt(`Ingreso sexo."femenino" o "masculino"`);
		while(sexo != 'femenino' && sexo != 'masculino'){
			sexo = prompt("Ingrese un sexo valido");
		}
		peso = parseFloat(prompt("Ingrese su peso"));
			while(peso <= 0 || isNaN(peso)){
				peso = parseFloat(prompt("Ingrese un peso valido"));
			}

		if(sexo == "f"){
			contadorMujeres++;
			}
	if(sexo == "m"){

		if( flag == 0){
			MasPesado = peso;
			HombreMasPesado = nombre;
				flag = 1;
			}else if(peso > MasPesado){
				HombreMasPesado = nombre;
				MasPesado = peso;
				}
		}
}
	promedio = acumuladorEdad / 5;
	console.log("la cantidad de mujeres es: " + contadorMujeres);
	console.log("La edad promedio total es: " + promedio);
	console.log("El hombre con mas peso es: " + HombreMasPesado);
}
