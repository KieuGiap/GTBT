var subtotal=(13+1)*5;

var shipping = subtotal+shipping;

var elSub=document.getElementById('subtotal');
elSub.textContent=subtotal;

var elShip=document.getElementById('shipping');
elShip.textContent=shipping;

var elTotal = document.getElementById('total');
elTotal.textContent=total;
