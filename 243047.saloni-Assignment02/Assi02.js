function validate() {
    let firstname1 = document.getElementById("fname").value;
    console.log(firstname1);
    console.log(typeof firstname1);
    let lastname = document.getElementById("lname").value;


    // document.getElementById("lname1").innerText = lastname;
    //firstname
    let error = document.getElementById("fnameError");

    const pattern1 = /^[A-Za-z]+$/
    if (firstname1.length === 0) {
        //  document.getElementById("fname1").innerText = firstname1;
        error.textContent = "please enter first name";
        error.style.color = "red";
    }
    else if (firstname1.length < 3) {
        document.getElementById("fname1").innerText = firstname1;
        error.textContent = "Name must be at least 3 characters"
        error.style.color = "red";
    }
    else if (!pattern1.test(firstname1)) {
        //  document.getElementById("fname1").innerText = firstname1;
        error.textContent = "Name must be in characters"
        error.style.color = "red";
    }
    else {
        document.getElementById("fname1").innerText = firstname1;
        error.textContent = "";
    }


    //lastname

    let error2 = document.getElementById("lnameError");
    const pattern2 = /^[A-Za-z]+$/
    if (lastname.length === 0) {
        error2.textContent = "please enter last name";
        error2.style.color = "red";
    }
    else if (lastname.length < 3) {
        error2.textContent = "Name must be at least 3 characters"
        error2.style.color = "red";
    }
    else if (!pattern2.test(lastname)) {
        error2.textContent = "Name must be in characters"
        error2.style.color = "red";
    }
    else {
        error2.textContent = "";
        document.getElementById("lname1").innerText = lastname;
    }
    //email

    let email = document.getElementById("email").value;
    // document.getElementById("email1").innerText = email;
    let error3 = document.getElementById("emailError");
    const pattern3 = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    if (email.length === 0) {
        error3.textContent = "please enter email";
        error3.style.color = "red";
    }
    else if (!pattern3.test(email)) {
        error3.textContent = "Invalid email format"
        error3.style.color = "red";
    }
    else {
        error3.textContent = "";
        document.getElementById("email1").innerText = email;
    }
    //phone

    //     
    let phone = document.getElementById("phone").value;
    let error4 = document.getElementById("phoneError");

    let pattern4 = /^\+91[0-9]{10}$/;

    if (phone === "") {
        error4.textContent = "Please enter phone number";
        error4.style.color = "red";
        document.getElementById("phone1").innerText = "";
    }
    else if (!pattern4.test(phone)) {
        error4.textContent = "Enter valid Indian phone number";
        document.getElementById("phone1").innerText = "";
        error4.style.color = "red";
    }
    else {
        error4.textContent = "";
        document.getElementById("phone1").innerText = phone;
    }

    //address

    let address = document.getElementById("address").value;
    document.getElementById("address1").innerText = address;
    let error5 = document.getElementById("addressError");
    if (address.length === 0) {
        error5.textContent = "please enter Address";
        error5.style.color = "red";
    }
    else {
        error5.textContent = "";
    }
    //course

    let course = document.getElementById("course").value;
    document.getElementById("course1").innerText = course;

    let error6 = document.getElementById("courseError");
    if (course === "") {
        error6.textContent = "please select course";
        error6.style.color = "red";
    }
    else {
        error6.textContent = "";

    }
    //subject

    let checkboxes = document.getElementsByName("subject");

    let selected = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }
    let error7 = document.getElementById("subjectError");
    if (selected.length < 2) {
        error7.textContent = "please select atleast 2 subject";
        error7.style.color = "red";
        document.getElementById("selected").innerText = "";
    }
    else {
        error7.textContent = "";
        document.getElementById("selected").innerText = selected.join(", ");
    }
    //subdate

    let subdate = document.getElementById("date").value;
    let error8 = document.getElementById("dateError");

    if (subdate === "") {
        error8.textContent = "Please enter submission date";
        error8.style.color = "red";
        document.getElementById("subdate").textContent = "";
    }
    else {
        error8.textContent = "";
        document.getElementById("subdate").textContent = subdate;
    }

}