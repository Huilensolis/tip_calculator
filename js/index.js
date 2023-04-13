let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', calculateTip)

let container = document.querySelector('#percentages_container');

let amountInput= document.querySelector('#total')
// amountInput.addEventListener('input', () => amountInput.classList.remove('amount_not_selected'))
amountInput.addEventListener('input', () => container.classList.remove('amount_not_selected'))
let percentages = document.querySelectorAll('.percentage')

for (let i = 0; i < percentages.length; i++) {
    const element = percentages[i];
    
    element.addEventListener('click', () => {
        let PercentageActive = document.querySelectorAll('.percentage_active') // selecting all percentages html p

        if(PercentageActive.length >= 1){

            PercentageActive.forEach((elem) => {
                elem.classList.remove('percentage_active'); // we remove all percentages actives
            }); 

            element.classList.add('percentage_active') // we active this percentage
        } else if(PercentageActive.length === 0){
            container = document.querySelector('#percentages_container');
            container.classList.remove('percentage_not_selected')
            element.classList.add('percentage_active') // we active this percentage
        }
    })
}

function calculateTip(){
    let isPercentageSelected = document.querySelectorAll('.percentage_active')

    if (isPercentageSelected.length <= 0) {
        fieldNotCompleted('percentage');
    } 
    if (amountInput.value === '') {
        return fieldNotCompleted('amount');
    }

    let percentageDiv = document.querySelector('.percentage_active');
    let percentage = parseInt(percentageDiv.id.slice(4, 6))
    console.log('percentage: ', percentage);
    let tip = ((percentage / 100) * parseFloat(amountInput.value)).toFixed(2)

    function displayTip(tip){
        
        let container = document.createElement('div')
        container.classList.add('tip_result');

        let tipP = document.createElement('p');
        tipP.classList.add('tip_number');
        tipP.innerHTML = `$${tip}`;
        container.appendChild(tipP);
        
        let main = document.querySelector('#principal_container');
        main.appendChild(container);
    }
    let isTipActive = document.querySelectorAll('.tip_number')
    if(isTipActive.length > 0){
        isTipActive.forEach((elem) => {
            elem.classList.add('old_tip'); // adding the class old tip
        }); 
        isTipActive.forEach((elem) => {
            elem.classList.remove('tip_number'); // removing the class tip_number 
        }); 
    }
    displayTip(tip)
}
function fieldNotCompleted(field){
    if (field === 'percentage') {
        let container = document.querySelector('#percentages_container');
        container.classList.add('percentage_not_selected')
    } else if (field === 'amount'){
        let container = document.querySelector('#percentages_container');
        container.classList.add('amount_not_selected')
    }
}