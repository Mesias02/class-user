'use strict'

class User {
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    login (username, password){
        //validar usuario y contraseña if (var1 === var && var1 ===var)
        if(username === this.username && this.password === password ){
            alert("Bienvenido");
        }else{
            alert("Usuario o contraseña invalida")
        }
    }
    resetPassword (newPassword){
        this.password = newPassword;
    } 
    updateInfo(newEmael){;
        this.email =newEmael;
    }
    showInfo (){
        alert(`Usuario ${this.username} Contraseña ${this.password} Email ${this.email}`);
    }


}

//Instanciar -> crear valores a la clase
let user = new User("Fausto Saquinaula", "1234", "fato.97.es@gmail.com");
//user.login("Fausto Saquinaula","1234" );
user.resetPassword("1246");
user.updateInfo("fato.97.es@gmail.com");
user.login("Fausto Saquinaula", "1246");
user.showInfo()
