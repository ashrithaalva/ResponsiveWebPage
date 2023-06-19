const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must type something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        let edit= document.createElement("button");
        // edit.innerHTML='<i class="far fa-edit></i>';
        edit.classList.add("edit");
        edit.id='edit-btn';
        let editImage=document.createElement("img");
        editImage.src='edit.jpg';
        edit.appendChild(editImage);
        li.appendChild(edit);
        edit.onclick =function(){
            editWorking(li)
        }
    }
    inputBox.value="";    
    saveData()  
    
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
function editWorking(f){
    let editValue= prompt('Edit the selected item', f.firstChild.nodeValue)
    f.firstChild.nodeValue=editValue;
}

showTask();