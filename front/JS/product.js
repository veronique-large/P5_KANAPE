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
            // gestion des options de couleurs
            product.colors.forEach(color => {          
                let optionColor = document.createElement('option');  
                colors.appendChild(optionColor);
                optionColor.innerHTML = color;/*J'applique la variable optionColors à l'interieur de HTML, la valeur du mot clé color*/
                optionColor.value = color; /*J’applique à la variable optionColor, la valeur du mot cle color (paramètre dans la boucle ligne 31) */     
            });

            let itemQuantity = document.querySelector('#quantity');/*je créé une variable pour lui donner comme reference la balise liee à l'ID quantity*/
 
   
    let addButton = document.querySelector('#addToCart');
     addButton.addEventListener('click', function() {
            let kanap = {
                id:id, 
                colors:document.getElementById("colors").value,
                quantity:parseInt(document.getElementById("quantity").value),
            }
            // si des donnees existente dans le localStorage recuperer
            let DonneesLocalStorage = JSON.parse(localStorage.getItem("kanap"));
            

           const recherche = () =>{  
                DonneesLocalStorage.push(kanap);
            
                localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
            } // Si il y a des donnees dans le local storage
            if (DonneesLocalStorage){
                let rechercheProduit = DonneesLocalStorage.find(p => p.id === kanap.id && p.colors === kanap.colors);
                if (rechercheProduit){
                    let newQuantity = rechercheProduit.quantity + kanap.quantity;
                    rechercheProduit.quantity = newQuantity;
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