let url = new URLSearchParams(window.location.search);
const id = url.get('id');
const str = 'http://localhost:3000/api/products/' + id;

fetch(str)
    .then(function(res) {
        if (res.ok) {
            return res.json()
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

            product.colors.forEach(color => {/* je cree une boucle pour appeler les donnees de toutes les couleurs, product correspond au produit, colors à leur valeur,product.colors(identifiant) identifie les couleurs du produit, color(argument) fait reference à la couleur ce qui permet de l'appeler*/
                let optionColor = document.createElement('option');/* je créé une variable que j'appelle optionColor  pour créer l'element option*/
                colors.appendChild(optionColor);/*je definie la variable optionColor comme étant l'enfant de colors*/
                optionColor.innerHTML = color;/*J'applique la variable optionColors à l'interieur de HTML, la valeur du mot clé color*/
                optionColor.value = color; /*J’applique à la variable optionColor, la valeur du mot cle color (paramètre dans la boucle ligne 31) */     
            });/*la fermeture du bloc*/

            let itemQuantity = document.querySelector('#quantity');/*je créé une variable pour lui donner comme reference la balise liee à l'ID quantity*/
 
   
    let addButton = document.querySelector('#addToCart');/*je cree une variable pour lui donner comme reference la balise liee à l'ID buttonToCart*/
     addButton.addEventListener('click', function() {/*j'ajoute un ecouteur d'evenements sur le addButton, on écoute l'evenement click*/
            let kanap = {
                id:id, 
                colors:("colors",document.getElementById("colors").value),
                quantity:("quantity",document.getElementById("quantity").value),
            }
            // si des donnees existente dans le localStorage recuperer
            let DonneesLocalStorage = JSON.parse(localStorage.getItem("kanap"));
            // si il y a des donnees dans le localStorage pousser le produit selectionne

           const recherche = () =>{ //je cree une constante de recherche 
            //ajout du produit dans le tableau des donnees
                DonneesLocalStorage.push(kanap);
            
                localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
            } // Si il y a des donnees dans le local storage
            if (DonneesLocalStorage){
                let rechercher = DonneesLocalStorage.find(p => p.id === kanap.id && p.colors === kanap.colors );
                if (rechercher){
                    let newQuantity = rechercher.quantity + kanap.quantity;
                    rechercher.quantity = newQuantity++;
                    localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
                }
                else{
                    recherche();
                }
            }
            else{
                DonneesLocalStorage =[];
                recherche();
            }
            
     });

                });