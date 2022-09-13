let allListItems = document.getElementsByTagName("li");
//console.log(allListItems);
//console.log(allListItems.length);

let input = document.getElementById("input");
//console.log(input);

let list = document.querySelector("ul");
//console.log(list);

let addButton = document.getElementById("add-button");
//console.log(addButton);


//  add close button for each item  

for(let i=0; i< allListItems.length; i++){

  /* create close button */
  let closeButton = document.createElement("div");
  var x = document.createTextNode("X");
  closeButton.appendChild(x);
  closeButton.className = "close";

    allListItems[i].appendChild(closeButton);
}

// Hide the item , when the close button clicked .
var allCloseButtons = document.getElementsByClassName("close");
for(var i=0; i< allCloseButtons.length; i++){
    allCloseButtons[i].onclick = function(){
        var li = this.parentElement;
        li.style.display = "none";
    }
}

// add right mark (check mark ) when the item is clicked
for( var i=0; i< allListItems.length; i++){
    
    allListItems[i].onclick = function(){
        this.classList.toggle("checked");
    }
    
}


/*  add a new item in the list  */

function newTask(){
   
    if(input.value === ""){
        alert("please write a new task . ");
    }else{
        let newTask = document.createElement("li");
        let text = document.createTextNode(input.value);
        input.value = "";
    
        /* create close button */
        let closeButton = document.createElement("div");
        let x = document.createTextNode("X");
        closeButton.appendChild(x);
        closeButton.className = "close";
        
        
        newTask.appendChild(text);
        newTask.appendChild(closeButton);
        newTask.setAttribute("class" , "new-task");
        list.appendChild(newTask);
    
    }

    // to hide new tasks , when click the close button 
    for(var i=0; i< allCloseButtons.length; i++){

        allCloseButtons[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    //to add check mark , when click on the li
    let createdNewTasks = document.getElementsByClassName("new-task");
    for( var i=0; i< createdNewTasks.length; i++){
    
        createdNewTasks[i].onclick = function(){
            this.classList.toggle("checked");
        }
        
    }
        
};




