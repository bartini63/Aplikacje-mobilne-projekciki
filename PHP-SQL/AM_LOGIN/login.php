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
        $Message = "Wpisałeś złe dane";
    } else {
        $Message = "Zalogowano pomyślnie";
    }
} else {
    $Message = "Nie masz jeszcze konta!";
}

$response[] = array("Message" => $Message);
echo json_encode($response);