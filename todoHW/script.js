console.log('Test');

// let ulItem = document.querySelector('ul').children;
// console.log(ulItem);

// let input = document.getElementById('input').nodeValue;
function addItem(event) {
    let inputedItem =  document.getElementById("newItem");

    let newLI = document.createElement('li');
    newLI.innerHTML = inputedItem.value;
    newLI.addEventListener("click", removeItem);

    let list = document.querySelector('ul');
    list.appendChild(newLI);

    inputedItem.value = '';

}

function removeItem(event) {
    //let parent = document.getElementById("todo");
    //event.target.remove()
    let element = event.target;
    element.classList.add("strikethrough");
    setTimeout(function(){ element.remove(); }, 1000);

}


document.getElementById("addItem").addEventListener("click", addItem);

