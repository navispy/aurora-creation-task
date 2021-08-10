<?php

include "db_config.php";

$id = $_POST["id"];
$title = $_POST["title"];
$desc = $_POST["desc"];
$calcTime = $_POST["calcTime"];

function updateArticle($id, $title, $desc, $connection) 
{
    
    $query = "UPDATE fact_articles
              SET `Title` = '$title',
              `Description` = '$desc'
              WHERE ID=$id";

    $result = mysqli_query($connection, $query)
        or die(mysqli_error($connection) . " query: $query at updateArticle()");
    
    while ($row = mysqli_fetch_array($result)) {
        $articles[] = $row;
    } 

    return $articles;
}


updateArticle($id, $title, $desc, $connection) ;

echo('{"calcTime":' . $calcTime . '}');