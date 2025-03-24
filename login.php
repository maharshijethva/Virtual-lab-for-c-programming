
<?php
$conn = mysqli_connect("localhost", "root", "", "websitelogin");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['login_Btn'])){
  $username = $_POST['username'];
  $password = $_POST['password'];
  
  $stmt = $conn->prepare("SELECT password FROM logindetails WHERE username=?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $stmt->bind_result($resultPassword);
  $stmt->fetch();
  $stmt->close();
  
  if(password_verify($password, $resultPassword)){
    header("Location: mainpage1.html");
  } else {
    echo "<script>
      alert('Login Unsuccessful');
    </script>";
  }
}
?>