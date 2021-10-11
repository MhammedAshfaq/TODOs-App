var add = document.getElementById("add");
var remove = document.getElementById("remove");


// Add Button Action Starts
add.addEventListener("click", getAnUpdate);


function getAnUpdate() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    if (localStorage.getItem("itemsJson") == null) {
        itemjsonArray = [];
        itemjsonArray.push([title, description]);
        localStorage.setItem("itemsJson", JSON.stringify(itemjsonArray));
    } else {
        itemjsonArrayStr = localStorage.getItem("itemsJson");
        itemjsonArray = JSON.parse(itemjsonArrayStr);
        console.log(itemjsonArray);
        itemjsonArray.push([title, description]);
        localStorage.setItem("itemsJson", JSON.stringify(itemjsonArray));
    }
    updateButton();
}
function updateButton() {

    // Inserting pushed tiltle and discription to lable 
    if (localStorage.getItem("itemsJson") == null) {
        itemjsonArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(itemjsonArray));
    } else {
        itemjsonArrayStr = localStorage.getItem("itemsJson");
        itemjsonArray = JSON.parse(itemjsonArrayStr);
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemjsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button id="remove" class="btn btn-sm btn-danger" onclick= "deleted(${index})"> Delete</button></td>
          </tr> `
    });
    tableBody.innerHTML = str
}
// Add Button Action Ends





//Function Delete Starts
function deleted(itemIndex) {
    itemjsonArrayStr = localStorage.getItem("itemsJson");
    itemjsonArray = JSON.parse(itemjsonArrayStr);
    // Deleting
    itemjsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemjsonArray));
    updateButton();
}
//Function Delete Ends




// Clear All Lists Starts
function clearAllList() {
    console.log("Local Storage Cleard");
    localStorage.clear();
    updateButton();   
}
// Clear All Lists Ends



