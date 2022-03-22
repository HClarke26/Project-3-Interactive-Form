// Project 3 

//Name Field
const nameInput = document.getElementById("name");
nameInput.focus();


//Job Role
const jobRoleInput = document.getElementById("title");
const otherJobRoleInput = document.getElementById("other-job-role");

otherJobRoleInput.style.visibility = 'hidden';

jobRoleInput.addEventListener('click', (e) => {
    if (e.target.value === 'other') {
        otherJobRoleInput.style.visibility = 'visible';
    } else {
        otherJobRoleInput.style.visibility = 'hidden';; 
    }
});


//T shirt 
const designInput = document.getElementById("design");
const colorInput = document.getElementById("color");

colorInput.disabled = true ;

designInput.addEventListener('change', (e) => {
    colorInput.disabled = false ;
    for (let i = 0 ; i < colorInput.length; i++) {
        // conditional (Ternary Operator)********************************************************
        colorInput.value = colorInput[i].value ? 'Select a design theme above': colorInput[i].value;
        // design option[value] == color option[data-theme]
        if (e.target.value === colorInput[i].getAttribute('data-theme')){             
            colorInput[i].hidden = false;           
        } else {
            colorInput[i].hidden = true;
        }
    }
});


//Register for activities

const activities = document.getElementById('activities');
const finalCost = document.getElementById('activities-cost');
let totalCost = 0;

//event listener that adds up total charges of activities
activities.addEventListener('change', (e) => {
    const activityCost =+ e.target.getAttribute('data-cost');
        if (e.target.checked) {
            totalCost += activityCost;
        } else {
            totalCost -= activityCost;
        }
    finalCost.textContent = `Total: $${totalCost}`;
})


//payment info

const paymentOption = document.getElementById('payment');
paymentOption.children[1].setAttribute('selected', true);
const creditCard = document.getElementById('credit-card');
creditCard.style.display = '';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display = 'none';
const paypal = document.getElementById('paypal');
paypal.style.display = 'none';

paymentOption.addEventListener('change', (e) => {
    const selectedPayment = e.target.value;

    if (selectedPayment === 'bitcoin') {
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
    } else if (selectedPayment === 'paypal') {
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    } else {
        paypal.style.display = 'none';
        bitcoin.style.display = 'none'; 
    }
})

//form validation 

const emailInput = document.getElementById('email');
const cardNumberInput = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const form = document.querySelector('form');

// helper functions

function isValidName () {
    const nameRegEx = /^[\w]+\s*[\w]+$/.test(nameInput.value);
    return nameRegEx
}

function isValidEmail () {
    const emailRegEx =  /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
    return emailRegEx
}

function isValidActivities () {
    if (totalCost !== 0) {
        return true
    }
}

function isValidCardNumber () {
    const cardNumberRegEx = /^\d{13,16}$/.test(cardNumberInput.value)
    return cardNumberRegEx
}
function isValidZipCode () {
    const zipRegEx = /^\d{5}$/.test(zipCodeInput.value)
    return zipRegEx
}

function isValidCvv () {
    const CvvRegEx = /^\d{3}$/.test(cvvInput.value)
    return CvvRegEx
}

function isValidPayment () {
    if (paymentOption.value === 'credit-card') {
        if (isValidCardNumber() && isValidCvv() && isValidZipCode()) {
            return true
        }       
    }
}
    
 // Event listener for submitting the form   

form.addEventListener('submit', (e) => {
    
    if ( isValidName() && isValidEmail() && isValidActivities() && isValidPayment()) {
        console.log('form submited');
    } else {
        e.preventDefault();
        isValidName();
        isValidEmail(); 
        isValidPayment();
        isValidActivities();
        console.log('Incorrect user inputs');
    }
});

// Accessibility 

const checkboxInput = document.querySelectorAll('#activities-box input');
console.log(checkboxInput)
for(i = 0; i < checkboxInput.length; i++) {
    checkboxInput[i].addEventListener('focus', (e) => {
        checkboxInput[i].parentElement.classList.add('focus');
    });
    checkboxInput[i].addEventListener('blur', (e) => {
        checkboxInput[i].parentElement.classList.remove('focus');
    });
}


