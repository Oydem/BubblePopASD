<?php 

    $ScrD = $_POST["ScrD"];

    echo $ScrD;
    
    $json = json_encode($ScrD);
    file_put_contents('child/Draglevel_screendata.txt', $json, FILE_APPEND);
?>