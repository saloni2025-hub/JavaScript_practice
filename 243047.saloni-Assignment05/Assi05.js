// let input=document.getElementById("task")
// let btn=document.getElementById("add")
// list=document.getElementById("list");
// console.log(input);

// let btnDelete=document.createElement("button")
// console.log(btnDelete);
// btn.addEventListener("click",()=>{
//     let li=document.createElement("li");
//     li.textContent=input.value;
//     list.appendChild(li);
//     input.value="";
// })


let input = document.getElementById("task");
let btn = document.getElementById("add");
let list = document.getElementById("list");

btn.addEventListener("click", () => {

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // console.log(checkbox);
    
    let li = document.createElement("li");
    li.textContent = input.value;

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";

    checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
    li.style.textDecoration="line-through";
    btnDelete.style.textDecoration="line-through";
}
else{
    li.style.textDecoration="none";
    btnDelete.style.textDecoration="none";
}
    })
    btnDelete.addEventListener("click", () => {
        alert("Do you really want to delete the task!!!")
        li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(btnDelete);
    list.appendChild(li);
    input.value = "";
});