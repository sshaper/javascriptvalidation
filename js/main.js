"use strict"
document.getElementsByTagName('form')[0].addEventListener('submit', function(e){
	var validate = new Validate();
	validate.clearErrors();
	validate.checkElement('firstname', 'nameRegEx', 'Not a proper first name');
	validate.checkElement('lastname', 'nameRegEx', 'Not a proper last name');
	validate.checkElement('phone', 'phoneRegEx', 'Phone must be 9 digits 9999999999');
	validate.checkElement('email', 'emailRegEx', 'Not a valid email address');
	if(validate.getError()){
		e.preventDefault();
	}
	else{
		alert('Form ready for submission');
	}
});