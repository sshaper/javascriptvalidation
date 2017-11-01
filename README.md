# Java Script Validation
This is a simple JavaScript validation class that is useful for doing front end validation only.  It allows you to apply separate validation (via regular expressions) and custom error messages to each element.

NOTE: Frontend validation is good for a end user but is not secure you should always do a backend validation as well.

NOTE: This is written in vanilla JavaScript and need no third party plugins.

How to use:
1. The Validation.js file is a JavaScript class that does the validation.  Currently I only have a few regex (name, email, phone) but you can add whatever ones you want just follow what I have done.  My naming convention is nameRegEx.

2. The main.js file is what validates the form. It first gets the submit button and adds the click event.   The click event function will check all the form fields listed.  To add formfields just enter "validate.checkelement('elementid','regex','error message').  The error message are place in span elements and applied after the label element.

NOTE: I have since created a better validation class that verifies the data on the backend only but uses an AJAX call to send the data, so the user has a better experience yet the security is there.  You can find the code for this at [https://github.com/sshaper/web250_examples/tree/master/php-validation](https://github.com/sshaper/web250_examples/tree/master/php-validation)