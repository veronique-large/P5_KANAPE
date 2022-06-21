//si les donnees du produit existe dans la sessionStorage on recupere les donnees du produit
let DonneesLocalStorage = JSON.parse(localStorage.getItem("kanap"));
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
    deleteI.innerHTML = (cart.delete,"supprimer");
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
    // j'ecoute l evenement click sur le btnDelete
    let btnDelete = document.querySelector('.deleteItem');
    btnDelete.addEventListener('click', function(event) {
        event.preventDefault();
    // creation des deux variables pour aller chercher id et colors de kanap
        let produit = kanap.id; 
        let produitCouleur = kanap.colors;
    // la variable produits est egale au filtre dans le LS, le filtre declanche un parametre et une fonction, si p.id est inegal à produit(kanap) et produitCouleur
    let produits = DonneesLocalStorage.filter(p => p.id !== produit, produitCouleur);
    produits != 1 || 100; //produits inégal à 1 ou à 100
    event.target.closest(".cart__item").remove();//lors de l'evenement sur l'article supprime
    
    localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));

    document.location.reload();

    });
  
   /*     
   
    let cartprice = document.querySelector(".cart_price");

    let total = document.querySelector('p');
    total.innerHTML = kanap.quantity , cart.price;
 
    let articles = document.getElementById('totalQuantity');
    articles.innerHTML = kanap.quantity;

    let prices = document.getElementById('totalPrice');
    prices.innerHTML = cart.price;

    let cartquest = document.querySelector('cart__order__form__question');

    let firsterror = document.getElementById('firstNameErrorMsg').textContent = "ceci est un message d'erreur";
    firsterror.textContent = firstNameErrorMsg;
    */
    });
        }; 
    };

