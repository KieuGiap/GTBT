var greeting='Howdy';
var name='Molly';
var mesage = ',plese check :';
var welcom=greeting+name+mesage;

var sign = 'Montague House';
var title = sign.length;
var subTotal=title*5;
var shipping=7;
var grandTotal=subTotal+shipping;

var el =document.getElementById('userSign')
el.textContent=welcom;

var elSign=document.getElementById('userSign');
elSign.textContent= sign;

var elTitle = document.getElementById('title');
elTitle.textContent=title;

var elSubTotal=document.getElementById('subTotal');
elSubTotal.textContent='$'+subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent='$'+shipping;

var elGrandTotal=document.getElementById('grandTotal');
elGrandTotal.textContent='$'+grandTotal;
