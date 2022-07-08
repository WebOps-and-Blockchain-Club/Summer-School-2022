function showOnConsole(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    if(name=="")
        alert("wHERE nAME????");
    else if(email=="")
        alert("wHERE eMAIL????");
    else{
        console.log(`Name         : "${name}"`);
        console.log(`College Name : "${document.getElementById('cname').value}"`);
        console.log(`Email        : "${email}"`);
        console.log(`Mobile No    : "${document.getElementById('phno').value}"`);
    }
    
}
