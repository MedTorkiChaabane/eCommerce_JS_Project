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
    var findedMail= checkEmail(email);
    if(findedMail){ 
     
        document.getElementById('emailError').innerHTML="Eamil déja utiliser !";
    }
    else {
        document.getElementById('emailError').innerHTML="";
    }
    /********************************************************************* */
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
    if(isNameValid && islNameValid && isPswValid && isConfirmPsw && isTelValid && !findedMail){
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
//function qui compare deux numero verifier price et stock
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

function checkEmail(ch){
    var usersTab=JSON.parse(localStorage.getItem('users') || "[]");
    var findedUser=null;
    
    //vérification email 
    for(var i=0; i<usersTab.length; i++){
        if((usersTab[i].email==ch) ){
            findedUser=usersTab[i];
            break;
        }
        
    }
    return findedUser;
   

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
    //récupération du tableau de la BD.
    var usersTab=JSON.parse(localStorage.getItem('users') || "[]");
    //Initialisation findedUser
    var findedUser=null;
    
    //vérification email & psw et parcours du tableau userTab
    for(var i=0; i<usersTab.length; i++){
        if((usersTab[i].email==emailValue) && (usersTab[i].psw==pswValue)){
            findedUser=usersTab[i];
            break; //si on la condition est vérifiée on récupére userTab[i] et on arrête la recherche
        }
        
    }
    
    if(findedUser){ //si findedUser différent de nulle cad exist on récupére l'id et on passe à la page index.html.
        //Très important  localStorage.setItem('conncetedUserId', findedUser.id);
        localStorage.setItem('conncetedUserId', findedUser.id); //Récuperer l'id user pour créer une session.
        location.replace("index.html"); //page index.html s'ouvre si l'email et psw exist dand usersTab.

    }
    else {
        document.getElementById('loginError').innerHTML="Please check email or psw !";
        document.getElementById('loginError').style.color='red';
    }

}

//fonction pour ajouter une nouvelle category
function addCategory(){
    //récuperation des données
    var nameCategoryValue=document.getElementById("nameCategory").value;
    var isNCategoryValid=checklength(nameCategoryValue,4);
    if(!isNCategoryValid){
        document.getElementById('NameCategoryError').innerHTML="Category Name should be at least 4 caracters!";
    }
    else {
        document.getElementById('NameCategoryError').innerHTML="";
    }
    //Validation
    if(isNCategoryValid){  //if all condition are valid create object and save into DB.
  
        var categoriesTab=JSON.parse(localStorage.getItem("categories") || "[]");
        //création de l'objet product
        var category = {
        id:generateId(categoriesTab)+1,
        nameCategory:nameCategoryValue, 
    };
    
    //Save into LS
    categoriesTab.push(category);
    localStorage.setItem('categories',JSON.stringify(categoriesTab));
    }

}

//function to display all the product save in element
function displayProducts(){
    var productsTab=JSON.parse(localStorage.getItem('products') || '[]');
    var content='';
    for (var i=0; i<productsTab.length;i++){
        content=content+`
     <div class="col-lg-3 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src="img/product/p1.jpg" alt="">
            <div class="product-details">
                <h6>${productsTab[i].nameProduct} </h6>
                <div class="price">
                    <h6>${productsTab[i].price} DT</h6>
                   
                </div>
                <div class="prd-bottom">

                    <a href="" class="social-info">
                        <span class="ti-bag"></span>
                        <p class="hover-text">add to bag</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-sync"></span>
                        <p class="hover-text">compare</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    `;

    }
    document.getElementById('productDiv').innerHTML=content;
}
