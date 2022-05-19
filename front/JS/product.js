
fetch("http://localhost:3000/api/products")
.then(function(res) {
    if (res.ok) {
        return res.json();
 }
})
/**creation de la boucle pour obtenir les informations de chaque article */
.then(function(products){
    products.forEach(product => {

var str = "http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926"
var url = new URL(str);
var id = url.searchParams.get("product");
console.log(product);



       })
    })