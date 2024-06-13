<?php
    $conexion= mysqli_connect('localhost', 'root', '', 'clientes') or die(mysql_error($mysqli));

    insertar($conexion);

    function insertar($conexion){
        $id_cliente= $_POST['id_cliente'];
        $nombre= $_POST['nombre'];
        $producto= $_POST['producto'];
        $cantidad= $_POST['cantidad'];

        $consulta= "INSERT INTO clientes (id_cliente, nombre, producto, cantidad) VALUES ('$id_cliente', '$nombre', '$producto', '$cantidad')";
        mysqli_query($conexion, $consulta);
        mysqli_close($conexion);
     }
?>