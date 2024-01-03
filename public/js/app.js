let username;
let useremail;
let ageuser;
let passuser;
let money ;
// let user;
let pass;
        let askuser;
        function ask(params) {
            askuser = prompt('choose between signing up, logging in, or changing the password, or exit')
            while (askuser !== `sign up` && askuser !== `log in` && askuser !== `change password` && askuser !== `exit`) {
                askuser = prompt('choose between signing up, logging in, or changing the password')
            }
            switch (askuser) {
                case `sign up`:
                    signup2()
                    break;
                case `log in`:
                    login()
                    break
                case `change password`:
                    changepass()
                    break
                case `logout`:
                    logout()
                    break
                default:
                    break;
            }
        }
ask()