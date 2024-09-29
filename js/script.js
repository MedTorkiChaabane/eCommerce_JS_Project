    /********************************************************************* */
    /********************************************************************* */
//function to register all users
function signUp(){
    //récuperation des données
    var fName=document.getElementById("firstName").value;
    var isNameValid=checklength(fName,3);
    errorMessage(isNameValid,'fNameError',"First Name should be at least 4 caracters!");
    /********************************************************************* */
    var lName=document.getElementById("lastName").value;
    var islNameValid=checklength(lName,4);
    if(!islNameValid){
        document.getElementById('lNameError').innerHTML="Last Name should be at least 4 caracters!";
    }
    else {
        document.getElementById('lNameError').innerHTML="";
    }
    
    /********************************************************************* */
    var email=document.getElementById("email").value;
    var findedMail= checkEmail(email);
    errorMessage(!findedMail,'emailError',"Email already used");
   
    /********************************************************************* */
    var psw=document.getElementById("password").value;
    var isPswValid=checklength(psw,6);
    errorMessage(isPswValid,'PswError',"Password should be at least 6 caracters!");
    
    /********************************************************************* */
    var cPsw=document.getElementById("confirmPassword").value;
    var isConfirmPsw=isEqual(psw,cPsw);
    errorMessage(isConfirmPsw,'cPswError',"Passwords doesn't match");
    
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
    tel:tel,
    role:"client"
    };
//Save into LS
//console.log('here tab', usersTab);
//if(!(usersTab instanceof Array))
//usersTab = [usersTab]; 
usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
location.replace('login.html');
    }
}
/********************************************************************* */
function signupStore(){
    //récuperation des données
    var fName=document.getElementById("firstNameStore").value;
    var isNameValid=checklength(fName,3);
    errorMessage(isNameValid,'fNameErrorStore',"First Name should be at least 4 caracters!");
    /********************************************************************* */
    var lName=document.getElementById("lastNameStore").value;
    var islNameValid=checklength(lName,4);
    if(!islNameValid){
        document.getElementById('lNameErrorStore').innerHTML="Last Name should be at least 4 caracters!";
    }
    else {
        document.getElementById('lNameErrorStore').innerHTML="";
    }
    
    /********************************************************************* */
    var email=document.getElementById("emailStore").value;
    var findedMail= checkEmail(email);
    errorMessage(!findedMail,'emailErrorStore',"Email already used");
   
    /********************************************************************* */
    var psw=document.getElementById("passwordStore").value;
    var isPswValid=checklength(psw,6);
    errorMessage(isPswValid,'PswErrorStore',"Password should be at least 6 caracters!");
    
    /********************************************************************* */
    var cPsw=document.getElementById("confirmPasswordStore").value;
    var isConfirmPsw=isEqual(psw,cPsw);
    errorMessage(isConfirmPsw,'cPswErrorStore',"Passwords doesn't match");
    
    /********************************************************************* */
    var tel=document.getElementById("telStore").value;
    var isTelValid=checkPhone(tel,8);
    if(!isTelValid){
        document.getElementById('telErrorStore').innerHTML="phone must have 8 numbers";
    }
    else {
        document.getElementById('telErrorStore').innerHTML="";
    }
    var addressValue=document.getElementById("addressStore").value;
    var storeNameValue=document.getElementById("storeName").value;
    if(isNameValid && islNameValid && isPswValid && isConfirmPsw && isTelValid && !findedMail){
   //create user object
   var usersTab=JSON.parse(localStorage.getItem("users") || "[]");//declaration avant la creation de l'iobjet parce l'id demande usersTab
   var user = {
    id:generateId(usersTab)+1,
    fName:fName, 
    lName:lName,
    email:email,
    psw:psw,
    cStorePsw:cPsw,
    tel:tel,
    address:addressValue,
    storeName:storeNameValue,
    role:"store",
    status:"NOK"
    };
//Save into LS
//console.log('here tab', usersTab);
//if(!(usersTab instanceof Array))
//usersTab = [usersTab]; 
usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
location.replace('login.html');
    }
}
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
function getKey(key){
return(JSON.parse(localStorage.getItem(key) || "[]"));
}

