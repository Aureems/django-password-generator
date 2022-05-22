/*var vardas = prompt("Koksmanovardas?");

if(vardas === "Aurimas"){
    document.write("Teisingai")
}else{
    document.write("Neteisingai")
}
*/
// var fruits = ["Banana", "Kiwi", "oranage"];
//
// for(var i =0; i < fruits.length; i++){
//     document.write("Vaisius: " + fruits[i] + "<br>");
// }

// const diena = "sestadienis"
//
// switch (diena){
//     case "pirmadienis":
//         console.log('pirmadienis')
//         break
//     case "antradienis":
//         console.log('antradienis')
//         break
//     case "treciadienis":
//         console.log('3dienis')
//         break
//     case "sestadienis":
//         console.log('siandien sestadienis')
//         break
//     default:
//         console.log('kita diena')
// }

// const vardai = []
//
// function addName(name){
//     vardai.push(name)
// }
//
// addName('aurimas')
// addName('gediminas')
// addName('povilas')
//
// console.log(vardai.indexOf('povilas'))
// console.log(vardai)
//
// function displayText(){
//     console.log('The button has been clicked')
// }
// document.getElementById('myId').style.backgroundColor = 'lightblue'

// Select elements and assigh them to variables

var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var toDoUl =document.querySelector('.todo-list ul');
var completeUl = document.querySelector('.completed-list ul');

const createNewTask = function (task){
    console.log('Creating task..')

    const listItem = document.createElement('li'); // <li></li>
    const checkBox = document.createElement('input');
    const label = document.createElement('label')

    label.innerText = task;
    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
};

const addTask = function (){
    console.log('Add task..');
    var listItem = createNewTask(newTask.value);
    toDoUl.appendChild(listItem)
    newTask.value = "";
    bindIncompleteItems(listItem, completeTask);
};

var completeTask = function (){
    var listItem = this.parentNode;

    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);
    var checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

var deleteTask = function (){
    console.log("Deleting task..");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};

var bindIncompleteItems = function (taskItem, checkBoxClick){
    console.log("binding the incomplete list");

    var checkBox = taskItem.querySelector("input[type=checkbox]")
    checkBox.onchange = checkBoxClick;
};

var bindCompleteItems = function (taskItem, deleteButtonPress){
    console.log("Binding the complete task..");
    var deleteButton = taskItem.querySelector(".delete");
    deleteButton.onclick = deleteButtonPress;
};

for(var i=0; i < toDoUl.children.length; i++){

    bindIncompleteItems(toDoUl.children[i], completeTask);

}
for (var i=0; i < completeUl.children.length; i++){
    bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener('click', addTask);