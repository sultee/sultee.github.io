var products = [
'Uber for heads',
'Netflix for starters',
'ProductHunt for houseowners'
]


function newProduct() {
var randomNumber = Math.floor(Math.random()*(products.length));

document.getElementById('productPlace').innerHTML = products[randomNumber];
}
