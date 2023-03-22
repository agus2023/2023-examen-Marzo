function mostrar()
{
	/*Se debe realizar un programa para una envasadora de pinturas. 
	Se cargaran los datos de cada embarque de pintura que llegue a la fabrica para envasarlo en latas. <br>
	Los datos a cargar son los siguientes:*/

	/*tipo de pintura (latex, esmalte y barniz)
		mercado (interno, externo)
		litros (entre 1000 y 4000)*/

		/*La capacidad de las latas es la siguiente:
 		Latex 10 litros, esmalte y barniz 5 litros.*/

		/* El tipo de pintura con mayor cantidad de litros totales.
		 Cuantos embarques de mercado interno y de tipo latex hay.
		 Promedio de litros del mercado externo y tipo latex o esmalte.
		 Cuantas latas se embazaron de latex.
		 Cuantas latas se embazaron en total.*/

	
	
	let nombreApellido;
	let edad;
	let division;
	let genero;
	let posicicion;
	let valordeljugador;
	let acumuladorMasculino=0;
	let contadorjugador=0;
	let promedioMasculino;
	let banderaPrimero=true;
	let nombreApellidoconmayoredad;
	let edadMaxima;
	let acumuladorArquero=0;
	let acumuladordefensor=0;
	let acumuladorMediocampista=0;
	let acumuladorDelantero=0;
	let porcentajearquero;
	let porcentajeDefensor;
	let porcentajeMediocampista;
	let porcentajeDelantero;
	let banderaSegundo=true;
	let nombreApellidoDelmascaro;
	let valormaximo;
	let divisionDelMaximovalor;
	let acumuladorValorreserva=0;
	let acumuladorValortitular=0;
	let acumuladorDolaresreservas=0;
	let acumuladordolarestitular=0;
	let acumuladordepesosTitutar=0;
	let acumuladorPesosreserva=0;
	let montototalreserva;
	let montototaltitular;

	

	for(let i=0;i<22;i++){
		do{
			nombreApellido=prompt("ingrese el  nombre y Apellido ");
	
		}while(!isNaN(nombreApellido) || nombreApellido=="");

		do{
			edad=prompt("ingrese la edad del jugador ");
			edad=parseInt(edad);
		}while(isNaN(edad) ||edad<=14);

		do{
			division=prompt("ingrese la division del jugador");
	
		}while(division !="reserva" && division!="titular");

		do{
			genero=prompt("ingrese el genero del jugador");
	
		}while(genero !="masculino" && genero!="femenino");

		do{
			posicicion=prompt("ingrese la posicicion del jugador");
	
		}while(posicicion !="arquero" && posicicion!="defensor" && posicicion!="mediocampista" && posicicion!="delantero");
        
		do{
			valordeljugador=prompt("ingrese el valor del jugador  ");
			valordeljugador=parseInt(valordeljugador);
		}while(isNaN(valordeljugador) ||valordeljugador<=0);

		if(genero=="masculino"){
			acumuladorMasculino++;

		}

		if(genero=="femenino"){
			if(banderaPrimero==true){
				banderaPrimero=false;
				nombreApellidoconmayoredad=nombreApellido;
				edadMaxima=edad;

			}else{
				if(edad>edadMaxima){
					nombreApellidoconmayoredad=nombreApellido;
				    edadMaxima=edad;
				}
			}
		}

		contadorjugador++;

		switch(posicicion){
			case"arquero":

			if(division=="titular"){
				acumuladorArquero++;
			}
			    break;
			case"defensor":
			if(division=="titular"){
				acumuladordefensor++
			}
				break;
			case"delantero":
			if(division=="titular"){
				acumuladorDelantero++;
			}
			    break;
			case"mediocampista":
			if(division=="titular"){
				acumuladorMediocampista++;
			}
			    break;
		}

		if(banderaSegundo==true){
			banderaSegundo=false;
			valormaximo=valordeljugador;
			nombreApellidoDelmascaro=nombreApellido;
			divisionDelMaximovalor=division;
		}else{
			if(valordeljugador>valormaximo){
				valormaximo=valordeljugador;
			    nombreApellidoDelmascaro=nombreApellido;
			    divisionDelMaximovalor=division;
			}
		}

		if(genero=="masculino"){
			if(division=="titular"){
				acumuladordolarestitular+=valordeljugador;
				acumuladordepesosTitutar+=valordeljugador*376;
				montototaltitular=acumuladordolarestitular*acumuladordepesosTitutar;
			}else{
				acumuladorDolaresreservas+=valordeljugador;
				acumuladorPesosreserva+=valordeljugador*376;
			}
		}
		
		




	
	
	
	







	}
	promedioMasculino=(acumuladorMasculino*contadorjugador)/100;
	porcentajeDefensor=(acumuladordefensor/contadorjugador)*100;
	porcentajeMediocampista=(acumuladorMediocampista/contadorjugador)*100;
	porcentajearquero=(acumuladorArquero/contadorjugador)*100;
	porcentajeDelantero=(acumuladorDelantero/contadorjugador)*100;

	if(acumuladordefensor==0){
		porcentajeDefensor="no hay defensores titulares";
	}else{
		if(acumuladorArquero==0){
			porcentajearquero="no hay arqueros titulares";
		}else{
			if(acumuladorMediocampista==0){
				porcentajeMediocampista="no hay mediocampistas titulares";
			}else{
				if(acumuladorDelantero==0){
					porcentajeDelantero=="no hay delanteros titulares";
				}
			}
		}
	}

	alert("el promedio de los jugadores masculinos es: "+promedioMasculino);
	alert("el nombre y apellido de la jugadora con mayor edad se llama: "+nombreApellidoconmayoredad);
	alert("el porcentaje de arquero es: "+porcentajearquero+ ",porcentaje de defensores "+porcentajeDefensor+ ",porcentaje de mediocampistas "+porcentajeMediocampista+ " y de delanteros "+porcentajeDelantero);
    alert("el nombre y apellido del jugador mas caro es: "+nombreApellidoDelmascaro+ " y su division es "+division);
    
	
	
	
	
	
	
	
	
	
	
	
		 /*let tipoPintura;
	let mercado;
	let litros;
	let respuesta;
	let acumuladoLitroslatex=0;
	let acumuladorLitrosesmalte=0;
	let acumuladorlitrosBarniz=0;
	let tipoConMasLitros;
	let contadorEmbarque=0;
	let acumuladorDeLitrosExterno=0;
	let contadorExterno=0;
	let promedio=0;
	let totalLatex;
	let totalBarnizYesmalte;
	let totalLatas;

	do{
		do{
			tipoPintura=prompt("ingrese el tipoPintura de producto en minuscula");
	
		}while(tipoPintura !="latex" && tipoPintura!="esmalte" && tipoPintura!="barniz");

		do{
			mercado=prompt("ingrese el mercado (interno o externo)");
	
		}while(mercado !="interno" && mercado!="externo");

		do{
			litros=prompt("ingrese las litros");
			litros=parseInt(litros);
		}while(isNaN(litros) ||litros <1000 || litros>4000 );

		switch(tipoPintura){
			case"latex":
			    acumuladoLitroslatex+=litros;
				if(mercado=="interno"){
					contadorEmbarque++
				}else{
					if(mercado=="externo"){
						acumuladorDeLitrosExterno+=litros;
						contadorExterno++
					}
				}
			    break;
			case"esmalte":
			    acumuladorLitrosesmalte+=litros;
				if(mercado=="externo"){
					acumuladorDeLitrosExterno+=litros;
					contadorExterno++
				}
			    break;
			default:
				acumuladorlitrosBarniz+=litros;
		}





		respuesta=confirm("desea ingresar mas datos?");
	}while(respuesta==true);

	promedio=acumuladorDeLitrosExterno/contadorExterno;

	totalLatex=acumuladoLitroslatex/10;
	totalBarnizYesmalte=(acumuladorLitrosesmalte+acumuladorlitrosBarniz)/5;
	totalLatas=totalLatex+totalBarnizYesmalte;





	if(acumuladoLitroslatex>acumuladorLitrosesmalte &&acumuladoLitroslatex>acumuladorlitrosBarniz){
       tipoConMasLitros="latex";
	}else{
		if(acumuladorLitrosesmalte>acumuladorlitrosBarniz){
			tipoConMasLitros="esmalte";

		}else{
			tipoConMasLitros="barniz";
		}
	}

	alert("el tipo con mas litros es: "+tipoConMasLitros+ "<br>");
	alert("la cantidad de embarques internos y de tipo latex son:"+contadorEmbarque+ "<br>");
    alert("el promedio de litros del mercado externo y de tipo latex e barniz es: "+promedio+ "<br>");
    alert("el total de latas latex es de: "+totalLatex+ "<br>");
    alert("la cantidad de latas en total es de: "+totalLatas+ "<br>");*/





	
	
	
	
	
	
	/************************************************************************* */
	
	
		 /*let tipoPintura;
	let mercado;
	let litros;
	let respuesta=true;
	let acumuladorlitrosLatex=0;
	let acumuladorLitrosEsmalte=0;
	let acumuladorlitrosBarniz=0;
	let mayorLitroTotal;
	let contadorEmbarque=0;
	let contadorMercadoexterno=0;
	let acumuladordelitros=0;
	let Promedio;
	let latasLatex;
	let latasEsmalteBarniz;
	let latasTotal;

	do{
		do{
            tipoPintura=prompt("ingrese el tipoPintura de producto en minuscula").toLowerCase();

        }while(tipoPintura !="latex" && tipoPintura!="esmalte" && tipoPintura!="barniz");

		do{
            mercado=prompt("ingrese si mercado es externo o interno en minuscula ").toLowerCase();

        }while(mercado !="interno" && mercado!="externo" );

		do{
            litros=prompt("ingrese el litro");
            litros=parseInt(litros);
        }while(isNaN(litros) ||litros <1000 || litros>4000 );







		switch(tipoPintura){
			case"latex":
			    acumuladorlitrosLatex+=litros;
				if(mercado=="interno"){
					contadorEmbarque++

				}else{
					if(mercado=="externo"){
						contadorMercadoexterno++
						acumuladordelitros+=litros;
					}
				}
			    break;
			case"barniz":
			    acumuladorlitrosBarniz+=litros;
				break;
			default:
				acumuladorLitrosEsmalte+=litros;
				if(mercado=="externo"){
					contadorMercadoexterno++;
					acumuladordelitros+=litros;
				}






		}











		respuesta=confirm("desea ingresar otros datos?");
	}while(respuesta==true);

	if(acumuladorLitrosEsmalte>acumuladorlitrosBarniz && acumuladorLitrosEsmalte>acumuladorlitrosLatex){
       mayorLitroTotal="esmalte"
	}else{
		if(acumuladorlitrosBarniz>acumuladorlitrosLatex){
			mayorLitroTotal="barniz"
		}else{
			mayorLitroTotal="latex"
		}
	}
	
	Promedio=acumuladordelitros/contadorMercadoexterno;

	latasLatex=acumuladorlitrosLatex/10;
	latasEsmalteBarniz=(acumuladorLitrosEsmalte+acumuladorlitrosBarniz)/5;
	latasTotal=latasLatex+latasEsmalteBarniz;




	alert("el tipo con mayor litro es "+mayorLitroTotal+"<br>");
	alert("embarques internos hubo "+contadorEmbarque+ "<br>");
	alert("el promedio de litros del mercado externo es: "+Promedio+ "<br>");
	alert("la cantidad de latas latex  es: "+latasLatex+ "<br>");
	alert("el total de todas las latas  es: "+latasTotal+ "<br>");*/





	/************************************************************* */
	/*
Ejercicio 2:

Apellido:
Nombre:
Comisión:
Tutor:

"El gimnasio ""Te pago la cuota pa no ir"",  quiere medir el progreso de sus clientes y saber quien es el más fuerte.
Debemos pedirle al cliente:
Nombre
Edad(debe ser mayor a 12)
Peso(No debe ser negativo)
Género(masculino, femenino, otro)
Peso levantado en press de banca(No debe ser negativo)
Peso levantado en sentadilla(No debe ser negativo)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) El promedio de peso levantado en sentadilla.
B) El porcentaje de clientes por género
C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca 
D) El genero que mas peso ha levantado en total realizando sentadillas"

*/
/*let edad;
let nombre;
let genero;
let peso;
let pesoEnPressBanca;
let pesoSentadilla;
let respuesta;
let acumuladorDePesosentadilla=0;
let contadorSentadilla=0;
let promedioPesoSentadilla;
let contadorClientes=0;
let acumuladorFemenino=0;
let acumuladormasculino=0;
let porcentajefemenino;
let porcentajemasculino;
let banderaPrimero=true;
let pesoMaximoEnPress;
let nombreConMasPeso;
let pesoelQuelevantasMas;
let acumuladorPesoSentadillaF=0;
let acumuladorpesosentadillaM=0;
let Generoconmaspeso;

do{
	do{
        nombre=prompt("ingrese el  nombre del Comprador");

    }while(!isNaN(nombre) || nombre=="");

	do{
		edad=prompt("ingrese la edad ");
		edad=parseInt(edad);
	}while(isNaN(edad) ||edad<12 );

	do{
		genero=prompt("ingrese el genero de la persona en minuscula ");

	}while(genero !="masculino" && genero!="femenino");

	do{
		peso=prompt("ingrese el peso de la persona");
		peso=parseFloat(peso);
	}while(isNaN(peso) ||peso<0 );

	do{
		pesoEnPressBanca=prompt("ingrese el peso en press banca ");
		pesoEnPressBanca=parseInt(pesoEnPressBanca);
	}while(isNaN(pesoEnPressBanca) ||pesoEnPressBanca<0 );

	do{
		pesoSentadilla=prompt("ingrese el peso en sentadilla ");
		pesoSentadilla=parseInt(pesoSentadilla);
	}while(isNaN(pesoSentadilla) ||pesoSentadilla<12 );

	if(pesoSentadilla>0){
		contadorSentadilla++
		acumuladorDePesosentadilla+=pesoSentadilla;
	}

	if(genero=="femenino"){
		acumuladorFemenino++;
		acumuladorPesoSentadillaF+=pesoSentadilla;

	}else{
		acumuladormasculino++;
		acumuladorpesosentadillaM+=pesoSentadilla;
	}
	contadorClientes++;

	if(banderaPrimero==true){
		banderaPrimero=false;
		nombreConMasPeso=nombre;
		pesoMaximoEnPress=pesoEnPressBanca;
		pesoelQuelevantasMas=peso;


	}else{
		if(pesoEnPressBanca>pesoMaximoEnPress){
			nombreConMasPeso=nombre;
		    pesoMaximoEnPress=pesoEnPressBanca;
		    pesoelQuelevantasMas=peso;
		}
	}











	respuesta=confirm("desea ingrasar los datos de otra persona?")
}while(respuesta==true);

if(acumuladorPesoSentadillaF>acumuladorpesosentadillaM){
   Generoconmaspeso=" el femenino";
}else{
	Generoconmaspeso="el masculino";

}

promedioPesoSentadilla=acumuladorDePesosentadilla/contadorSentadilla;
porcentajefemenino=(acumuladorFemenino/contadorClientes)*100;
porcentajemasculino=(acumuladormasculino/contadorClientes)*100;


alert("el promedio del peso levantado en sentadilla es: "+promedioPesoSentadilla+ "<br>");
alert("el porcentaje de masculino es de: "+porcentajemasculino+ "y del femenino es: "+porcentajefemenino+ "<br>");
alert("el nombre y persona del que levanta mas en press es: "+nombreConMasPeso+ "y su peso es "+pesoelQuelevantasMas+ "<br>");
alert("el genero que levanto mas en sentadilla fue: "+Generoconmaspeso);*/








	
}
