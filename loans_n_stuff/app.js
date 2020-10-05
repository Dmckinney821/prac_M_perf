
//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    //show loader if clicked
    document.getElementById('loading').style.display = 'block';

    //hide results
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResults, 2000)

    e.preventDefault();
    
})


function calculateResults(){
    console.log('Calculating....')
    //ui variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //computing payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
        document.getElementById('results').style.display = 'block';

        document.getElementById('loading').style.display = 'none';



    } else {
        showError('Please check your math')
    }

    // e.preventDefault();
}

showError = (error) => {
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    errorDiv.className = 'alert alert-danger'
    //create texst node and append to div
    errorDiv.appendChild(document.createTextNode(error))

    //insert error
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError,3000)
}

clearError = () => {
    document.querySelector('.alert').remove()
}