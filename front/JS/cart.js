//si les donnees du produit existe dans le LocalStorage on recupere les donnees du produit
let DonneesLocalStorage = JSON.parse(localStorage.getItem("kanap"));
if (DonneesLocalStorage){//je cree une condition si il y a des donnees dans le sessionStorage
    let pricesKanap = 0;
    for(let product of DonneesLocalStorage){ //je cree une boucle for of pour parcourir les donnees du produit           
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
 

    let items = document.querySelector('#cart__items');
    
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

    //variable pour creer la balise p de colors et pour aller chercher la couleur du kanape
    let colors = document.createElement('p');
    colors.classList.add("colors");
    colors.innerHTML = kanap.colors;
    itemDesc.appendChild(colors);

    //variable pour creer la balise p de price, et innerHTML pour aller recupèrer le prix du produit
    let price = document.createElement('p');
    price.classList.add("price");
    price.innerHTML = cart.price + "<em>€</em>"; // modification du contenu avec concatenation
    itemDesc.appendChild(price);
    let cartPrice = cart.price;

    let itemSetting = document.createElement("div");
    itemSetting.classList.add("cart__item__content__settings");
    itemContent.appendChild(itemSetting);

    let itemContentQuantity = document.createElement("div");
    itemContentQuantity.classList.add("cart__item__content__settings__quantity");
    itemSetting.appendChild(itemContentQuantity);

    //variable pour creer la balise p de quantite, texte Qte
    let quantite = document.createElement("p");
    quantite.classList.add("quantity");
    quantite.innerHTML = ("Qte :");
    itemContentQuantity.appendChild(quantite);
        
    //creation de input
    let quantity = document.createElement('input');
    quantity.classList.add("itemQuantity"); //Ajout d'une classe a l input
    quantity.setAttribute("type","number"); // definition des attributs de input, de type nombre
    quantity.setAttribute("name","itemQuantity"); // "" de nom itemQuantity
    quantity.setAttribute("value",kanap.quantity); //value correspondant à la quantite de kanape
    quantity.setAttribute("min","1");// "" de valeur min kanapQuantity
    quantity.setAttribute("max","100");// "" de valeur max kanapQuantity
    itemContentQuantity.appendChild(quantity);

    let itemImg = document.createElement('div');
    itemImg.classList.add("cart__item__img");
    article.appendChild(itemImg);

    //creation de l'image du kanap selectionne dans le chariot
    let img = document.createElement('img');
    img.src = cart.imageUrl;
    img.alt = cart.altTxt;
    itemImg.appendChild(img);

    let itemSettingsDelete = document.createElement('div');
    itemSettingsDelete.classList.add("cart__item__content__settings__delete");
    itemContent.appendChild(itemSettingsDelete);

    let deleteI = document.createElement('P');
    deleteI.classList.add('deleteItem');
    deleteI.innerHTML = (cart.delete, "supprimer");
    itemSettingsDelete.appendChild(deleteI);

    //on ecoute l'evenement change, la function preventDefaut empeche l'execution du comportement par defaut  
    quantity.addEventListener('change', function(event) {
        event.preventDefault();

        let produit = kanap.id;
        let produitCouleur = kanap.colors;

    let recherche = DonneesLocalStorage.find(p => p.id === produit && p.colors === produitCouleur);

    if (recherche){
            recherche.quantity = Number(quantity.value); 
            localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));
        }
    else {
        DonneesLocalStorage.push(kanap);
        localStorage.setItem("kanap", JSON.stringify(DonneesLocalStorage));

        }
        document.location.reload();
    });

    deleteI.addEventListener('click', function(event) {
       event.preventDefault(); 

        let canape = kanap.id; 
        let canapeCouleur = kanap.colors;

    // la variable filtre les donnees LS, une fonction est parametrée lorsque p.id est inégal à produit, ou que p.colors est inégal à produitCouleur  
    let filtre = DonneesLocalStorage.filter(p => p.id != canape ||  p.colors != canapeCouleur);
    event.target.closest(".cart__item").remove();     //lors de l'evenement sur l'article supprime 

    localStorage.setItem("kanap", JSON.stringify(filtre));
    document.location.reload();

    });

    pricesKanap += quantity.value * cartPrice;
    let totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = pricesKanap;

    });
        }
    }
    // on cree une fonction, ensuite on cree une variable X qui se rapporte aux
    // DLS, creer ensuite une boucle qui fait appel à la variable X a l interieur
    //de la boucle on cree une variable Y += au nombre de product.quantity, fermer la boucle
    // on cree la variable totalQuantity qui se rapporte à l'id pour mettre dans
    // son innerHTML la variable Y, fermer la function et la lancer
    function totalCommande() {
    let total = DonneesLocalStorage;
    let kanaps = 0;

    for(let product of total){
    kanaps += Number(product.quantity);
    }
 
    let totalQuantity = document.getElementById('totalQuantity');
    totalQuantity.innerHTML = kanaps;
    }
    totalCommande();

   let firstName = document.getElementById("firstName");// - Créer la variable V de l’input lié à sa class ou son ID (voir le HTML)
   let regexPrenom = new RegExp ('^([a-zA-Z0-9]){3,30}$', 'g');//- Créer la variable W de la regex dont la valeur est new RegExp() => dans les parenthèses on place le motif (les marqueurs - suite de lettres de chiffres et d’expressions régulières)
                                                       // suite de lettres minuscules et majuscules et de chiffres, au moins 3 à 30 caracteres, et marqueur
   const firsterror = document.getElementById("firstNameErrorMsg");//- Créer la constante X lié à l’ID de l’erreur ( ex : firstNameErrorMsg)
   const messagePrenom = "le format du Prenom est incorrect";//- Créer la constante Y du texte de l‘erreur => exemple : Le format du prénom est incorrect
   const form = document.querySelector('.cart__order__form');//- Créer la constante Z sur la class : .cart__order__form
   form.firstName.addEventListener('change', function() {//- définir un évènement change sur le Z associé à la variable de V pour lancer une fonction (regardez bien comment vous avez traiter en amont vos addEventListener

    if(regexPrenom.test(firstName.value) == false) //- Une condition sur W.test(la valeur de V) égal égal faux) => ici test n’a pas d’importance c’est pour donner un nom à la variable associée au paramètre dans les parenthèse.
    {
      firsterror.innerHTMLText = "le format du Prenom est incorrect";     //- Si la condition est rempli alors X.innerHTML = Y
    }
    console.log(regexPrenom.test(firstName.value));
   });

   let lastName = document.getElementById("lastName");
   let regexNom = new RegExp ('^([A-Z]){3,30}$','g');
   const lasterror = document.getElementById("lastNameErrorMsg");
   const messageNom = "le format Nom est incorrect";
   form.lastName.addEventListener('change', function() {
   if(regexNom.test(lastName.value) == false)
   {
     lasterror.innerHTMLText = messageNom;  
   }
   /* console.log(regexNom.test(lastName.value));*/
   });
   let city = document.getElementById("city");
   let regexCity = new RegExp ('^([a-zA-Z-]){3,30}','g');
   const cityError = document.getElementById("cityErrorMsg");
   const messageCity = "le format ville est incorrect";
   form.city.addEventListener('change', function() {
    if(regexCity.test(city.value) == false)  
  {
    city.innerHTMLText = "le format ville est incorrect";
  }
   /* console.log(regexCity.test(city.value));*/

   });
   let commander = document.getElementById("order");
   let cartquest = document.querySelector(".cart_order_form_question");

   commander.addEventListener('click', function(event) {
            event.preventDefault();
    
    let storage = [];
    for(let product of DonneesLocalStorage){           
        storage.push(product.id);
    }

    let formulaire = {
    contact :
     {
    firstName : document.getElementById('firstName').value,
    lastName : document.getElementById('lastName').value,
    address : document.getElementById('address').value,
    city : document.getElementById('city').value,
    email : document.getElementById('email').value,
     },
    products : storage,
       }
    console.log(formulaire);
   
    const options =
    {
      method: "POST",
      headers:
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulaire),
    };

    fetch("http://localhost:3000/api/products/order", options)

      .then((res) => res.json())
      .then((data) => 
      {

document.location.href = "confirmation.html?orderId=" + data.orderId;
})
});
