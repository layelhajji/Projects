<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sign up</title>
    <link rel="stylesheet" href="signup.css">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" >
    <style>
      .error-msg{
        color:red;
        margin-top: 100px;
        position:absolute;
        transform: translate(850px,-707px);
      }
    </style>
</head>

    

<body>
	<div class="center">
		<div class="box1">Welcome Back !</div>
		<div class="box2">
            <div class="container">
              <div class="top-header">
                <header>Sign Up</header>
              </div>
              <br>
              <form method="post" name="form">
              <div class="input-field">
                <input type="text" class="input" name="nom" id="nom" required placeholder="  username">
                <i class="fas fa-user"></i>
              </div>
              <br>
            
              <div class="input-field">
                <input type="email" class="input" name="email" id="email" required placeholder="  email">
                <i class="fas fa-envelope"></i>
              </div>
              <br>
              <div class="input-field">
                <input type="text" class="input" name="phone" id="phone" required placeholder="  phone">
                <i class="fas fa-phone"></i>
              </div>
              <br>
              <div class="input-field">
                <input type="password" name="mot_de_passe" id="mot_de_passe" class="input" required onkeyup="checkPassword()" placeholder="  password">
                <i class="fas fa-lock"></i>
              </div>
              <br>
              
              
              
              <div class="bottom">
                <div class="left">
                  <input type="checkbox" id="check">
                  <label for="check">I agree with privacy and policy</label>
                </div>
                
              </div>
              <br>
              <div class="input-field">
                <button type="submit" class="submit" >Sign Up</button>
              </div>
              <br><br>
              
              <div class="msg">
                <div class="left-msg">
                  <label>Already have an account?</label>
                </div>
                <div class="right-msg">
                  <label ><a href="login.php">login</a> </label>
                </div>
                
              </div>
            </form>
            </div>
          </div> 
	</div>
  <div class="border"></div>
  <footer>
    <div class="footer">
        <div class="contact">
         <h2>keep me on touch</h2>
         
         <div class="icons">
            <a href="#" ><i class="fab fa-facebook-f"></i></a>
            <a href="#" ><i class="fab fa-instagram"></i></a>
        </div>
         <br>
         <div class="contact">
            <ul style="list-style-type:none;">
                <li><i class="material-icons">phone</i>+216 70 158 269</li>
                <li><i class="material-icons">email</i>contact@gmail.com</li>
                <li><i class="material-icons">place</i>Campus Mannouba</li>
            </ul>
        </div>
         
        </div>
        <hr>
        <div class="photo">
          <img  class="imag" src="footer.jpg" >
        </div>
 
 
 
    </div>
</footer>
  <?php
// <!-- // Connexion à la base de données MySQL -->
$conn = mysqli_connect('localhost', 'layel', 'layel1234aya1234', 'projet');

// <!-- // Vérification de la connexion -->
if (!$conn) {
    die('Erreur de connexion à la base de données');
}

//  <!-- // Traitement du formulaire d'inscription -->
if (isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['phone']) &&  isset($_POST['mot_de_passe'])) {
    // <!-- // Récupération des données du formulaire -->
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $mot_de_passe = $_POST['mot_de_passe'];

    // <!-- // Insertion des données de l'utilisateur dans la table "utilisateurs" -->
    $query = "INSERT INTO utilisateur (nom, email,phone,mot_de_passe) VALUES ('$nom', '$email','$phone','$mot_de_passe')";
    $result = mysqli_query($conn, $query);

    // <!-- // Vérification de l'insertion -->
    if ($result) {
      echo "<div class='error-msg'>Successful registration</div>";
        }

    } else {
      echo "<div class='error-msg'>Registration error. Try Again.</div>";
    }
  
?>
<script>
// Sélectionner le champ de mot de passe
const passwordField = document.getElementById('mot_de_passe');

// Ajouter un écouteur d'événement à la saisie du clavier
passwordField.addEventListener('keyup', function () {
  // Récupérer la valeur du mot de passe
  const password = passwordField.value;

  // Vérifier si la longueur est d'au moins 8 caractères et s'il contient au moins une lettre majuscule, un nombre et un caractère spécial
  const hasLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = password.match(/[0-9]/);
const hasSpecialChar = password.match(/[!@#$%^&*(),.?":{}|<>]/);
  // Changer la couleur de la bordure en fonction des résultats des vérifications
  if (hasLength && hasUpperCase && hasNumber && hasSpecialChar) {
    passwordField.style.border = 'none';
    passwordField.style.borderColor = 'green';
    passwordField.style.borderStyle = 'solid';
    passwordField.style.borderWidth = '3px';


  } else {
    passwordField.style.borderColor = 'red';
    passwordField.style.borderStyle = 'solid';
    passwordField.style.borderWidth = '3px';
  }
});

</script>

</body>
</html>
