// Project 3 - Interactive Form

/********************Name Field********************/
const nameInput = document.getElementById("name");
//Setting the focus to the name field whe the page is loaded
nameInput.focus();


/********************Job Role Section********************/
const jobRoleInput = document.getElementById("title");
const otherJobRoleInput = document.getElementById("other-job-role");
//Input for other job is hidden
otherJobRoleInput.style.visibility = 'hidden';
//If other is selected from the drop down menu, other job role section becomes visible
jobRoleInput.addEventListener('click', (e) => {
    if (e.target.value === 'other') {
        otherJobRoleInput.style.visibility = 'visible';
    } else {
        otherJobRoleInput.style.visibility = 'hidden';; 
    }
});


/********************T-shirt Section********************/
const designInput = document.getElementById("design");
const colorInput = document.getElementById("color");
//Colour option is disabled 
colorInput.disabled = true ;

designInput.addEventListener('change', (e) => {
    colorInput.disabled = false ;
    for (let i = 0 ; i < colorInput.length; i++) {
        //Conditional (Ternary Operator)
        colorInput.value = colorInput[i].value ? 'Select a design theme above': colorInput[i].value;
        //Conditional - If a design is chosen, the colour option is enabled with relevant colours
        if (e.target.value === colorInput[i].getAttribute('data-theme')){             
            colorInput[i].hidden = false;           
        } else {
            colorInput[i].hidden = true;
        }
    }
});


/********************Activities Section********************/
const activities = document.getElementById('activities');
const finalCost = document.getElementById('activities-cost');
let totalCost = 0;
//Event listener that adds up total charges of activities
activities.addEventListener('change', (e) => {
    const activityCost =+ e.target.getAttribute('data-cost');
        if (e.target.checked) {
            totalCost += activityCost;
        } else {
            totalCost -= activityCost;
        }
    finalCost.textContent = `Total: $${totalCost}`;
})


/********************Payment Section********************/
const paymentOption = document.getElementById('payment');
paymentOption.children[1].setAttribute('selected', true);
const creditCard = document.getElementById('credit-card');
creditCard.style.display = '';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display = 'none';
const paypal = document.getElementById('paypal');
paypal.style.display = 'none';

