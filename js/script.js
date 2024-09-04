    /********************************************************************* */
    /********************************************************************* */
//function to register all users
function signUp(){
    //récuperation des données
    var fName=document.getElementById("firstName").value;
    var isNameValid=checklength(fName,3);
    if(isNameValid==false){
        document.getElementById('fNameError').innerHTML="First Name should be at least 4 caracters!";
    }
    else {
        document.getElementById('fNameError').innerHTML="";
    }
    /********************************************************************* */
    var lName=document.getElementById("lastName").value;
    var islNameValid=checklength(lName,4);
    if(!islNameValid){
        document.getElementById('fNameError1').innerHTML="Last Name should be at least 4 caracters!";
    }
    else {
        document.getElementById('fNameError1').innerHTML="";
    }
    
    /********************************************************************* */
    var email=document.getElementById("email").value;
    var psw=document.getElementById("password").value;
    var isPswValid=checklength(psw,6);
    if(!isPswValid){
        document.getElementById('PswError').innerHTML="Password should be at least 6 caracters!";
    }
    else {
        document.getElementById('PswError').innerHTML="";
    }
    
    /********************************************************************* */
    var cPsw=document.getElementById("confirmPassword").value;
    var isConfirmPsw=isEqual(psw,cPsw);
    if(!isConfirmPsw){
        document.getElementById('cPswError1').innerHTML="Passwords doesn't match";
    }
    else {
        document.getElementById('cPswError1').innerHTML="";
    }
    
    /********************************************************************* */
    var tel=document.getElementById("tel").value;
    var isTelValid=checkPhone(tel,8);
    if(!isTelValid){
        document.getElementById('telError').innerHTML="phone must have 8 numbers";
    }
    else {
        document.getElementById('telError').innerHTML="";
    }
    if(isNameValid && islNameValid && isPswValid && isConfirmPsw && isTelValid){
   //create user object
   var usersTab=JSON.parse(localStorage.getItem("users") || "[]");//declaration avant la creation de l'iobjet parce l'id demande usersTab
   var user = {
    id:generateId(usersTab)+1,
    fName:fName, 
    lName:lName,
    email:email,
    psw:psw,
    cPsw:cPsw,
    tel:tel
    };
//Save into LS
//console.log('here tab', usersTab);
//if(!(usersTab instanceof Array))
//usersTab = [usersTab]; 
usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
    }
}
/********************************************************************* */
/********************************************************************* */

//function pour vérifier longuer d'une chaine
function checklength(ch,nb){
  return(ch.length>=nb);
}
//function pour vérifier que la chaine 1 et la même que la chaine 2
function isEqual (ch1,ch2){
    return(ch1==ch2);
}
//function pour vérifier le numéro de tel 
function checkPhone(value,n){
    return(value.length==n);
}
function isMoreThan(n1,n2){
    return(Number (n1)>n2);
}

//function qui incrimente l'id automatiquement
function generateId(T){
    var max;
    if(T.length==0){
        max=0;
    }
    else {
        max=T[0].id;
        for(var i=1; i<T.length; i++){
            if(T[i].id>max){
                max=T[i].id;
            }
        }
    }
   
  return max;
}


//function to add  product
function addProduct(){
    //récuperation des données
    var nameProduct=document.getElementById("nameProduct").value;
    var isNProductValid=checklength(nameProduct,4);
    if(!isNProductValid){
        document.getElementById('NameProductError').innerHTML="Name Product should be at least 4 caracters!";
    }
    else {
        document.getElementById('NameProductError').innerHTML="";
    }

    var price=document.getElementById("price").value;
    var isPriceValid=isMoreThan(price,0);
    if(!isPriceValid){
        document.getElementById('priceError').innerHTML="Price should be >0!";
    }
    else {
        document.getElementById('priceError').innerHTML="";
    }

    var stock=document.getElementById("stock").value;
    var isStockValid=isMoreThan(stock,20);
    if(!isStockValid){
        document.getElementById('stockError').innerHTML="stock should be >20!";
    }
    else {
        document.getElementById('stockError').innerHTML="";
    }

    var category=document.getElementById("category").value;
    if(isNProductValid && isPriceValid && isStockValid){  //if all condition are valid create object and save into DB.
  
    var productsTab=JSON.parse(localStorage.getItem("products") || "[]");
    //création de l'objet product
    var product = {
    id:generateId(productsTab)+1,
    nameProduct:nameProduct, 
    price:price,
    stock:stock,
    category:category,
};

//Save into LS


//if(!(ProductsTab instanceof Array))
//productsTab = [productsTab]; 
productsTab.push(product);
localStorage.setItem('products',JSON.stringify(productsTab));
   }
}


//function to login after verification of email & pwd
function login(){
    
    //récupeération des données
    var emailValue=document.getElementById("email").value;
    var pswValue=document.getElementById("password").value;
    var usersTab=JSON.parse(localStorage.getItem('users') || "[]");
    var findedUser=null;
    
    //vérification email & psw
    for(var i=0; i<usersTab.length; i++){
        if((usersTab[i].email==emailValue) && (usersTab[i].psw==pswValue)){
            findedUser=usersTab[i];
            break;
        }
        
    }
    
    if(findedUser){ 
        //Très important  localStorage.setItem('conncetedUserId', findedUser.id);
        localStorage.setItem('conncetedUserId', findedUser.id); //Récuperer l'id user pour créer une session
        location.replace("index.html"); //page index.html s'ouvre si l'email et psw exist dand usersTab.

    }
    else {
        document.getElementById('loginError').innerHTML="Please check email or psw !";
    }

}