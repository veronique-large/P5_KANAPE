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
 

    let items = document.getElementById('cart__items');
    
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

    //variable pour creer les couleurs et les quantites
    let p = document.createElement('p');
    p.classList.add("colors") + ("quantity");
    p.innerHTML = product.colors + product.quantity;
    itemContent.appendChild(p);

    let itemSetting = document.createElement("div");
    itemSetting.classList.add("cart__item__content__settings");
    
    let itemContentQuantity = document.createElement("div");
    itemContentQuantity.classList.add("cart__item__content__settings__quantity");
    itemSetting.appendChild(itemContentQuantity);
    
    let itemImg = document.createElement('div');
    itemImg.classList.add("cart__item__img");
    items.appendChild(itemImg);

    let img = document.createElement('img');
    img.classList.add("productImage");
    img.src = product.imageUrl;
    img.alt = product.altTxt;
    itemImg.appendChild(img);
           });   
    }
}