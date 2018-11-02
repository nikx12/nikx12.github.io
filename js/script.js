function myFunction() {
		    var x = document.getElementById("snackbar");
		    x.className = "show";
		    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		}

		
		$('document').ready(function(){

		  // Add smooth scrolling to all links
		  $(".links").on('click', function(event) {
		  	//console.log("Clicked the link");
		  	$('#second').addClass('border-bottom');

		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;

		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      $('html, body').animate({
		        scrollTop: $(hash).offset().top
		      }, 900, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        window.location.hash = hash;
		      });
		       setTimeout(function(){
	            $('#second').removeClass('border-bottom');
			    }, 3000);

		    } // End if
		  });
		});
