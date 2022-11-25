
// document.getElementById("submit").addEventListener("click",submitfunc)

function submitfunc(){
    let firstname  = document.getElementById("firstname").value;  
    let lastname  = document.getElementById("lastname").value;
    let age  = document.getElementById("age").value;
    let mobile  = document.getElementById("mobile").value;
    let email  = document.getElementById("email").value;
    let meassageArea = document.getElementById("discription").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;


    
    if(!firstname ){
        alert("Please enter first name")
        return
    }
     if(lastname.length <=0 ){
        alert("Please enter last name")
        return
    }
    if(age.length <= 0){
        alert("Please enter Your Age")
        return
    }//else if(age.length<18){
    //     alert("age must be more than 18")
    // }else{

    // }
    if(mobile.length <=0){
        alert("Please enter Your mobile Number and its be 10 digit")
        return
    }
    if(email.length <=0){
        alert("Please enter Your email")
        return
    } 
    if( password.length <=0 || confirmpassword.length <=0){
        alert("Password must be same")
        return
    }else if(password.length>0 && confirmpassword >0) {
        if(password === confirmpassword){
            alert("Login Succesfull");
            document.getElementById("head-tag").innerText="Login Successfull";
            window.location.reload();
        }else {
            alert("Password must be same");
        }
      
      
    } 
}

let resetfunc = () =>{
    window.location.reload();
}

// document.getElementById("submit").addEventListener("click",submitfunc)

// function submitfunc(){
//     let firstname  = document.getElementById("firstname").value;
//     let lastname  = document.getElementById("lastname").value;
//     let age  = document.getElementById("age").value;
//     let mobile  = document.getElementById("mobile").value;
//     let email  = document.getElementById("email").value;
//     let meassageArea = document.getElementById("discription").value;
//     let password = document.getElementById("password").value;
//     let confirmpassword = document.getElementById("confirmpassword").value;
    
//     if(firstname.length <= 0 ){
//         alert("Please enter first name")
//         return
//     }
//      if(firstname.length > 0  && lastname.length <= 0){
//         alert("Please enter last name")
//         return
//     }
//     if(firstname.length > 0  && lastname.length > 0 && age.length <= 0){
//         alert("Please enter Your Age")
//         return
//     }
//     if(firstname.length > 0  && lastname.length > 0 && age.length > 0 && mobile.length <=0){
//         alert("Please enter Your mobile Number")
//         return
//     }
//     if(firstname.length > 0  && lastname.length > 0 && age.length > 0 && mobile.length >0 && email.length <=0){
//         alert("Please enter Your email")
//         return
//     } 
//     if(firstname.length > 0  && lastname.length > 0 && age.length > 0 && mobile.length >0 && email.length >0 && password.length <=0 || confirmpassword.length <=0){
//         alert("Password must be same")
//         return
//     }else if(firstname.length > 0  && lastname.length > 0 && age.length > 0 && mobile.length >0 && email.length >0 && password.length>0 && confirmpassword >0) {
        
//         if(password === confirmpassword){
//             alert("Login Succesfull")
//             document.getElementById("head-tag").innerText="Login Successfull"
//         }else {
//             alert("Password must be same");
//         }
      
      
//     } 
// }