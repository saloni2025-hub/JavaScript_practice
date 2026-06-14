function concatname(){
    alert("form submit")
let firstname=document.getElementById("fname").value;
let lastname=document.getElementById("lname").value;

//let fullname=firstname+" "+lastname;
document.getElementById("result").innerText=firstname+" "+lastname;
}
function Add(){
    let value1=document.getElementById("istvalue").value;
    let value2=document.getElementById("value2").value;

    //let sum=Number(value1)+Number(value2);
    document.getElementById("numres1").innerText=Number(value1)+Number(value2);
}

 function mul(){
    let value1=document.getElementById("istvalue").value;
    let value2=document.getElementById("value2").value;

   // let m=value1*value2;
    document.getElementById("numres1").innerText=value1*value2;
}
function sub(){
    let value1=document.getElementById("istvalue").value;
    let value2=document.getElementById("value2").value;

    //let s=value1-value2;
    document.getElementById("numres1").innerText=value1-value2;
}
function divide(){
    let value1=document.getElementById("istvalue").value;
    let value2=document.getElementById("value2").value;

    //let d=value1/value2;
    document.getElementById("numres1").innerText=value1/value2;
}


// let fnameInput = document.getElementById("fname");
// let lnameInput = document.getElementById("lname");

// let firstname = fnameInput.value;
// let lastname = lnameInput.value;

// if (firstname.length === 0 && lastname.length === 0) {
//     fnameInput.style.backgroundColor = "skyblue";
// } else {
//     fnameInput.value = "";
// }
let fnameInput = document.getElementById("fname");
let lnameInput = document.getElementById("lname");

function handleInput(input) {
    if (input.value.length > 0) {
        input.style.backgroundColor = "lightblue";
    } else {
        input.style.backgroundColor = "white";
    }
}

fnameInput.addEventListener("input", function () {
    handleInput(fnameInput);
});

lnameInput.addEventListener("input", function () {
    handleInput(lnameInput);
});

