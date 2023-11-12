let quantity = 0;
let username;
let note;

document.getElementById("decrease").onclick = function () {
    quantity = Math.max(quantity - 1, 0)
    document.getElementById("quantity").innerHTML = quantity;
}

document.getElementById("reset").onclick = function () {
    quantity = 0;
    document.getElementById("quantity").innerHTML = quantity;
}

document.getElementById("increase").onclick = function () {
    quantity += 1;
    document.getElementById("quantity").innerHTML = quantity;
}


document.getElementById("submit").onclick = function () {
    username = document.getElementById("username");
    note = "Hello " + username.value + ", You must drink 3-6 litres of water per day.";
    if (username.value.length <= 0) {
        alert("Please enter Username");
    }
    else {
        document.getElementById("note").innerHTML = note;
    }
}