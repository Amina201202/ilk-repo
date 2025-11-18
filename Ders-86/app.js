let tbody = document.querySelector("tbody");
let productName = document.querySelector("#product-name");
let productPrice = document.querySelector("#product-price");
let productPhoto = document.querySelector("#product-photo");

function addProduct() {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = Math.round(Math.random() * 20);
  let td2 = document.createElement("td");
  td2.innerText = productName.value;
  let td3 = document.createElement("td");
  td3.innerText = productPrice.value;
  let td4 = document.createElement("td"); 
  let img = document.createElement("img");
  img.src = productPhoto.value;
  td4.append(img);
  tr.append(td1, td2, td3, td4);
  tbody.append(tr);
}
