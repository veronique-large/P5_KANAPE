//si les donnees du produit existe dans la sessionStorage on recupere l item du produit
let DonneesSessionStorage = JSON.parse(sessionStorage.getItem("product"));
    if (DonneesSessionStorage){
        DonneesSessionStorage.for.of(product => { //je cree une boucle for qui permet de repeter un certain nbre de fois le code
            document.getElementById("product").innerHTML=product.idProduct;//je recupère le produit et son id à l'interieur de Html
        })
    
let product = {id:id, color:color, quantity:quantity}
fetch("http://localhost:3000/api/products"+{itemId})
       
    
            
           
sessionStorage.setItem('kanap', this.product);

if (sessionStorage.getItem('kanap') !==null) {
    this.product = sessionStorage.getItem('kanap') ;
}
}
