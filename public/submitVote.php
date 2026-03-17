<?php

// Connection to your database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vote";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the selected candidate and category from the form
    $category = $_POST["category"];
    $candidateName = $_POST["candidate_name"];

    // Update vote count in the database
    $sql = "UPDATE votes SET vote_count = vote_count + 1 WHERE category = '$category' AND candidate_name = '$candidateName'";
    $result = $conn->query($sql);

    if ($result === TRUE) {
        echo "Vote submitted successfully";
    } else {
        echo "Error updating vote: " . $conn->error;
    }
}

$conn->close();

?>
