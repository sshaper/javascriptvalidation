"use strict"
class Validate{
	constructor(){
		this.error = false;
	}
	checkElement(id, regEx, message){
		var ele = document.getElementById(id);
		switch(regEx){
			case 'nameRegEx' : this.nameRegEx(ele, ele.value, message); break;
			case 'phoneRegEx' : this.phoneRegEx(ele, ele.value, message); break;
			case 'emailRegEx' : this.emailRegEx(ele, ele.value, message); break;
		}
	}

	nameRegEx(element, value, message){
		if(!/^[a-z-\']{1,50}$/i.test(value)){
			this.error = true;
			this.createErrorMessage(element, message);
		};
	}

	phoneRegEx(element, value, message){
		if(!/[0-9]{9}/.test(value)){
			this.error = true;
			this.createErrorMessage(element, message);
		};
	}

	emailRegEx(element, value, message){
		if(!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value)){
			this.error = true;
			this.createErrorMessage(element, message);
		};
	}

	createErrorMessage(element, message){
		element.previousElementSibling.innerHTML += '<span class="error">'+message+'</span>';
	}

	clearErrors(label){
		var labels = document.getElementsByTagName('label');
		var i = 0;
		while(i < labels.length){
			if(labels[i].lastChild.nodeName.toLowerCase() === 'span'){
				labels[i].removeChild(labels[i].lastChild);
			}
			i++;
		}
	}
	getError(){
		return this.error;
	}
}	