function errorMessage(valid,id,msg){
    if(!valid){
        document.getElementById(id).innerHTML=msg;
        document.getElementById(id).style.color='red';
    }
    else {
        document.getElementById(id).innerHTML="";
    }

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
    
    if(findedUser){ 
        if(findedUser.role=="client"){ //user trouvé client
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('index.html');
        
        }else if(findedUser.role=="store"){ //user trouvé store
            if(findedUser.status=="NOK"){
                document.getElementById("loginError").innerHTML="Account not yet verified";
                document.getElementById("loginError").style.color="red";
            }
            else{
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('addProduct.html');
            }
        }
        else{
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('admin.html');
        }
        /*si findedUser différent de nulle cad exist on récupére l'id et on passe à la page index.html.
        //Très important  localStorage.setItem('connectedUserId', findedUser.id);
        localStorage.setItem('connectedUserId', findedUser.id); //Récuperer l'id user pour créer une session.
        location.replace("index.html"); //page index.html s'ouvre si l'email et psw exist dand usersTab.
         */
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
  
        var categoriesTab=JSON.parse(localStorage.getItem('categories') || '[]');
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
        //utilisation des backtrick `` (retour à la ligne , utilisation des variables)
        content=content+`
     <div class="col-lg-3 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src="img/product/p${i+1}.jpg" alt="">
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
                
                <button class="btn btn-warning" onClick="goToDisplayProduct(${productsTab[i].id})"> Display </button>

            </div>
        </div>
    </div>
    
    `;

    }
    document.getElementById('productDiv').innerHTML=content;
}

//function pour passer  passe à une nouvelle page html pour voir les details d'un produit et enregistrer l'id product.
function goToDisplayProduct(id){
    localStorage.setItem('displayedProductId',id)
    
    location.replace('productDetails.html');
}

//fonction qui affiche d'une façon dynamique les détails du produits sélectionné.
function displayProductDetails(){
    var id=JSON.parse(localStorage.getItem('displayedProductId') );
    var productsTab=JSON.parse(localStorage.getItem('products') || '[]');
    var displayedProduct=null;
    //on recherche l'id dans le tableau productsTab
    for(var i=0; i<productsTab.length; i++){
        if(productsTab[i].id==id){
            displayedProduct=productsTab[i];
            break;
        }
    }
    document.getElementById("nameProductDiv").innerHTML=displayedProduct.nameProduct;
    document.getElementById("priceDiv").innerHTML=displayedProduct.price;
    document.getElementById("categoryDiv").innerHTML=displayedProduct.category;
    if(displayedProduct.stock>0){
    document.getElementById("stockDiv").innerHTML="In Stock";
    document.getElementById("stockDiv").style.color="#39FF14"; 
    }
    else {
        document.getElementById("stockDiv").innerHTML="Out of Stock";
        document.getElementById("stockDiv").style.color="red"; 
    }

}


//fonction qui ajoute une commande d'un produit sélectionné dans le panier
function addToBasket(){
    //récupérer la quantité de produits à commander donné par l'utlisateur.
    var qty=document.getElementById('qty').value;
    var userId=localStorage.getItem('connectedUserId'); 
    var productId=localStorage.getItem('displayedProductId');
    //condition sur la quantité saisie
    var product=searchObj(productId, 'products');
    if(Number(qty)>0 && Number(qty) <= product.stock){
    var ordersTab=JSON.parse(localStorage.getItem('orders') || '[]');
    //Creation d'objet
    var order={
        id:generateId(ordersTab)+1,
        userId:userId,
        productId:productId,
        qty:qty
    }
    //Save into LS
    ordersTab.push(order);
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    updateStock(productId,Number(qty));
    location.replace("basket.html");
    }
    else {
     document.getElementById('qtyError').innerHTML="Unvalid quantity or stock unavailable";
     document.getElementById('qtyError').style.color="red";
    }
}
 //update stock after reservation
function updateStock(id,qty){
 var productsTab=JSON.parse(localStorage.getItem('products')||'[]');
 for(var i=0; i<productsTab.length; i++){
     if(productsTab[i].id==id){
         productsTab[i].stock=productsTab[i].stock-qty;
         break;
     }
 }
 localStorage.setItem('products',JSON.stringify(productsTab));
}

