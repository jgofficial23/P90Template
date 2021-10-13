
function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    //Create player2_name variable and store the value from the input with ID player2_name_input
  
      localStorage.setItem("player1_name", player1_name);
     //locally store the variable player2_name
  
      window.location = "game_page.html";
  }
  
  