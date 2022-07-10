function myfun() {
  var name = document.querySelector(".field .name");
  if (name.value == "") {
    document.querySelector(".field .ename").style.display = "block";
    return false;
  } else {
    document.querySelector(".field .ename").style.display = "none";
    console.log("Hi ".concat(name.value));
  }

  var college_name = document.querySelector(".field .college_name");
  if (college_name.value != "")
    console.log("You're studying in ".concat(college_name.value));

  var email = document.querySelector(".field .email");
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.value.match(mailformat)) {
    document.querySelector(".field .eemail").style.display = "none";
    console.log("Your email is: ".concat(email.value));
  } else {
    document.querySelector(".field .eemail").style.display = "block";
    return false;
  }

  var mob_no = document.querySelector(".field .mob_no");
  var mob_no_format = /^\d{10}/;
  if (mob_no.value.match(mob_no_format)) {
    document.querySelector(".field .emob_no").style.display = "none";
    console.log("Your mobile no is: ".concat(mob_no.value));
  } else {
    document.querySelector(".field .emob_no").style.display = "block";
    return false;
  }
}
