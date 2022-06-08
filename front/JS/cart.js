//si les donnees du produit existe dans la sessionStorage on recupere l item du produit
let DonneesSessionStorage = JSON.parse(sessionStorage.getItem("product"));
    if (DonneesSessionStorage){//je cree une condition si il y a des donnees dans le sessionStorage
        for(let kanap of product) {
        /*    document.getElementById("product").innerHTML=product.idProduct;//le produit recuperé dans HTML est egal au produit et son ID
        })*/
    
let product = {id:id, color:color, quantity:quantity} //la variable produit est composee d'un ID d'une couleur et d'une quantite
fetch("http://localhost:3000/api/products"+id);
                  
           
sessionStorage.setItem('kanap', this.product.innerHTML);

if (sessionStorage.getItem('kanap') !==null) {
    this.product = sessionStorage.getItem('kanap') ;
}
           }
    }
