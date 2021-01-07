var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var randomNumber = Math.floor(Math.random()*(myObj.products.length));
    document.getElementById("productPlace").innerHTML = myObj.products[randomNumber];
  }
};
xmlhttp.open("GET", "db.txt", true);
xmlhttp.send();


// var randomNumber = Math.floor(Math.random()*(products.length));
// document.getElementById('productPlace').innerHTML = products[randomNumber];
