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
    const dataCost = +e.target.getAttribute('data-cost');
        if ( e.target.checked) {
            totalCost += dataCost;
        } else {
            totalCost -= dataCost;
        }
    finalCost.textContent = `Total: ${totalCost}`;
})









//payment info

//form validation 

//accessibilty 