fetch("http://localhost:3000/api/products/")
    .then(function(res) {
        if (res.ok) {
            return res.json();
     }
    })
    /*creation de la boucle pour obtenir les informations de chaque article */
    .then(function(products){
        products.forEach(product => {

               
    let items = document.getElementById('items');
    
    let a = document.createElement('a');
    a.href ="./product.html?id="+product._id;
    items.appendChild(a);

    let article = document.createElement('article');
    a.appendChild(article);
     
    let img = document.createElement('img');
    img.classList.add("productImage");
    img.src = product.imageUrl;
    img.alt = product.altTxt;
    article.appendChild(img);

    let h3 = document.createElement('h3');
    h3.classList.add("productSofaName");
    article.appendChild(h3);
    h3.innerHTML = product.name;
  
    let p = document.createElement('p');
    p.classList.add("productDescription");
    p.innerHTML = product.description;
    article.appendChild(p);


     
});
    });