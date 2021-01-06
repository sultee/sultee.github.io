var products = [
'Uber for heads',
'Netflix for starters',
'ProductHunt for houseowners'
]



var randomNumber = Math.floor(Math.random()*(products.length));

document.getElementById('productPlace').innerHTML = products[randomNumber];
