var form = document.querySelector('.form');
var button = document.querySelector('.button');
var fields = document.querySelectorAll('.field');
var inputs = document.querySelectorAll('input');

function validateEmail(email) {
   var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

   return re.test(String(email).toLowerCase());
  }

function validatePhone(phone) {
   let re = /[0-9-\s+]/;

 	return re.test(phone);
}

function validateName(name) {
   let re = /[А-Яа-яЁё-\s]/;
   return re.test(name);
  }


form.addEventListener('submit', function(event){

	event.preventDefault()

	var name = document.querySelector('.feedback_form #name').value;
	var phone = document.querySelector('.feedback_form #phone').value;
	var email = document.querySelector('.feedback_form #email').value;

	var errors = document.querySelectorAll('.error');

	for(var i = 0; i < errors.length; i++)
	{
		error[i].remove();
	}

	for(var i = 0; i < fields.length - 1; i++)
	{
		if(!fields[i].value)
		{
			var error = document.createElement('span');
			error.className = 'error';

			inputs[i].className = 'errored_field';
			error.innerHTML = 'Поле должно быть заполнено';
			form[i].parentElement.insertBefore(error,fields[i]);
		}
	}

	if (fields[2].value && !validateEmail(email)) {

      var error = document.createElement('span');
			error.className = 'error';

			inputs[2].className = 'errored_field';
			error.innerHTML = 'Email введен не корректно';
			form[2].parentElement.insertBefore(error,fields[2]);
    }

    if (fields[1].value && !validatePhone(phone)) {

      var error = document.createElement('span');
			error.className = 'error';

			inputs[1].className = 'errored_field';
			error.innerHTML = 'Телефон введен не корректно';
			form[1].parentElement.insertBefore(error,fields[1]);
    }

    if (fields[0].value && !validateName(name)) {

      var error = document.createElement('span');
			error.className = 'error';

			inputs[0].className = 'errored_field';
			error.innerHTML = 'Имя введено не корректно';
			form[0].parentElement.insertBefore(error,fields[0]);
    }

})

button.addEventListener("mouseenter", function(event){
  button.className = 'mouse_enter';
})
button.addEventListener("mouseleave", function(event){
  button.className = 'button';
})
