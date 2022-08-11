const signUpBtn = document.querySelector('.sign-up__bottom-btn')
const signUpInput = document.querySelector('.sign-up__bottom-input')
const error = document.querySelector('.error')
const checkInput = () => {
	if (signUpInput.value === '') {
		error.style.visibility = 'visible'
	} else {
		error.style.visibility = 'hidden'
	}
}

signUpBtn.addEventListener('click', checkInput)
