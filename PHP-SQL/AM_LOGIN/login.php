<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['UserPw'] != $UserPW) {
        $Message = "Zostaly podane zle dane!";
    } else {
        $Message = "Udalo Ci sie zalogowac pomyslnie!";
    }
} else {
    $Message = "Takie konto jeszcze nie istnieje!";
}

$response[] = array("Message" => $Message);
echo json_encode($response);