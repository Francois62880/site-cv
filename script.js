/************************* Intro ****************************************/

$(function(){
    var welcomeSection = $('.welcome-section'),
    enterButton= welcomeSection.find('.enter-button');

    setTimeout(function(){
        welcomeSection.removeClass('content-hidden');
    },800);
    enterButton.on('click', function(e){
        e.preventDefault();
        welcomeSection.addClass('content-hidden').fadeOut();
    })
})

/************************* Compétences ****************************************/

// bar de progression

$(document).ready(function() {
	$('.progress .progress-bar').css("width",
			  function() {
				  return $(this).attr("aria-valuenow") + "%";
			  }
	  )
  });


/************************* contact ****************************************/
$(function(){
    $("#button").click(function(){
       $("#blockContact").hide(800);
       $('#blockadress').addClass("mouve");
       $('#info').text("Cette fonctionnalité évoluera avec ma formation. Merci de votre compréhension.")
    })
})

/************************* accueil ****************************************/

var accueil = "Développeur web et web mobile. J\'aime imaginer et concevoir des sites internet. Ensemble faisons d\'internet un endroit merveilleux.";
var str = accueil.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(run); 
var run = setTimeout(animate, 90);
})();
