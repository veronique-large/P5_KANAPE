/*let limitedWidthBlock = document.querySelector(".limitedWidthBlock");
let addButton = document.getElementById("#addToCart");
let input = document.getElementById("order");

class reservation{
constructor() {
    this.addButton = addButton;
    this.input = order;
    this.kanap = kanap;

}
}
*/
sessionStorage.setItem('kanap', this.product);

if (sessionStorage.getItem('kanap') !==null) {
    this.product = sessionStorage.getItem('kanap') ;
}
