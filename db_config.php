<?php

const schemaID = "aurora_creation_task";
const username = "root";
const password = "DellGL#5100";
const server="localhost";

$connection = mysqli_connect(server, username, password, schemaID);
if (!$connection) {
    die('Can\'t connect');
}