var form = document.querySelector('.form');
var button = document.querySelector('.button');
var fields = document.querySelectorAll('.field');
var inputs = document.querySelectorAll('input');

form.addEventListener('submit', function(event){
	event.preventDefault()
	var name = document.querySelector('.feedback_form #name').value;
	var name = document.querySelector('.feedback_form #phone').value;
	var name = document.querySelector('.feedback_form #mail').value;

	var errors = document.querySelectorAll('.error');

	for(var i = 0; i < errors.length; i++)
	{
		error[i].remove();
	}

	for(var i = 0; i < fields.length - 1; i++)
	{
		if(!fields[i].value)
		{
			console.log('fiels id blank', fields[i]);
			var error = document.createElement('span');
			error.className = 'error';
			inputs[i].className = 'errored_field';
			error.innerHTML = 'Введите данные';
			form[i].parentElement.insertBefore(error,fields[i]);
		}
	}
})