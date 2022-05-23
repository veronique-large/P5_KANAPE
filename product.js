let url = new URLSearchParams('http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926');
const id = url.get('107fb5b75607497b96722bda5b504926');
const str = 'http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926';

fetch('http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926')
    .then(reponse => reponse.json()) 
    .then(reponse2 => console.log(reponse2))
    
fetch("http://localhost:3000/api/products")
.then(res => {
    if(res.ok){
        res.json().then(data => {
})
   

/*.then(function(product){
    product.for(product => {*/
   
    
    /*let .item = document.getElementsByClassName('.item');*/

    let img = document.createElement('productImage');
    img.src = 'http://localhost:3000/images/kanap01.jpeg';
    /*item.appendchild(img);*/

    let h1 = document.createElement('h1');title.innerHTML;
    h1.innerHTML = ('title');
    title = ('productName');
    
    var p = document.getElementById('price');
    var Text = document.createTextNode("1849");
    p.appendChild(Text);
    
    }
})

    
    

