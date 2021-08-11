<?php

include "db_config.php";

function getArticles($connection) 
{
    $articles = [];
    $query = "SELECT * FROM  fact_articles";

    $result = mysqli_query($connection, $query)
        or die(mysqli_error($connection) . " query: $query at getArticles()");
    
    while ($row = mysqli_fetch_array($result)) {
        $articles[] = $row;
    } 

    return $articles;
}

$articles = getArticles($connection);

header('Content-Type: application/json');
echo json_encode($articles);