//fonction pour l'Admin qui affiche les informations sur les orders.
function displayAllOrders(){
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var content='';
    var totalSum=0;
    for(var i=0; i<ordersTab.length;i++){
        totalSum=totalSum+ ordersTab[i].qty*searchObj(ordersTab[i].productId,"products").price;
        content=content+`
        <tr>
        <td>
          ${ordersTab[i].id}
        </td>
        <td>
          ${searchObj(ordersTab[i].userId,"users").fName}
        </td>
        <td>
          ${searchObj(ordersTab[i].productId,"products").nameProduct}
        </td>
        <td>
          ${searchObj(ordersTab[i].productId,"products").price}
        </td>
        <td>
           ${ordersTab[i].qty}
        </td>
        <td>
        ${ordersTab[i].qty*searchObj(ordersTab[i].productId,"products").price}
        </td>
        
    </tr>`;
   
    }
    content=content+`Total Somme : ${totalSum}`;
    document.getElementById("orderDiv").innerHTML=content;
}

// a completer searchUser() et searchProduct()
function searchUser(id){
    var usersTab=JSON.parse(localStorage.getItem('users') || '[]');
    var findedUser;
    for(var i=0; i<usersTab.length;i++){
        if(usersTab[i].id==id){
            findedUser=usersTab[i];
            break;
        }

    }
    return findedUser;
}

function searchProduct(id){
    var productsTab=JSON.parse(localStorage.getItem('products') || '[]');
    var findedProduct;
    for(var i=0; i<productsTab.length;i++){
        if(productsTab[i].id==id){
            findedProduct=productsTab[i];
            break;
        }
    }
    return findedProduct;
}

function searchObj(id,key){
    var T=JSON.parse(localStorage.getItem(key) || '[]');
    var findedOb;
    for(var i=0; i<T.length;i++){
        if(T[i].id==id){
            findedOb=T[i];
            break;
        }

    }
    return findedOb;
}

//Fonction qui affiche un tableau contenant les commandes de l'utilisateur connecté (fonctionne)
function displayMyOrders(){
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var cUserId=localStorage.getItem('connectedUserId'); 
    var content='';
    var totalSum=0;
    for(var i=0; i<ordersTab.length;i++){
        
        if(ordersTab[i].userId==cUserId){
        totalSum=totalSum+ ordersTab[i].qty*searchObj(ordersTab[i].productId,"products").price;
        content=content+`
        <tr>
        <td>
          ${ordersTab[i].id}
        </td>
        <td>
          ${searchObj(ordersTab[i].productId,"products").nameProduct}
        </td>
        <td>
          ${searchObj(ordersTab[i].productId,"products").price}
        </td>
        <td>
           ${ordersTab[i].qty}
        </td>
        <td>
        ${ordersTab[i].qty*searchObj(ordersTab[i].productId,"products").price}
        </td>
        </td>
        <td><button class="btn btn-danger" onclick="deleteOrder(${ordersTab[i].id})">Delete</button>
        </td>
        
        
    </tr>`;
        }
    }
    content=content+`Total Somme : ${totalSum}`;
    document.getElementById("orderDiv").innerHTML=content;
}
 
//Fonction qui affiche un tableau contenant les commandes de l'utilisateur connecté (fonctionne) //Correction
function displayMyOrders2(){
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var cUserId=localStorage.getItem('connectedUserId'); 
    var content='';
    var totalSum=0;
    var myOrdersTab=[];
    for(var i=0; i<ordersTab.length;i++){
        
        if(ordersTab[i].userId==cUserId){
            myOrdersTab.push(ordersTab[i]);
        }
    }
    for(var i=0; i<myOrdersTab.length;i++){
        totalSum=totalSum+ myOrdersTab[i].qty*searchObj(myOrdersTab[i].productId,"products").price;
        content=content+`
        <tr>
        <td>
          ${myOrdersTab[i].id}
        </td>
        <td>
          ${searchObj(myOrdersTab[i].productId,"products").nameProduct}
        </td>
        <td>
          ${searchObj(myOrdersTab[i].productId,"products").price}
        </td>
        <td>
           ${myOrdersTab[i].qty}
        </td>
        <td>
        ${myOrdersTab[i].qty*searchObj(myOrdersTab[i].productId,"products").price}
        </td>
        <td><button class="btn btn-danger" onclick="deleteOrder(${myOrdersTab[i].id})">Delete</button>
        
        </td>
        
    </tr>`;
        }
    
    content=content+`<tr><td> Total Somme : </td><td></td><td></td><td></td><td>${totalSum}</td><td></td><tr>`;
    document.getElementById("orderDiv").innerHTML=content;
}
//fonction qui efface une ligne de commande selon l'id dans OrdersTab
function deleteOrder(id){
    
    var ordersTab=JSON.parse(localStorage.getItem('orders') || '[]');
    var pos=searchOrderPositionById(id);
    ordersTab.splice(pos,1);
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    location.reload();
}
//rendre la position d'un élement dans un tableau selon son id
function searchOrderPositionById(id){
    var position;
    var ordersTab=JSON.parse(localStorage.getItem('orders') || '[]');
    for(var i=0; i<ordersTab.length;i++){
        if(ordersTab[i].id==id){
            position=i;
            break;
        }
    }
    return position;
}

