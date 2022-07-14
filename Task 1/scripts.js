function disp(){
    s=document.getElementById("name").value;  
    document.getElementById("name").value="";  
    c=document.getElementById("college").value;  
    document.getElementById("college").value="";  
    e=document.getElementById("email").value;  
    document.getElementById("email").value="";  
    p=document.getElementById("mobile").value;  
    document.getElementById("mobile").value="";  
    console.log(s);
    console.log(c);
    console.log(e);
    console.log(p);
}