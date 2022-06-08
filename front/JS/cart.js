//si les donnees du produit existe dans la sessionStorage on recupere l item du produit
let DonneesSessionStorage = JSON.parse(sessionStorage.getItem("product"));
    if (DonneesSessionStorage){ //je cree une condition, si il y a des donnees dans le sessionStorage
        DonneesSessionStorage.for.of(product => { //je cree une boucle for qui permet de repeter un certain nbre de fois le code pou le produit
            document.getElementById("product").innerHTML=product.idProduct;//le produit recuperé dans HTML est egal au produit et son id
        })
    
let product = {id:id, color:color, quantity:quantity}

fetch("http://localhost:3000/api/products"+{itemId})
       
    
            
//J enregistre les donnees(sa valeur) du produit kanap dans la sessionStorage           
sessionStorage.setItem('kanap', this.product.innerHTML);
//si il y a des donnees dans la sessionStorage, je les recupère
if (sessionStorage.getItem('kanap') !==null) {
    this.product = sessionStorage.getItem('kanap') ;
}
}
