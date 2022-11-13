var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(!name || !password){
        alert("please fill all inputs");
        return;
    }

    var display = document.getElementById("display");

    var newrow = display.insertRow(row);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);

    cell1.innerHTML = row;
    cell2.innerHTML = name;
    cell3.innerHTML = password;

    document.getElementById("name").value = "";
    document.getElementById("password").value = "";


    row ++;

}