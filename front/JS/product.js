
fetch("http://localhost:3000/api/products")
.then(function(res) {
    if (res.ok) {
        return res.json();
 }
})
/**creation de la boucle pour obtenir les informations de chaque article */
.then(function(products){
    products.forEach(product => {

var str = "http://localhost:3000/api/products/+'id";
var url = new URL(str);
var id = url.searchParams.get("product");
console.log(product);



       })
    })