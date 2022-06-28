//si les donnees du produit existe dans le LocalStorage on recupere les donnees du produit
let DonneesLocalStorage = JSON.parse(localStorage.getItem("kanap"));
let pricesKanap = 0;
if (DonneesLocalStorage){//je cree une condition si il y a des donnees dans le sessionStorage
    for(let product of DonneesLocalStorage){ //je cree une boucle for of pour parcourir les donnees du produit           
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
    article.appendChild(itemImg);

    //creation de l'image du kanap selectionne dans le chariot
    let img = document.createElement('img');
    img.src = cart.imageUrl;
    img.alt = cart.altTxt;
    itemImg.appendChild(img);

    let itemSettingsDelete = document.createElement('div');
    itemSettingsDelete.classList.add("cart__item__content__settings__delete");
    itemContent.appendChild(itemSettingsDelete);

    let deleteI = document.createElement('P');
    deleteI.classList.add('deleteItem');
    deleteI.innerHTML = (cart.delete, "supprimer");
    itemSettingsDelete.appendChild(deleteI);

    //on ecoute l'evenement change, la function preventDefaut empeche l'execution du comportement par defaut  
    quantity.addEventListener('change', function(event) {
        event.preventDefault();

        let produit = kanap.id;
        let produitCouleur = kanap.colors;

    let recherche = DonneesLocalStorage.find(p => p.id === produit && p.colors === produitCouleur);

    if (recherche){
            recherche.quantity = Number(quantity.value); 
            localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
        }
    else {
        DonneesLocalStorage.push(kanap);
        localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));

        }
        document.location.reload();
    });

    deleteI.addEventListener('click', function(event) {
       event.preventDefault(); 

        let canape = kanap.id; 
        let canapeCouleur = kanap.colors;
    // la variable filtre les donnees LS, une fonction est parametrée lorsque p.id est inégal à produit, ou que p.colors est inégal à produitCouleur  
    let filtre = DonneesLocalStorage.filter(p => p.id != canape ||  p.colors != canapeCouleur);
    event.target.closest(".cart__item").remove();     //lors de l'evenement sur l'article supprime 
    pricesKanap += (kanap.quantity.value * prices);

    localStorage.setItem("kanap", JSON.stringify(filtre));
    document.location.reload();
    
    });
    
   /* let cartprice = document.querySelector(".cart__price");*/

   /* let total = document.querySelector('p');
    total.innerHTML = kanap.quantity, cart.price;
 
   /* let articles = document.getElementById('totalQuantity');
    articles.innerHTML = kanap.quantity;*/

   /* let prices = document.getElementById('totalPrice');
    prices.innerHTML = cart.price;

   /* let cartquest = document.querySelector('cart__order__form__question');

    let firsterror = document.getElementById('firstNameErrorMsg').textContent = "ceci est un message d'erreur";
    firsterror.textContent = firstNameErrorMsg;
    */
    });
        };
     
    // on cree une fonction, ensuite on cree une variable X qui se rapporte aux
    // DLS, creer ensuite une boucle qui fait appel à la variable X a l interieur
    //de la boucle on cree une variable Y += au nombre de product.quantity, fermer la boucle
    // on cree la variable totalQuantity qui se rapporte à l'id pour mettre dans
    // son innerHTML la variable Y, fermer la function et la lancer
    function totalCommande() {
    let total = DonneesLocalStorage;
    let kanaps = 0;

    for(let product of total){
    kanaps += Number(product.quantity);
    }
 
    let totalQuantity = document.getElementById('totalQuantity');
    totalQuantity.innerHTML = kanaps;

   
  
    let totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = pricesKanap;
   
    }

    totalCommande();
}


