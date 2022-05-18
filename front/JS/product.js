fetch("http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926")
    .then(reponse => reponse.json()) 
    .then(article => console.table(article))
    /**creation d'un boucle pour obtenir les informations */
    /*.then(function (products) {
            products.forEach(product => {*/

                const item__img = document.getElementsByClassName('item__img');
                const firstElements = item__img[0];
                console.log(item__img);
                let img = document.createElement('img');
                 img.src = product.imageUrl;
                 img.alt = product.altTxt;
                 items.appendChild(img);
            
                 let title = document.createElement('title');
                 title.classList.add("productsName");
                 title.innerHTML = products.name;
                 classItem.appendChild(title);

                 
      /*     })
        })*/