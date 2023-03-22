function mostrar()
{
    /*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion (hasta que el cliente quiera).
    Los datos a cargar son los siguientes:

    Tipo ("arena", "cal", "cemento")
    Cantidad de bolsas
    Precio por bolsa (entre 1000 y 3000 )
    Para calcular el importe total se debe saber lo siguiente:
    Si el monto de la compra supera los $15000 obtiene un descuento de 10%.
    Si el monto de la compra supera los $25000 obtiene un descuento de 15%.

    Si el monto de la compra (con descuento) es menor a $14000 se le suma el 21% de iva.
    Si el monto de la compra (con descuento) es mayor o igual a $14000 se le suma el 10% de IVA.
    Informar lo siguiente:

    a)Informar el importe total a pagar (con IVA).
    b)El tipo mas caro (sin descuento ni IVA).
    c)Informar el tipo de la compra de mayor monto (sin descuento ni IVA).
    d) Informar el monto total a pagar (con descuento e IVA).*/

   
    /*let tipo;
    let cantidadbolsas;
    let precioporBolsa;
    let respuesta;
    let acumuladorImporte=0;
    let importeDescuento;
    let precioMaximo;
    let tipoMasCaro;
    let banderaPrimero=true;
    let montoTotalArena=0;
    let montototalCemento=0;
    let montototalCal=0;
    let mayormonto;
    let importetotal;


    do{
        do{
            tipo=prompt("ingrese el tipo de producto en minuscula").toLowerCase();

        }while(tipo !="cemento" && tipo!="arena" && tipo!="cal");

        do{
            cantidadbolsas=prompt("ingrese la cantidad de bolsas ");
            cantidadbolsas=parseInt(cantidadbolsas);
        }while(isNaN(cantidadbolsas) ||cantidadbolsas <0);

        do{
            precioporBolsa=prompt("ingrese el precio por bolsa ");
            precioporBolsa=parseInt(precioporBolsa);
        }while(isNaN(precioporBolsa) ||precioporBolsa <1000 || precioporBolsa>3000 );

        if(banderaPrimero==true){
            banderaPrimero=false;
            precioMaximo=precioporBolsa;
            tipoMasCaro=tipo;
        }else{
            if(precioporBolsa>precioMaximo){
                precioMaximo=precioporBolsa;
                tipoMasCaro=tipo;
            }
        }

        if(tipo=="arena"){
            montoTotalArena+=cantidadbolsas*precioporBolsa;
        }else{
           if(tipo=="cal"){
            montototalCal+=cantidadbolsas*precioporBolsa;
           }else{
            montototalCemento+=cantidadbolsas*precioporBolsa;
           }
        }




        acumuladorImporte+=cantidadbolsas*precioporBolsa;







        respuesta=confirm("desea ingresar otro tipo?")

    }while(respuesta==true);

    if(acumuladorImporte>25000){
        importeDescuento=acumuladorImporte * 0.85
    }else{
       if(acumuladorImporte>15000){
        importeDescuento=acumuladorImporte * 0.9

       }else{
        importeDescuento=acumuladorImporte;
       }
    }

    if(importeDescuento<14000){
        importetotal=importeDescuento*1.21;
    }else{
        if(importeDescuento>=14000){
            importetotal=importeDescuento*1.1;
        }
    }

    if(montoTotalArena>montototalCal && montoTotalArena>montototalCemento){
        mayormonto="arena";

    }else{
        if(montototalCal>montototalCemento){
            mayormonto="cal";
        }else{
            mayormonto="cemento";
        }
    }

    document.write("el importe total con iva y descuento es "+importetotal+ "<br>");
    document.write("el tipo mas caro es "+tipoMasCaro+ "<br>");
    document.write("el mayor monto de compra es "+mayormonto);*/



 //*********************************************************************************** */
    
  








 /*  let tipo;
    let cantidadDeBolsas;
    let precioPorBolsa;
    let respuesta;
    let acumuladorImporte=0;
    let importeTotal;
    let importeDescuento;
    let iva;
    let precioMaximo;
    let tipoMaximo;
    let banderaPrimero=true;
    let acumuladorMontoarena=0;
    let acumuladormontocal=0;
    let acumuladormontocemento=0;
    let mayorMonto;

    do{
        do{
            tipo=prompt("ingrese el tipo de producto").toLowerCase();

        }while(tipo !="cal" && tipo!="cemento" && tipo!="arena");

        do{
            cantidadDeBolsas=prompt("ingrese la cantidad  de bolsas");
            cantidadDeBolsas=parseInt(cantidadDeBolsas);
        }while(isNaN(cantidadDeBolsas) ||cantidadDeBolsas <1);

        do{
            precioPorBolsa=prompt("ingrese el precio por bolsa ");
            precioPorBolsa=parseInt(precioPorBolsa);
        }while(isNaN(precioPorBolsa) ||precioPorBolsa <1000 || precioPorBolsa>3000 );

        if(banderaPrimero==true){   //b)
            banderaPrimero=false;
            precioMaximo=precioPorBolsa;
            tipoMaximo=tipo;
        }else{
            if(precioPorBolsa>precioMaximo){
                precioMaximo=precioPorBolsa;
                tipoMaximo=tipo;
            }
        }

        if(tipo=="arena"){
            acumuladorMontoarena+=cantidadDeBolsas*precioPorBolsa;

        }else{
           if( tipo=="cal"){
            acumuladormontocal+=cantidadDeBolsas*precioPorBolsa;
           }else{
            acumuladormontocemento=cantidadDeBolsas*precioPorBolsa;
           }
        }







        acumuladorImporte+=cantidadDeBolsas*precioPorBolsa;
        respuesta=confirm("quieres ingresar mas datos?");
    }while(respuesta==true);

    if(acumuladorImporte>25000){
        importeDescuento=acumuladorImporte*0.85;


    }else{
        if(acumuladorImporte>15000){
            importeDescuento=acumuladorImporte*0.9

        }else{
            importeDescuento=acumuladorImporte;

        }
    }

    if(importeDescuento<14000){
        
        importeTotal=importeDescuento*1.21;


    }else{
       
        importeTotal=importeDescuento*1.1;

    }

     //a)
    //importeTotal=importeTotal*iva;

     //c)
    if(acumuladorMontoarena>acumuladormontocemento && acumuladorMontoarena>acumuladormontocal){
        mayorMonto="arena"
    }else{
        if(acumuladormontocal>acumuladormontocemento){
            mayorMonto="cal"

        }else{
            mayorMonto="cemento"

        }
    }

    document.write("el importe total a pagar con iva y descuento es "+importeTotal+"<br>");
    document.write("el tipo mas caro es "+tipoMaximo+"<br>");
    document.write("el tipo de mayor monto es "+mayorMonto);*/
}




   











