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
        
    //creation du bouton input
    let bouton = document.createElement('input');
    bouton.classList.add("itemQuantity"); //Ajout d'une classe au bouton
    bouton.innerHTML = kanap.quantity; //recupèration de la quantite de kanape à l'interieur de HTML
    itemContentQuantity.appendChild(bouton);
    bouton.setAttribute("type","number"); // definition des attributs du bouton, de type nombre
    bouton.setAttribute("name","itemQuantity"); // "" de nom itemQuantity
    bouton.setAttribute("value","productQuantity"); // "" de valeur productQuantity
  
    let itemImg = document.createElement('div');
    itemImg.classList.add("cart__item__img");
    items.appendChild(itemImg);

    let img = document.createElement('img');
    img.classList.add("productImage");
    img.innerHTML = cart.img;
   /* alt.innerHTML = cart.alt;*/
    itemImg.appendChild(img);

    let itemContentSetting = document.createElement('div');
    itemContentSetting.classList.add("cart__item__content__settings__delete");

    let deleteItem = document.createElement('p');
    deleteItem.classList.add('deleteItem');
    itemContentSetting.appendChild(deleteItem);

    
           });   
    }
}