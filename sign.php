<?php 
    include("connection.php");
    include("signup.php")
    ?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <div id="form">
          
          <form name="form" action="signup.php" method="POST">
              <div class="signup"><h1>Registration </h1><br></div>
              <div class="user">Username</div>
              <div class="username">
              
              <input type="text" id="user" name="user" required></br></br></div>
              <div class="email">Email</div>
              <div class="emailmain"><input type="email" id="email" name="email" required></br></br></div>
              <div class="pass">Password</div><div class="password">
              <input type="password" id="pass" name="pass" required></br></br></div>
                <div class="cpass">Confirm Password</div><div class="password1">
              <input type="password" id="cpass" name="cpass" required></br></br></div>
              <input type="submit" id="btn" value="Register" class="signupbtn" name = "submit">
          </form>
          <div class="rectangle-6">
              <div class="welcome-to">Welcome TO...</div
              ><div class="c-programming">C Programming</div>
            <div class="virtual-lab">Virtual Lab</div>
            </div>
    </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>