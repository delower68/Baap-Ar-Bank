document.getElementById('btn-logIn').addEventListener('click', function(){
    // get email field from the login page  
    const emailField = document.getElementById('emailField');
    const email = emailField.value ; 
    // get password field from the login page  
    const passwordfield = document.getElementById('passwordField');
    const password = passwordfield.value;

    if (email === 'Khass@sontan.com' && password === '1234') {
        window.location.href='bank.html'
    }
    else{
        alert('Tui ber hoa ja. Tui amar sontan na. Tui passward vhule gesis')
    }
              
})