//Event listenter for a change in the payement option. 
paymentOption.addEventListener('change', (e) => {
    const selectedPayment = e.target.value;
//Conditional to display correct styles depending on payment option selected
    if (selectedPayment === 'bitcoin') {
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (selectedPayment === 'paypal') {
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else {
        paypal.style.display = 'none';
        bitcoin.style.display = 'none'; 
        creditCard.style.display = 'block';
    }
})

/********************Form Validation Section********************/
const emailInput = document.getElementById('email');
const cardNumberInput = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const form = document.querySelector('form');

//Helper functions

function isValidName () {
    //Validating name field cannot be blank
    const nameRegEx = /^[\w]+\s*[\w]+$/.test(nameInput.value);
    //Conditional to apply relevant styles depedning on user input 
    if (nameRegEx === true) {
        nameInput.parentNode.className='valid';
        nameInput.parentNode.lastElementChild.style.display = 'none';
        return nameRegEx
    } else {
        nameInput.parentNode.className='not-valid';
        nameInput.parentNode.lastElementChild.style.display = 'block';
        nameInput.parentNode.lastElementChild.textContent = 'Invalid input. This field cannot be blank and must only contain letters.'
        return nameRegEx
    }
}

function isValidEmail () {
    //Validating email is in the format 'input' + '@' + 'input' + '.' + 'input'
    const emailRegEx =  /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
    //Conditional to apply relevant styles depedning on user input 
    if (emailRegEx === true) {
        emailInput.parentNode.className='valid';
        emailInput.parentNode.lastElementChild.style.display = 'none';
        return emailRegEx
    } else {
        emailInput.parentNode.className='not-valid';
        emailInput.parentNode.lastElementChild.style.display = 'block';
        emailInput.parentNode.lastElementChild.textContent = 'Invalid input. Please enter a valid email.'
        return emailRegEx
    }
}

function isValidActivities () {
    let checkedBox = document.querySelectorAll('[type="checkbox"]:checked')
    let activitiesBox = document.getElementById('activities-box')
    if (checkedBox.length > 0) {
        activitiesBox.parentNode.className='valid';
        activitiesBox.parentNode.lastElementChild.style.display = 'none';
        return true
    } else {
        activitiesBox.parentNode.className='not-valid';
        activitiesBox.parentNode.lastElementChild.style.display = 'block'
        activitiesBox.lastElementChild.textContent = 'Please select at least one activity.'
    }   
} 

function isValidCardNumber () {
    //Validating card number is all numbers and between 13 and 16 digits
    const cardNumberRegEx = /^\d{13,16}$/.test(cardNumberInput.value)
    //Conditional to apply relevant styles depedning on user input 
    if (cardNumberRegEx === true) {
        cardNumberInput.parentNode.className='valid';
        cardNumberInput.parentNode.lastElementChild.style.display = 'none';
        return cardNumberRegEx
    } else {
        cardNumberInput.parentNode.className='not-valid';
        cardNumberInput.parentNode.lastElementChild.style.display = 'block';
        cardNumberInput.parentNode.lastElementChild.textContent = 'Invalid input. Please enter a valid card number.'
        return cardNumberRegEx
    }
}
function isValidZipCode () {
    //Validating zip code is five digits from 0-9
    const zipRegEx = /^[0-9]{5}$/.test(zipCodeInput.value)
    //Conditional to apply relevant styles depedning on user input 
    if (zipRegEx === true) {
        zipCodeInput.parentNode.className='valid';
        zipCodeInput.parentNode.lastElementChild.style.display = 'none';
        return zipRegEx
    } else {
        zipCodeInput.parentNode.className='not-valid';
        zipCodeInput.parentNode.lastElementChild.style.display = 'block';
        zipCodeInput.parentNode.lastElementChild.textContent = 'Invalid input. Please enter a valid zip code.'
        return zipRegEx
    }
}

function isValidCvv () {
    //Validating zip code is three digits from 0-9
    const CvvRegEx = /^\d{3}$/.test(cvvInput.value)
    //Conditional to apply relevant styles depedning on user input 
    if (CvvRegEx === true) {
        cvvInput.parentNode.className='valid';
        cvvInput.parentNode.lastElementChild.style.display = 'none';
        return CvvRegEx
    } else {
        cvvInput.parentNode.className='not-valid';
        cvvInput.parentNode.lastElementChild.style.display = 'block';
        cvvInput.parentNode.lastElementChild.textContent = 'Invalid input. Please enter a valid CVV number.'
        return CvvRegEx
    }
}

//NEED HELP WITH THIS FUNCTION
function isValidPayment () {
    if (paymentOption.value === 'credit-card') {
        isValidCardNumber()
        isValidZipCode() 
        isValidCvv()
        }    
    }

    
//Event listener for submitting the form   
form.addEventListener('submit', (e) => {
    
    if (isValidName() && isValidEmail() && isValidActivities() && isValidPayment()) {
        console.log('form submited');
    } else { 
        e.preventDefault(); //If there are invalid inputs the form will be prevented from submitting
        isValidName();
        isValidEmail(); 
        isValidPayment();
        isValidActivities();
        console.log('Incorrect user inputs');
    }
});

/********************Accessibility Section********************/
const checkboxInput = document.querySelectorAll('#activities-box input');
//Condtional to apply focus to relevant checkbox
for(let i = 0; i < checkboxInput.length; i++) {
    checkboxInput[i].addEventListener('focus', (e) => {
        checkboxInput[i].parentElement.classList.add('focus');
    });
    checkboxInput[i].addEventListener('blur', (e) => {
        checkboxInput[i].parentElement.classList.remove('focus');
    });
}


