<<<<<<< HEAD
// email validation with reg-exp
module.exports.validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// iterations for password encryption
=======
// email validation with reg-exp
module.exports.validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// iterations for password encryption
>>>>>>> bf48e58 (windows -> wsl)
module.exports.iterations = 10;