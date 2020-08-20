/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let cantidadPersonas;
	let lugar;
	let lugarMasElegido;
	let temporada;
	let masPasajeros;
	let promedio;
	let seguir;
	let sexo;
	let SexoTitularMasPasajeros;
	let acumPersonas = 0;
	let bariloche = 0;
	let cataratas = 0;
	let contadorInvierno = 0;
	let salta = 0;
	let flag = 0;

	do{
		sexo = prompt(`Ingreso sexo."femenino" o "masculino"`);
		while(sexo != 'femenino' && sexo != 'masculino'){
			sexo = prompt("Ingrese un sexo valido");
		}
		lugar = prompt("Ingrese el destino deseado(“bariloche”, “cataratas” o “salta”)");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
			lugar = prompt("Ingrese un destino valido(“bariloche”, “cataratas” o “salta” sin mayuscula)");
		}
		temporada = prompt("Ingrese la temporada deseada(“otoño”,”invierno, “verano,”primavera”)");
		while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
			temporada = prompt("Ingrese una temporada valida(“otoño”,”invierno, “verano,”primavera” sin mayuscula)");
		}
		cantidadPersonas = parseInt(prompt("Ingrese la cantidad de pasajeros"));
		while(cantidadPersonas <= 0 || isNaN(cantidadPersonas)){
			cantidadPersonas = parseInt(prompt("Ingrese una cantidad de pasajeros valida(mayor a 0)"));
		}
		switch(lugar){
			case "bariloche":
				bariloche ++;
				break;
			case "cataratas":
				cataratas ++;
				break;
			case "salta":
				salta ++;
				break;
		}
		if(flag == 0){
			masPasajeros = cantidadPersonas;
			SexoTitularMasPasajeros = sexo;
			flag = 1
		}else if(cantidadPersonas > masPasajeros){
			masPasajeros = cantidadPersonas;
			SexoTitularMasPasajeros = sexo;
		}

		if(temporada == "invierno"){
			contadorInvierno ++;
			acumPersonas = acumPersonas + cantidadPersonas;
		}
		seguir = prompt("Desea ingresar otra estadia?(ingrse si/no)");
	}while(seguir == "si");
	if(bariloche > cataratas && bariloche > salta){
		lugarMasElegido = "Bariloche";
    }else if(cataratas >= bariloche && cataratas > salta){
		lugarMasElegido = "Cataratas";
    }else{
		lugarMasElegido = "Salta";
	}
	promedio = acumPersonas / contadorInvierno;
	alert("El lugar mas elegido es: " + lugarMasElegido);
	alert(" El sexo del titular con mas pasajeros es: " + SexoTitularMasPasajeros);
	if(contadorInvierno != 0){
		alert("En invierno el promedio de personas por viaje es: " + promedio);
	}else{
		alert("No se hicieron viajes en invierno"); 
	}
}

