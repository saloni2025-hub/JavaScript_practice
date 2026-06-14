
let counter=1;
let  click=document.getElementById("btnclick");

let btnclick=()=>{
    let isValid=true;
    //Name
let name= document.getElementById("name").value
let pattern1=/^[A-Za-z\s]{2,}$/
let error1= document.getElementById("error1")
if(name.length === 0){
    console.log(error1)
    error1.textContent="Enter your name"; 
    error1.style.color="red"
    isValid=false; 
}
else if(!pattern1.test(name)){
    error1.textContent="Enter valid name";
    error1.style.color="red"
    isValid=false;
}
else{
    error1.textContent="";
}
//contact
let contact=document.getElementById("number").value
let error2=document.getElementById("error2")
let pattern2=/^[0-9]{10}$/
if(contact.length === 0){
    console.log(contact.length)
    error2.textContent="Enter contact number"
    error2.style.color="red"
    isValid=false;
}
else if(!pattern2.test(contact)){
    error2.textContent="enter 10 digit number"
     error2.style.color="red"
    isValid=false;
}
else{
    error2.textContent="";
}
// email
let email=document.getElementById("email").value
let error3=document.getElementById("error3")
let pattern3=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
if(email.length===0){
    error3.textContent="Enter the Email"
     error3.style.color="red"
    isValid=false;
}
else if(!pattern3.test(email)){
    error3.textContent="Enter the correct Email"
     error3.style.color="red"
}
else{
    error3.textContent="";
}

if(isValid===false){
    // alert("fill the form or either any error in the the form ")
    return;
}

let tbody=document.getElementById("tableBody");

// console.log(tbody)

let row=document.createElement("tr")


let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")
let td5=document.createElement("td")
let td6=document.createElement("td")

let btnEdit=document.createElement("button")
console.log(btnEdit)
let btnDelete=document.createElement("button")
console.log(btnDelete)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
td5.append(btnEdit)
td6.append(btnDelete)
 
row.append(td1,td2,td3,td4,td5,td6)
row.style.backgroundColor="pink";


tbody.appendChild(row)

btnEdit.textContent="Edit"
btnDelete.textContent="Delete"

 
td1.textContent=counter;
counter++;
td2.textContent=name;
td3.textContent=contact;
td4.textContent=email;

btnDelete.addEventListener("click",()=>{
    alert("Do you really want to delete the data");
    row.remove();
})
btnEdit.addEventListener("click",()=>{
    
        if (btnEdit.innerText === "Edit") {
            td2.innerHTML = `<input value="${td2.innerText}">`;
            td3.innerHTML = `<input value="${td3.innerText}">`;
            td4.innerHTML = `<input value="${td4.innerText}">`;
            btnEdit.innerText = "Update";
        } else {
            td2.innerText = td2.querySelector("input").value;
            td3.innerText = td3.querySelector("input").value;
            td4.innerText = td4.querySelector("input").value;
            btnEdit.innerText = "Edit";
        }
    
})
document.getElementById("name").value="";
document.getElementById("number").value="";
document.getElementById("email").value="";

}
click.addEventListener("click",btnclick);





   

    
