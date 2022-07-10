document.getElementById("submit").onclick = function(params){
    var email = document.getElementById("emailadd").value;
    var dep = document.getElementById("department").value;
    var issue = document.getElementById("issue").value;
    console.log("Email address",email);
    console.log("Department",dep);
    console.log("issue",issue);
}