//function to register all users
function signUp(){
    //récuperation des données
    var fName=document.getElementById("firstName").value;
    var lName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var psw=document.getElementById("password").value;
    var cPsw=document.getElementById("confirmPassword").value;
    var tel=document.getElementById("tel").value
   //create user object
   var user = {
    fName:fName, 
    lName:lName,
    email:email,
    psw:psw,
    cPsw:cPsw,
    tel:tel 
};
//Save into LS
var usersTab=JSON.parse(localStorage.getItem("users") || "[]");
console.log('here tab', usersTab);
//if(!(usersTab instanceof Array))
//usersTab = [usersTab]; 
usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
}

//function to register all product
function addProduct(){
    //récuperation des données
    var nameProduct=document.getElementById("nameProduct").value;
    var price=document.getElementById("price").value;
    var stock=document.getElementById("stock").value;
    var category=document.getElementById("category").value;
   //create product object
   var product = {
    nameProduct:nameProduct, 
    price:price,
    stock:stock,
    category:category,
};

//Save into LS
var productsTab=JSON.parse(localStorage.getItem("products") || "[]");

//if(!(ProductsTab instanceof Array))
//productsTab = [productsTab]; 
productsTab.push(product);
localStorage.setItem('products',JSON.stringify(productsTab));

}

