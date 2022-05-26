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
    
            let item__img = document.getElementsByClassName('item__img');

            let img = document.createElement('img');
            img.classList.add("productImage");
            img.src = product.imageUrl;
            img.alt = product.altTxt;
            item__img.appendChild(img);
            
            let title = document.getElementById('title'); 
            title.innerHTML = product.name;

            let price = document.getElementById('price');
            price.innerHTML = product.price;

            let description = document.getElementById('description');
            description.innerHTML = product.description;

            
})



    

