let username;
let useremail;
let ageuser;
let passuser;
let money ;
// let user;
let pass;
        let askuser;
        function ask() {
            askuser = prompt('choose between signing up, logging in, or changing the password, or exit')
            while (askuser !== `sign up` && askuser !== `log in` && askuser !== `change password` && askuser !== `exit` && askuser !== `log out`) {
                askuser = prompt('choose between signing up, logging in, or changing the password, or exit')
            }
            switch (askuser) {
                case `exit`:
                    exit()
                    break;
                case `sign up`:
                    signup2()
                    break;
                case `log in`:
                    login()
                    break
                case `change password`:
                    changepass()
                    break
                case `log out`:
                    logout()
                    break
                default:
                    break;
            }
        }
ask()

// for exit
function exit() {
    while (askuser == `exit`) {
        ask()
    } 
}

// function for sign up
var userInfo ;

function signup2() {

    username = prompt(`insert ur name`)
    while (username.length < 5) {
        username = prompt(`insert ur name`)
    }
    const specials = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    const numberssp = /[123456789]/
    const letterssp = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/
    const passwordsp = /[@#-+*/]/

    while (specials.test(username) || numberssp.test(username)) {
            username = prompt(`insert ur name`)
        } 
    
    username = username.trim().charAt(0).toUpperCase() + username.slice(1);
    const arr = username.split(" ");
    for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    username = arr.join(" ");



    useremail = prompt(`insert ur email`)
    let spacemiddle = /[ ]/
    let findat = useremail.indexOf(`@`)
    while (spacemiddle.test(useremail) || useremail.length < 10 ) {
        useremail = prompt(`insert ur email`)
    }
    while (findat == -1) {
        useremail = prompt(`insert ur email`)
        findat = useremail.indexOf(`@`)
    }
    useremail = useremail.trim().toLocaleLowerCase()

    ageuser = parseInt(prompt(`insert ur age`))

    while (specials.test(ageuser) || letterssp.test(ageuser) || spacemiddle.test(ageuser)) {
        ageuser = parent(prompt(`insert ur age`))
    }
    console.log(ageuser);
    while (ageuser <= 0 || ageuser > 100) {
        ageuser = parseInt(prompt(`insert ur age`))
    }

    passuser = prompt (`insert ur password, should have special character from the set: ["@", "#", "-", "+", "*", "/"]`)

    while (spacemiddle.test(passuser) || passuser.length < 7 || passwordsp.exec(passuser) == null) {
        passuser = prompt (`insert ur password, should have special character from the set: ["@", "#", "-", "+", "*", "/"]`)
    }


let confirmpassuser 
confirmpassuser = prompt(`pleas confirm ur password`)
while (confirmpassuser !== passuser) {
    confirmpassuser = prompt(`pleas confirm ur password`)
}

money = Math.ceil(Math.random()*100000)
userInfo = [username, useremail, ageuser, passuser, money];
console.log(userInfo);
ask();
}



// function for log in
function login() {

    console.log(userInfo)
    let logemail = prompt(`insert ur email to login`)
            while (logemail !== userInfo[1]) {
                logemail = prompt(`insert ur email to login`)
            }

    let pass = prompt(`insert ur password to login`)
            while (pass !== userInfo[3]) {
                pass = prompt(`insert ur password to login`)
            }

    ask()

}

// function for change password
function changepass() {
    let checkemail = prompt(`pleas enter ur email to change ur password`)
            while (checkemail !== userInfo[1]) {
                checkemail = prompt(`pleas enter ur email to change ur password`)
            }
            let changepass = prompt(`pleas enter ur new password`)
            userInfo[3] = changepass
            console.log(userInfo);
            ask()
    }


// function for log out
function logout() {
    while (askuser == `log out`) {
        ask()
    }
}