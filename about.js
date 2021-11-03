console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}

function getAlert(image) {
	alert("You and this duck are awesome!");
  }

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);