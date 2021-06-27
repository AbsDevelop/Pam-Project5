// This is a JavaScript file

var input;

$(document).on("click", ".letra", function inserirLetras(){
  var letra = $(this).html();
  var nada = $('#input').val();
  var input = nada + letra;
  $('#input').val(input);
    navigator.notification.beep(1);
});

$(document).on("click", "#Dica", function(){
  navigator.notification.alert('“Nem Deus pode afundar esse navio..."', alertCallback, "Dica", "Entendi");
    function alertCallback() {}
});

$(document).on("click", "#Verificar", function(){
  if(input = "TITANIC"){
    navigator.notification.alert('O RMS Titanic foi um navio de passageiros britânico operado pela White Star Line e construído pelos estaleiros da Harland and Wolff, em Belfast. Foi a segunda embarcação da Classe Olympic de transatlânticos, depois do RMS Olympic e seguido pelo HMHS Britannic. E mesmo após 109 anos, mergulhadores se surpreenderam ao encontrar todas as suas piscinas cheias...', alertCallback, "Parabéns", "Ok");  
      function alertCallback() {}
  }
  else{
    navigator.notification.alert("Você errou! Tente de novo...", alertCallback, "Vish", "Sair");
      function alertCallback() {}    
      navigator.vibrate([200, 40, 600]);
  }
});

$(document).on("click", "#Apagar", function(){
  document.getElementById('input').value='';
});