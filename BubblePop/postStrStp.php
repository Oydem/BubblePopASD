<?php 

    $StrStp = $_POST["StrStp"];

    echo $StrStp;
    
    $json = json_encode($StrStp);
    file_put_contents('child/StrStp.txt', $json, FILE_APPEND);
?>