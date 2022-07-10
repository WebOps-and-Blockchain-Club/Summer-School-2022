
handleSubmit = () =>{
    var nameInput = document.getElementById('name');
    var collegeInput = document.getElementById('college');
    var emailInput = document.getElementById('email');
    var mobileInput = document.getElementById('mobile');

    console.log(`Name: ${nameInput.value}`);
    console.log(`College: ${collegeInput.value}`);
    console.log(`Email: ${emailInput.value}`);
    console.log(`Mobile: ${mobileInput.value}`);
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

