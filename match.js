
const products = [
    { id: 1, name: 'Walton Phone', price: 19000 },
    { id: 2, name: 'Samsung Phone', price: 20000 },
    { id: 3, name: 'I Phone', price: 21000 },
    { id: 4, name: 'X Phone', price: 32000 },
    { id: 5, name: 'Google Phone', price: 42000 },
];
let search = 'samsung';
// for(const product of products){
//     console.log(product);
// }
function searchProduct(search, products) {
    const matched = [];
    for (const product of products) {
        if (product.name.includes(search)) {
            matched.push(product);
        }
    }
    return matched;
}
let result = searchProduct('Samsung',products);
console.log(result);
