function Validate(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    if(fname == '' || fname.length<3){
          alert('Трябва да съдържа поне 3 символа!');
          return false;
    }

    if(lname == '' || lname.length<3){
          alert('Трябва да съдържа поне 3 символа!');
          return false;
    }

    if(email == '' || email.length<3){
          alert('Трябва да съдържа поне 3 символа!');
          return false;
    }

    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
      alert('Невалиден имейл!');
      return false;
    }
}