import axios from 'axios';

export class LoginService {
    CHAVE_TOKEN = "";

    Login(emaill, senhaa){
        axios.post(this.url+"login",{'email':emaill, 'senha':senhaa}).then(res=>{
            console.log(res);
            localStorage.setItem(this.CHAVE_TOKEN, res.data.token);
        }).catch(error=>{
            console.log("opa paizao deu certo")
        });
    }
}
