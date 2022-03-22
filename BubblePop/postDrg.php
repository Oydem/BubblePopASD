<?php 

    $Drg = $_POST["Drg"];

    echo $Drg;
    
    $json = json_encode($Drg);
    file_put_contents('child/Drg.txt', $json, FILE_APPEND);
?>