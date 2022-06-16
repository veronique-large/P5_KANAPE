//si les donnees du produit existe dans la sessionStorage on recupere les donnees du produit
let DonneesLocalStorage = JSON.parse(localStorage.getItem("kanap"));
if (DonneesLocalStorage){//je cree une condition si il y a des donnees dans le sessionStorage
    for(let product of DonneesLocalStorage) { //je cree une boucle for of pour parcourir les donnees du produit           
        let kanap = {
            id:product.id,
            colors:product.colors,
            quantity:product.quantity,
        } //la variable kanap est composee d'un ID d'une couleur et d'une quantite

        fetch("http://localhost:3000/api/products/" + kanap.id) 
      
        .then(function(reponse) {
            if (reponse.ok) {
                return reponse.json()
            }
        })
        .then(function(cart) {
 

    let items = document.querySelector('#cart__items');
    
    let article = document.createElement('article');
    article.classList.add("cart__item");
    items.appendChild(article);

    
    let itemContent = document.createElement("div");
    itemContent.classList.add("cart__item__content");
    article.appendChild(itemContent);

    let itemDesc = document.createElement("div");
    itemDesc.classList.add("cart__item__content__description");
    itemContent.appendChild(itemDesc);

    let h2 = document.createElement('h2');
    h2.classList.add("productName");
    h2.innerHTML = cart.name;
    itemDesc.appendChild(h2);

    //variable pour creer la balise p de colors et pour aller chercher la couleur du kanape
    let colors = document.createElement('p');
    colors.classList.add("colors");
    colors.innerHTML = kanap.colors;
    itemDesc.appendChild(colors);

    //variable pour creer la balise p de price, et innerHTML pour aller recupèrer le prix du produit
    let price = document.createElement('p');
    price.classList.add("price");
    price.innerHTML = cart.price + "<em>€</em>"; // modification du contenu avec concatenation
    itemDesc.appendChild(price);

    let itemSetting = document.createElement("div");
    itemSetting.classList.add("cart__item__content__settings");
    itemContent.appendChild(itemSetting);

    let itemContentQuantity = document.createElement("div");
    itemContentQuantity.classList.add("cart__item__content__settings__quantity");
    itemSetting.appendChild(itemContentQuantity);

    //variable pour creer la balise p de quantite, puis aller recupèrer la quantite de kanape
    let quantite = document.createElement("p");
    quantite.classList.add("quantity");
    quantite.innerHTML = ("Qte :");
    itemContentQuantity.appendChild(quantite);
        
    //creation de input
    let quantity = document.createElement('input');
    quantity.classList.add("itemQuantity"); //Ajout d'une classe a l input
    quantity.setAttribute("type","number"); // definition des attributs de input, de type nombre
    quantity.setAttribute("name","itemQuantity"); // "" de nom itemQuantity
    quantity.setAttribute("value",kanap.quantity); //value correspondant à la quantite de kanape
    quantity.setAttribute("min","1");// "" de valeur min kanapQuantity
    quantity.setAttribute("max","100");// "" de valeur max kanapQuantity
    itemContentQuantity.appendChild(quantity);

    let itemImg = document.createElement('div');
    itemImg.classList.add("cart__item__img");
    items.appendChild(itemImg);

    //creation de l'image du kanap selectionne dans le chariot
    let img = document.createElement('img');
    img.src = cart.imageUrl;
    img.alt = cart.altTxt;
    itemImg.appendChild(img);

    let itemSettingsDelete = document.createElement('div');
    itemSettingsDelete.classList.add("cart__item__content__settings__delete");
    itemContent.appendChild(itemSettingsDelete);

    let deleteI = document.createElement('p');
    deleteI.classList.add('deleteItem');
    deleteI.innerHTML = ("supprimer");
    itemSettingsDelete.appendChild(deleteI);

    //on ecoute l'evenement change, la function preventDefaut empeche l'execution du comportement par defaut  
    quantity.addEventListener('change', function(event) {
        event.preventDefault();

   const recherche = () =>{

    DonneesLocalStorage.push(kanap);

    localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));

    if (DonneesLocalStorage){
        let recherche2 = DonneesLocalStorage.find(p => p.id != kanap.id && p.colors != kanap.colors);//variable de filtre des p pour les DLS, si le paramètres ne sont pas egaux aux produits 
        if (recherche2){
            let newQuantity = recherche2.quantity + kanap.quantity;
            recherche2.quantity = newQuantity;
            newQuantity = null; // nouvelle quantite est null
            localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
        }
        else if (DonneesLocalStorage) { // sinon si dans les DLS les p du produit sont + ou - egal au produit
           let rechercheProduit3 = DonneesLocalStorage.find(p => p.id = +- kanap.id && p.colors +- kanap.colors);
           let newQuantity = rechercheProduit3 -+ kanap.quantity;
           rechercheProduit3.quantity = newQuantity;
           if (newQuantity = -1) { // Si la nouvelle quantite est egal à -1
            remove.newQuantity(kanap); // Supprime la nouvelle quantite de kanap
           }  
        }
        else {
            recherche ();  
        }
        
    }
   }
    })
    /*
    let cartprice = document.querySelector(".cart_price");

    let total = document.querySelector('p');
    
    let articles = document.getElementById('totalQuantity');
    articles.innerHTML = totalQuantity;

    let prices = document.getElementById('totalPrice');
    prices.innerHTML = totalPrice;
    })*/


       })
        
    }

           
        };
