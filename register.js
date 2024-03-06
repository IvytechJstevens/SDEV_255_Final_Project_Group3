    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmpasswordInput = document.getElementById('confirm-password');
    const registerButton = document.getElementById('register');

   registerButton.addEventListener('click',()=>{
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmpassword = confirmpasswordInput.value;
    
    if(username && password && confirmpassword){

        if(password==confirmpassword){

            localStorage.setItem('username' ,username);
            localStorage.setItem('password' ,password);
            
            window.Location.href="login.html";


        }else{
            alert('passwords do not match')
        }
    }  
   })