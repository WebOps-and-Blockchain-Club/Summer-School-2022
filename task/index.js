

function myFunction(){
    
    var name1=document.querySelector(".name").value;
      if(name1===''){
       alert("Invalid Name");
      }
      else{
        console.log("Name : "+name1);
      }
    
      var name2 = document.querySelector(".college").value;
      if(name2===''){
       console.log("College name : -");
      }
      else{
        console.log("College name : "+ name2);
      }
    
      var name3 = document.querySelector(".email").value;
      if(name3===''){
       alert("Invalid email");
      }
      else{
        console.log("email : "+name3);
      }
    
      var name4 =document.querySelector(".mobile").value;
      if(name4===''){
        console.log("Mobile Number : -");
      }
      else{
        console.log("Mobile Number : "+name4);
      }
    }
    
    