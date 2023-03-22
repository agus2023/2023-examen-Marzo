/**
 * 
 * Se debe realizar la carga de 5 ventas de productos de almacen, los datos a cargar de cada producto son:
 * marca (validar que se ingrese un dato), el precio (entre 300 y 2000), las unidades (entre 1 y 10) 
 * y el tipo (yerba, azucar, galletitas)
 * Informar lo siguiente:
 * a) El monto total vendido de yerba.
 * b) La marca y cantidad de unidades de el azucar mas barato.
 * c) Del tipo con mas unidades vendidas el promedio de cada compra.
 * 
 */
function mostrar()
{
  let nombre;
  let tipoDevehiculo;
  let duraciondias;
  let respuesta;
  let acumuladorDiasAlquiladosAuto=0;
  let acumuladorDiasalquiladosCamioneta=0;
  let acumuladorDiasAlquiladosmoto=0;
  let acumuladormontoMoto=0;
  let acumuladormontocamioneta=0;
  let acumuladorMontoAuto=0;
  let porcentaje;
  let promedioAuto;
  let promedioCamioneta;
  let promedioMoto;
  let contadorAuto=0;
  let contadorMoto=0;
  let contadorCamioneta=0;
  let contadorVehiculos=0;
  let banderaPrimero=true;
  let nombreInquilino;
  let cantidadDias;
  let diasMaximo;
  

  do{
    do{
        nombre=prompt("ingrese el  nombre ");

    }while(!isNaN(nombre) || nombre=="");

    do{
        tipoDevehiculo=prompt("ingrese el tipoDevehiculo de producto en minuscula").toLowerCase();

    }while(tipoDevehiculo !="moto" && tipoDevehiculo!="auto" && tipoDevehiculo!="camioneta");


    do{
        duraciondias=prompt("ingrese la cantidad de productos comprados ");
        duraciondias=parseInt(duraciondias);
    }while(isNaN(duraciondias) ||duraciondias <=0);

    switch(tipoDevehiculo){
        case"auto":
            acumuladorDiasAlquiladosAuto+=duraciondias;
            acumuladorMontoAuto+=duraciondias*20000
            contadorAuto++;

            if(duraciondias<7){

            }


            break;
        case "camioneta":
            acumuladorDiasalquiladosCamioneta+=duraciondias;
            acumuladormontocamioneta+=duraciondias*35000
            contadorCamioneta++;
            break;
        default:
            acumuladorDiasAlquiladosmoto+=duraciondias;
            acumuladorDiasAlquiladosmoto*5000;
            contadorMoto++;
    }

    if(banderaPrimero==true){
        banderaPrimero=false;
        nombreInquilino=nombre;
        diasMaximo=duraciondias;
        cantidadDias=duraciondias;
    }else{
        if(duraciondias>diasMaximo){
            nombreInquilino=nombre;
            diasMaximo=duraciondias;
            cantidadDias=duraciondias;
        }
    }

    contadorVehiculos++;






    respuesta=confirm("desea ingresar otros datos?");
  }while(respuesta==true);

  if(acumuladorDiasAlquiladosAuto>acumuladorDiasAlquiladosmoto && acumuladorDiasAlquiladosAuto>acumuladorDiasalquiladosCamioneta){
     porcentaje=(acumuladorDiasAlquiladosAuto/acumuladorMontoAuto)*100;
  }else{
    if(acumuladorDiasalquiladosCamioneta>acumuladorDiasAlquiladosmoto){
        porcentaje=(acumuladorDiasalquiladosCamioneta/acumuladormontocamioneta)*100;

    }else{
        porcentaje=(acumuladorDiasAlquiladosmoto/acumuladormontoMoto)*100
    }
  }


  promedioAuto=contadorAuto/contadorVehiculos;
  promedioCamioneta=contadorCamioneta/contadorVehiculos;
  promedioMoto=contadorMoto/contadorVehiculos;

  document.write("el porcentaje del tipo de vehiculo con mas dias alquilados es: "+porcentaje+ "<br>");
  document.write(" el promedio de los auto es: "+promedioAuto+ " el de camionetas es "+promedioCamioneta+ " y el de motos "+promedioMoto);
  document.write("el nombre del quien alquilo mas dias se llama: "+nombreInquilino+ " y su dias fueron: "+cantidadDias);
  document.write("")


  





















    /* let nombreComprador;
  let edadComprador;
  let cantidadProductoscomprados;
  let totalgastado;
  let metododePago;
  let respuesta;
  let acumuladorEdad=0;
  let contadorComprador=0;
  let promedioEdad;
  let promedioDineroGastado;
  let contadorMenorde25Años=0;
  let acumuladorDeDineroGastado=0;
  let banderaPrimero=true;
  let nombreDelQuemenosgasto;
  let gastoMinimo;
  let totalProductos;
  let porcentaje;
  let acumuladorDinerodebito=0;
  let acumuladorGasto=0;

  do{
    do{
        nombreComprador=prompt("ingrese el  nombre del Comprador");

    }while(!isNaN(nombreComprador) || nombreComprador=="");

    do{
        edadComprador=prompt("ingrese la edad del comprador ");
        edadComprador=parseInt(edadComprador);
    }while(isNaN(edadComprador) ||edadComprador<18 );

    do{
        cantidadProductoscomprados=prompt("ingrese la cantidad de productos comprados ");
        cantidadProductoscomprados=parseInt(cantidadProductoscomprados);
    }while(isNaN(cantidadProductoscomprados) ||cantidadProductoscomprados <=0);

    do{
        totalgastado=prompt("ingrese cuanto gasto en total");
        totalgastado=parseFloat(totalgastado);
    }while(isNaN(totalgastado) ||totalgastado<=0 );

    do{
        metododePago=prompt("ingrese el metododePago de producto en minuscula").toLowerCase();

    }while(metododePago !="efectivo" && metododePago!="debito" && metododePago!="credito");

    acumuladorEdad+=edadComprador;
    contadorComprador++;

    if(edadComprador<25){
        acumuladorDeDineroGastado+=totalgastado;
        contadorMenorde25Años++;
    }

    if(banderaPrimero==true){
        banderaPrimero=false;
        nombreDelQuemenosgasto=nombreComprador;
        gastoMinimo=totalgastado;
        totalProductos=cantidadProductoscomprados;
    }else{
        if(totalgastado<gastoMinimo){
            nombreDelQuemenosgasto=nombreComprador;
            gastoMinimo=totalgastado;
            totalProductos=cantidadProductoscomprados;
        }
    }

    if(metododePago=="debito"){
        acumuladorDinerodebito+=totalgastado;
    }
    acumuladorGasto+=totalgastado;



    
    


    respuesta=confirm("desea ingresar mas datos?");
  }while(respuesta==true);

  promedioEdad=acumuladorEdad/contadorComprador;
  promedioDineroGastado=acumuladorDeDineroGastado/contadorMenorde25Años;
  porcentaje=(acumuladorDinerodebito/totalgastado)*100;

  document.write("el promedio de edad entre los compradores es de : "+promedioEdad+ "<br>");
  document.write("el promedio de plata gastada por personas menores de 25 es de: "+promedioDineroGastado+ "<br>");
  document.write("el que menos gasto se llama "+nombreDelQuemenosgasto+ " y su cantidad de productos es "+totalProductos+ "<br>");
  document.write("el porcentaje del gasto con debito es de un  : "+porcentaje+ "<br>");*/


 /*******************************************************************************************
  * *****************************************************************************************
  */
 
 
 
 
 
 
 
 
 
 
 
    /* let marca;
  let precio;
  let unidades;
  let tipo;
  let montoTotalyerba=0;
  let marcaAzucar;
  let precioMinimo;
  let banderaPrimero=true;
  let unidadesAzucar;
  let acumuladorUnidadesYerba=0;
  let acumuladorUnidadesazucar=0;
  let acumuladorUnidadesGalletitas=0;
  let montoTotalazucar=0;
  let montoTotalGalletitas=0;
  let contadorCompraYerba=0;
  let contadorCompraGalletitas=0;
  let contadorcompraAzucar=0;
  let promedio;


  for(let i=0;i<2;i++){

    do{
        marca=prompt("ingrese la marca del producto");

    }while(!isNaN(marca) || marca=="");

    do{
        precio=prompt("ingrese el precio por bolsa ");
        precio=parseInt(precio);
    }while(isNaN(precio) ||precio <300 || precio>2000 );

    do{
        unidades=prompt("ingrese las unidades");
        unidades=parseInt(unidades);
    }while(isNaN(unidades) ||unidades <1 || unidades>10 );

    do{
        tipo=prompt("ingrese el tipo de producto en minuscula").toLowerCase();

    }while(tipo !="yerba" && tipo!="galletitas" && tipo!="azucar");




    switch(tipo){
        case"yerba":
            montoTotalyerba+=unidades*precio;
            acumuladorUnidadesYerba+=unidades;
            contadorCompraYerba++
            
            break;
        case"azucar":
            if(banderaPrimero==true){
                banderaPrimero=false;
                precioMinimo=precio;
                marcaAzucar=marca;
                unidadesAzucar=unidades;
                acumuladorUnidadesazucar+=unidades;
                montoTotalazucar+=unidades*precio;
                contadorcompraAzucar++
            }else{
                if(precio<precioMinimo){
                    precioMinimo=precio;
                    marcaAzucar=marca;
                    unidadesAzucar=unidades;
                    acumuladorUnidadesazucar+=unidades;
                    montoTotalazucar+=unidades*precio;
                    contadorcompraAzucar++
                }else{
                    acumuladorUnidadesazucar+=unidades;
                    montoTotalazucar+=unidades*precio;
                    contadorcompraAzucar++
                }
            }
            break;
        default:
            acumuladorUnidadesGalletitas+=unidades;
            montoTotalGalletitas+=unidades*precio;
            contadorCompraGalletitas++
    }



  }

  if(acumuladorUnidadesGalletitas>acumuladorUnidadesYerba && acumuladorUnidadesGalletitas>acumuladorUnidadesazucar){
      promedio=montoTotalGalletitas/contadorCompraGalletitas;
  }else{
    if(acumuladorUnidadesYerba>acumuladorUnidadesazucar){
       promedio=montoTotalyerba/contadorCompraYerba;

    }else{
        promedio=montoTotalazucar/contadorcompraAzucar;

    }
  }

  document.write("el monto total de yerba es: "+montoTotalyerba+ "<br>");
  document.write("la marca y las unidades en total  de azucar es: "+marcaAzucar+ " y "+unidadesAzucar+ "<br>");
  document.write("elpromedio de la compra con mas unidades en total es : "+promedio+ "<br>");*/
  
  
  
  
  /*******************************************************************************************
   * ******************************************************************************************
   */
  
  
  
  
  
  
    /* let marcaProducto;
    let precio;
    let unidades;
    let tipo;
    let montoTotalYerba=0;
    let minimoAzucar;
    let marcaAzucar;
    let cantidadAzucar;
    let banderaPrimero=true;
    let maximoDeUnidadesvendidas;
    let unidadesVendidasAzucar;
    let unidadesVendidasGalletitas;
    let unidadesvendidasYerba;
    let promedioCompra;
    let contadoryerba=0;
    let contadorGalletitas=0;
    let contadorazucar=0;
    let acumuladorCompraYerba=0;
    let acumuladorCompraGalletitas=0;
    let acumuladorCompraAzucar=0;


    for(let i=0; i<3;i++){
        do{
            marcaProducto=prompt("ingrese la marca del producto");

        }while(!isNaN(marcaProducto) || marcaProducto=="");

        do{
            precio=prompt("ingrese el precio por bolsa");
            precio=parseInt(precio);
        }while(isNaN(precio) ||precio <300 || precio>2000 );

        do{
            unidades=prompt("ingrese las unidades ");
            unidades=parseInt(unidades);

        }while(isNaN(unidades)|| unidades <=0 || unidades>10);

        do{
            tipo=prompt("ingrese el tipo de producto en minuscula").toLowerCase();

        }while(tipo !="yerba" && tipo!="azucar" && tipo!="galletitas");

      

        switch(tipo){
            case "yerba":
                montoTotalYerba+=unidades*precio;
                unidadesvendidasYerba+=unidades;
                contadoryerba++
                acumuladorCompraYerba+=unidades*precio;
                break;
            case "azucar":
                if(banderaPrimero==true){
                    minimoAzucar=precio;
                    marcaAzucar=marcaProducto;
                    cantidadAzucar=unidades;
                    banderaPrimero=false;
                    unidadesVendidasAzucar+=unidades;
                    contadorazucar++;
                   acumuladorCompraAzucar+=unidades*precio;
                }else{
                    if(precio<minimoAzucar){
                        minimoAzucar=precio;
                        marcaAzucar=marcaProducto;
                        cantidadAzucar=unidades;
                        unidadesVendidasAzucar+=unidades;
                        contadorazucar++;
                        acumuladorCompraAzucar+=unidades*precio;
                    }else{
                        unidadesVendidasAzucar+=unidades;
                        contadorazucar++;
                        acumuladorCompraAzucar+=unidades*precio;
                    }
                }break;
            case "galletitas":
                unidadesVendidasGalletitas+=unidades;
                contadorGalletitas++
                acumuladorCompraGalletitas+=unidades*precio;
                break;


        }



        
    }

    if(unidadesVendidasGalletitas>unidadesvendidasYerba && unidadesVendidasGalletitas>unidadesVendidasAzucar){
       promedioCompra=acumuladorCompraGalletitas/contadorGalletitas;
    }else{
        if(unidadesVendidasAzucar>unidadesvendidasYerba){
            promedioCompra=acumuladorCompraAzucar/contadorazucar;

        }else{
            promedioCompra=acumuladorCompraYerba/contadoryerba;
        }
    }

    if(banderaPrimero==true){
        marcaAzucar="no se ingreso compras para saber el tipo mas barato";
        cantidadAzucar="unidades no hay nada porque no se registro";
    }

    document.write("el monto total de yerba es "+montoTotalYerba+ "<br>");
    document.write("la marca y cantidad del azucar mas barato es: "+marcaAzucar+ "y de "+cantidadAzucar+ "<br>" );
    document.write("tipo con mas unidades vendidas y su promedio por compra es "+promedioCompra);
    */
    
    
    
    
    
   
}
