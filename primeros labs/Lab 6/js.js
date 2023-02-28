function validar(){
    password1=document.getElementById("password1");
    password2=document.getElementById("password2");
    if (password1.value==password2.value){
        document.getElementById("correcto").classList.add("mostrar");
        return true;
    }
    else{
        document.getElementById("incorrecto").classList.add("mostrar");
        
    }
}