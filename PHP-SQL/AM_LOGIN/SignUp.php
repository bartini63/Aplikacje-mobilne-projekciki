<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Ten email jest już zarejestrowany. Zaloguj się!";
} else {

    $InsertQuerry = "INSERT INTO newuser(UserEmail, UserPW) VALUES('$UserEmail', '$UserPW')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Udało Ci się zarejestrować! Możesz skorzystać z naszych usług!";
    } else {
        $Message = "Wystąpił błąd";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);