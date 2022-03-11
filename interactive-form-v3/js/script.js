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
        if ( e.target.checked) {
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

//accessibilty