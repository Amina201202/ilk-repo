let userDate = [];
let inputs = document.querySelectorAll("input");
let tbody = document.querySelector("tbody");

function addUser() {
  let trueForm = true;
  inputs.forEach((input) => {
    if (input.checkValidity()) {
      input.nextElementSibling.style.color = "green";
    } else {
      input.nextElementSibling.style.color = "red";
      trueForm = false;
      alert("Məlumatlar düzgün doldurulmayıb");
    }
  });

  if (trueForm) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = inputs[0].value;
    let td2 = document.createElement("td");
    td2.innerText = inputs[1].value;
    let td3 = document.createElement("td");
    td3.innerText = userDate.length + 1;
    let td4 = document.createElement("td");
    let button = document.createElement("button");
    button.classList.add("delete");
    button.innerText = "Sil";
    td4.append(button);
    tr.append(td1, td2, td3, td4);
    tbody.append(tr);

    let obj = {
      userName: inputs[0].value,
      userAge: inputs[1].value,
      userIndex: userDate.length + 1,
    };
    userDate.push(obj);
    inputs[0].value = "";
    inputs[1].value = "";
  }

  console.log("User uğurla əlavə olundu:", userDate);
}