//fonction pour générer un header Dynamique
function generateHeader(){
    var connectedUserId=localStorage.getItem('connectedUserId');
    var content='';
    var connectedUserId= searchObj(connectedUserId,'users');
    if(connectedUserId){
        //user is connected
        content=`
        <li class="nav-item "><a class="nav-link" href="index.html">Home</a></li>
		<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item "><a class="nav-link" href="products.html">Products</a></li>
	    <li class="nav-item"><a class="nav-link" href="profile.html">Hello: ${connectedUserId.fName} ${connectedUserId.lName}</a></li>
        <li class="nav-item "><a class="nav-link" href="basket.html">basket</a></li>
        <li class="nav-item "><a class="nav-link" onclick="logout()">logout</a></li>`
    }
    else{
        //user is not connected
        content=`
        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
		<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
	    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
        <li class="nav-item ">Are you a :<a class="nav-link" href="signup.html">Client</a> or a <a class="nav-link" href="signupStore.html">Store</a> ?</li>`
		
    }
    document.getElementById('headerId').innerHTML=content;
}

//
function logout(){
localStorage.removeItem('connectedUserId');
location.replace("index.html");
}

function displayAdminProducts(){
    var productsTab=getKey("products");
    var content='';
    for(var i=0; i<productsTab.length; i++){
        content=content+`
        <tr>
									<td>${productsTab[i].id}</td>
									<td>${productsTab[i].nameProduct}</td>
									<td>${productsTab[i].price}</td>
									<td>${productsTab[i].category}</td>
									<td>${productsTab[i].stock}</td>
									<td>
                                    <button class="btn btn-warning">Update</button>
                                    <button class="btn btn-danger">delete</button>
                                    </td>
		</tr>
        

        `;
    }
    document.getElementById("adminProductsDiv").innerHTML=content;
}

function displayAdminUsers(){
    var usersTab=getKey("users");

    var content='';
    for(var i=0; i<usersTab.length; i++){
        content=content+`
        <tr>
									<td>${usersTab[i].id}</td>
									<td>${usersTab[i].fName}</td>
									<td>${usersTab[i].lName}</td>
									<td>${usersTab[i].email}</td>
									<td>${usersTab[i].tel}</td>
                                    <td>${usersTab[i].role}</td>
									<td>
                                    <button class="btn btn-warning">Update</button>
                                    <button class="btn btn-danger">delete</button>
                                    </td>
		</tr>
        

        `;
    }
    document.getElementById("adminUsersDiv").innerHTML=content;
}
//La même que "displayAllOrders()" quelques modification dans les variables sans afficher le Total
function displayAdminOrders(){ 
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var content='';
    for(var i=0; i<ordersTab.length;i++){
        content=content+`
        <tr>
        <td>
          ${ordersTab[i].id}
        </td>
        <td>
          ${searchObj(ordersTab[i].userId,"users").fName}
        </td>
        <td>
          ${searchObj(ordersTab[i].userId,"users").email}
        </td>
        <td>
           ${ordersTab[i].qty}
        </td>
        <td>
          ${searchObj(ordersTab[i].productId,"products").nameProduct}
        </td>
        <td>
            <button class="btn btn-warning">Update</button>
            <button class="btn btn-danger">delete</button>
         </td>
       
        
    </tr>`;
   
    }
  
    document.getElementById("adminOrdersDiv").innerHTML=content;
}