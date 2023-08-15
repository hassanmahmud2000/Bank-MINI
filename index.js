// step 1
document.getElementById ('submit-button').addEventListener ('click',function () {
    // step 2 get Email Text Using .Value........
    const emailField = document.getElementById ('emailArea')
    const email = emailField.value;
    // Step 3 Now Get Password Text Using .Value  !!!!!!!!!!!!!!!!!!!!
    const passwordField = document.getElementById('passwordArea');
    const password = passwordField.value;
    // Step 4= Verify email and Password !!!!!!!

    if (email === 'mahmud123@gmail.com'  && password === 'mh_221902151') {
        console.log ('Valid')
        window.location.href='bank.html'
    }
    else {
        alert ('BingChod !!! Thik Kore laykh ')
    }
    
})