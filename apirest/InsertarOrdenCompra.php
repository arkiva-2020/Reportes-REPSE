<?php
include("../conexion/conexion.php");


if(isset($_FILES["pdf"])){

	function generador($longitud,$letras_min,$letras_may,$numeros,$simbolos){
		
		$variacteres = $letras_min?'abdefghijklmnopqrstuvwxyz':'';
			//Hacemos lo mismo para letras mayúsculas,numeros y simbolos
		$variacteres .= $letras_may?'ABDCEFGHIJKLMNOPQRSTUVWXYZ':'';
			$variacteres .= $numeros?'0123456789':''; //NOTA: En el tutorial puse mal esta variable debe ser -numeros- y no -numero-.
			$variacteres .= $simbolos?'!#$%&/()?¡¿':'';

			//Inicializamos variable $i y $random
			$i = 0;
			$random = '';

			//repetimos el codigo segun la longitud
			while($i<$longitud)
			{
					//Generamos un numero aleatorio
				$numrad = rand(0,strlen($variacteres)-1);
					//Sacamos el la letra al azar
					//La función -substr()- se compone de substr($variable,posición_inicio,longitud de sub cadena);
				$random .= substr($variacteres,$numrad,1);
					//Aumentamos a $i en 1 cada que entramos al while
				$i++;
			}

				//Mostramos la cadena generada por medio de -echo-
			return $random;

	}

	$random=generador(10,true,true,true,false);
	    
    
    $id=$_REQUEST['id'];    

    $filename = $_FILES['pdf']['name'];
    $temp = $_FILES['pdf']['tmp_name'];
    
    $explode    =   explode('.', $filename);
    $extension  =   array_pop($explode);
	$compra		= 	"Orden De Compra";
    $result     =   $compra.'_'.$random.'.'.$extension;
    

    move_uploaded_file($temp, '../documentos/orden-de-compra-emitida/'.$result); 
            
	$sql="EXECUTE InsertarOrdenDeCompra N'Orden De Compra: $random', N'$id' ";    
    $ejecutar=sqlsrv_query($con, $sql);

    echo '1';
} else {
    echo '2';
}




?>