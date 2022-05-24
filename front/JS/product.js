let url = new URLSearchParams(window.location.search);
const id = url.get('id');
const str = 'http://localhost:3000/api/products/'+id;

fetch(str)
    /*.then(reponse => reponse.json())*/ 
    .then(function(reponse) {
        if (reponse.ok) {
            return reponse.json()
    .then(reponse2 => console.log(reponse2))
    
/*fetch("http://localhost:3000/api/products")
.then(res => {
    if(res.ok){
        res.json().then(data => {
})
    }
})*/

   
.then(function(products){ 
    this.article = products;
    this.products = id+products;
    
            /*let item_img = document.getElementsByClassName('item_img');*/

            let img = document.createElement('img');
            img.classList.add("productImage");
            img.src = 'http://localhost:3000/images/kanap01.jpeg';
            /*item_img.appendChild(img);*/

            let title = document.getElementById('title'); 
            title.innerHTML = ('kanap Sinopé');

            var p = document.getElementById('price');
            var Text = document.createTextNode("1849");
            p.appendChild(Text);

        })
    }
})
