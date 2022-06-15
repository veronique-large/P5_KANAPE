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
            let kanapNames = ["KanapSinopé","Kanap Cyllène","Kanap Calycé","Kanap Autonoé",
            "Kanap Eurydomé","Kanap Hélicé","Kanap Thyoné","Kanap orthosie" ];
            let kanapFiltres = kanapNames.filter(function(kanap) { //je cree une variable kanapeFiltres, j utilise filtre avec kanapNames[], j'utilise la fonction sur kanap
            if (KanapSinopé = blue){
                return true
            }
                if (quantity<1){
                 return true       
                }
        
            });
           
/*
            let donneeskanap ={
                kanap01:[id107fb5b75607497b96722bda5b504926],
                kanap02:[id415b7cacb65d43b2b5c1ff70f3393ad1],
                kanap03:[id055743915a544fde83cfdfc904935ee7],
                kanap04:[ida557292fe5814ea2b15c6ef4bd73ed83],
                kanap05:[id8906dfda133f4c20a9d0e34f18adcf06],
                kanap06:[id77711f0e466b4ddf953f677d30b0efc9],
                kanap07:[id034707184e8e4eefb46400b5a3774b5f],
                kanap08:[ida6ec5b49bd164d7fbe10f37b6363f9fb]  
            }
           
            let colorsk ={
                kanap01:["Blue", "White", "Black"],
                kanap02:["Black/Yellow", "Black/Red"],
                kanap03:["Green", "Red", "Orange"],
                kanap04:["Pink", "White"],
                kanap05:["Grey", "Purple", "Blue"],
                kanap06:["Grey", "Navy"],
                kanap07:["Red", "Silver"],
                kanap08:["Pink", "Brown", "Yellow", "White"]  
            }
           */

     });


                });