$(document).ready(function() {
  // alert("I'm hungry"); 
	
	// set a variable to a string
	var firstName = 'Kristen';
	var lastName = 'Korfitzen'; 
	
	// set a variable to an integer. 
	var age = 26;
	
	//alert('My name is' + ' ' + firstName + ' ' + lastName + '.');
	//alert('My age is ' + age + '. ' + 'Next year I will be ' + (age + 1));
	
	$('#image-slideshow').cycle({
		timeout: 200
	});
	
});
