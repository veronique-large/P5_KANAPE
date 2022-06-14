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
            if (DonneesLocalStorage){
            //ajout du produit dans le tableau des donnees
                DonneesLocalStorage.push(kanap);
            //
                localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
            }
            else{
                DonneesLocalStorage =[];
                DonneesLocalStorage.push(kanap);
                localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
            }

            let donneesColors ={
                kanap01:['colors,"Blue", "White", "Black" '],
                kanap02:['colors, "Black/Yellow", "Black/Red" '],
                kanap03:['colors,"Green", "Red", "Orange" '],
                kanap04:['colors,"Pink", "White"'],
                kanap05:['colors,"Grey", "Purple", "Blue"'],
                kanap06:['colors,"Grey", "Navy"'],
                kanap07:['colors,"Red", "Silver"'],
                kanap08:['colors,Pink", "Brown", "Yellow", "White']  
            }
            if (DonneesLocalStorage){ //si donnees dans le LS 
                let kanap03 = colors.orange; // le kanpa03 est de couleur orange
            }
           /* let resultat = donneesColors.find( kanap03 => colors ='Orange');*/

            let numberskanap = [1,2,3,4,5,6,7,8]; 
            let newNumberskanap = numberskanap.filter((kanap) => {
                 numberskanap > 5 ;
                 colors: "Brown";
            })
            console.log(newNumberskanap);
        });
    
                });
            
        
           

