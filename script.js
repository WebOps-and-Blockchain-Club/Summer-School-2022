let person= {
    name: "",
    college: "",
    email: "",
    phone: ""
};

function handleChange(event) {
    let x=event.target.name;
    person={...person, [x]: document.forms["gform"][x].value};
}
function handleSubmit(event) {
    event.preventDefault();
    if (person.name==="") {
        alert("empty name");

    }
    else if (person.email==="") {
        alert("empty email");
    }
    else{
        console.log(person);
    }
}
