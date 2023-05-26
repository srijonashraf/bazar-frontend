var login_page = document.getElementById("login");
var register_page = document.getElementById("register");

var login_uname = document.getElementById("login_uname").value;
var login_pass = document.getElementById("login_pass").value;
var reg_fname = document.getElementById("reg_fname").value;
var reg_lname = document.getElementById("reg_lname").value;
var reg_uname = document.getElementById("reg_uname").value;
var reg_pass = document.getElementById("reg_pass").value;

function cancelbtn() {
  login_page.style.display = "none";
  register_page.style.display = "none";
}

function loginbtn() {
  login_page.style.display = "block";
  register_page.style.display = "none";
}

function regbtn() {
  login_page.style.display = "none";
  register_page.style.display = "block";
}

function loginfunc() {
  if (login_uname === "srijon" && login_pass === "passs") {
    alert("Login successful!");
    window.location.reload();
    // add code to redirect to the logged in page
  } else {
    alert("Wrong username or password!");
    return false;
  }
}
