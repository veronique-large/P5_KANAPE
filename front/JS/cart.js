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
    price.innerHTML = cart.price;
    itemDesc.appendChild(price);

    let itemSetting = document.createElement("div");
    itemSetting.classList.add("cart__item__content__settings");
    
    let itemContentQuantity = document.createElement("div");
    itemContentQuantity.classList.add("cart__item__content__settings__quantity");
    itemSetting.appendChild(itemContentQuantity);

    //variable pour creer la balise p de quantite, puis aller recupèrer la quantite de kanape
    let quantity = document.createElement("p");
    quantity.classList.add("quantity");
    quantity.innerHTML = kanap.quantity;
    itemContentQuantity.appendChild(quantity);
        
    //creation de input
    let input = document.createElement('input');
    input.classList.add("itemQuantity"); //Ajout d'une classe au bouton
    input.innerHTML = kanap.quantity; //recupèration de la quantite de kanape à l'interieur de HTML
    itemContentQuantity.appendChild(input);
    input.setAttribute("type","number"); // definition des attributs du bouton, de type nombre
    input.setAttribute("name","itemQuantity"); // "" de nom itemQuantity
    input.setAttribute("value","productQuantity"); // "" de valeur productQuantity
  
    let itemImg = document.createElement('div');
    itemImg.classList.add("cart__item__img");
    items.appendChild(itemImg);

    //creation de l'image du kanap selectionne dans le chariot
    let img = document.createElement('img');
    img.classList.add("cartImage");
    img.innerHTML = cart.image;
    img.src = cart.imageUrl;
    img.alt.innerHTML = cart.altTxt;
    itemImg.appendChild(img);

    let itemContentSetting = document.createElement('div');
    itemContentSetting.classList.add("cart__item__content__settings__delete");

    let deleteItem = document.createElement('p');
    deleteItem.classList.add('deleteItem');
    deleteItem.innerHTML = cart.delete;
    itemContentSetting.appendChild(deleteItem);       
           });   
    }
}