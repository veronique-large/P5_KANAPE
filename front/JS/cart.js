//si les donnees du produit existe dans la sessionStorage on recupere l item du produit
let DonneesSessionStorage = JSON.parse(sessionStorage.getItem("product"));
    if (DonneesSessionStorage){//je cree une condition si il y a des donnees dans le sessionStorage
        for(let product of DonneesSessionStorage) { //je cree une boucle for of pour parcourir les donnees du produit
    
let kanap = (id, color, quantity); //la variable kanap est composee d'un ID d'une couleur et d'une quantite
fetch("http://localhost:3000/api/products"+itemId) 
                     
/*sessionStorage.setItem('kanap', this.product.innerHTML);

/*if (sessionStorage.getItem('kanap') !==null) {
    this.product = sessionStorage.getItem('kanap') ;
}*/
    .then(function() {
        if (res.ok) {
            return reponse.json()
        }
        })
}
}

    
/*    
    let cartItemImg = document.querySelector('.cart_item_img'); 
        let img = document.createElement('img');
        img.classList.add("productImage");
        img.src = product.imageUrl;
        img.alt = product.altTxt;
        cartItemImg.appendChild(img);
*/