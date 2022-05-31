let url = new URLSearchParams(window.location.search);
const id = url.get('id');
const str = 'http://localhost:3000/api/products/'+id;

fetch(str)
    .then(function(reponse) {
        if (reponse.ok) {
            return reponse.json()
        }
    }) 
.then(function(product) {
    
    let itemImg = document.querySelector('.item__img');

            let img = document.createElement('img');
            img.classList.add("productImage");
            img.src = product.imageUrl;
            img.alt = product.altTxt;
            itemImg.appendChild(img);
          
            let title = document.getElementById('title'); 
            title.innerHTML = product.name;

            let price = document.getElementById('price');
            price.innerHTML = product.price;

            let description = document.getElementById('description');
            description.innerHTML = product.description;

            let colors = document.querySelector('#colors');/* je créé une variable pour lui donner comme référence la balise liée à l’ID Colors*/

            product.colors.forEach(color => {/* je créé une boucle pour appeler les données de toutes les couleurs, product correspond au produit, colors à leur valeur,product.colors(identifiant) identifie les couleurs du produit, color(argument) fait reference à la couleur ce qui permet de l'appeler*/
                let optionColor = document.createElement('option');/* je créé une variable que j'appelle optionColor  pour créer l'element option*/
                colors.appendChild(optionColor);/*je definie la variable optionColor comme étant l'enfant de colors*/
                optionColor.innerHTML = color;/*J'applique la variable optionColors à l'interieur de HTML, la valeur du mot clé color*/
                optionColor.value = color; /*J’applique à la variable optionColor, la valeur du mot clé color (paramètre dans la boucle ligne 31) */     
            });/*la fermeture du bloc*/

            let quantity = document.querySelector('#quantity');/*je créé une variable pour lui donner comme référence la balise liée à l'ID quantity*/
 
            const EventTarget = function (product) {/*je créé une constante pour cibler les fonctions de l'élément product*/
            this.listeners = {}/*cette ecoute du produit*/
        }
            EventTarget.prototype.listeners = null/*la cible de l'element est null*/
            EventTarget.prototype.addEventlistener = function (event) {/*ecouter les fonctions de l'evenement cible avec l'evenement*/
                if(type = product);/*si le type est égal au produit*/
             id = value.product;/*la valeur du produit est égal à son ID*/
             colors = value.product.colors;/*la valeur des couleurs du produit son égal à sa couleur*/
             quantity = value.quantity;/*la valeur de quantity est égal à sa valeur*/
    }
  
    let buttonToCart = document.querySelector('#addToCart');/*je créé une variable pour lui donner comme référence la balise liée à l'ID buttonToCart*/
     buttonToCart.addEventListener('click', function() {/*j'ajoute un ecouteur d'evenements sur le buttonToCart, on écoute l'evenement click*/
        buttonToCart.innerHTML = "c'est ajouté";/* le contenu de l'element est changé*/
})

     

        })          
                 
          





    



