const btn = document.querySelector(".btn-login");
const login_menu = document.querySelector(".login");
const change_menu = document.querySelector(".forgot");
const closeMenu1 = document.querySelector(".close1");
const closeMenu2 = document.querySelector(".close2");
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const user = document.getElementById("user");
const password = document.getElementById("password");
const loginCheck = document.querySelector(".login-1");
const checkValueUser = document.querySelector(".check-user");
const checkValuePassword = document.querySelector(".check-password");
const btnSave = document.querySelector(".save");
const oldPass = document.getElementById("oldpass");
const newPass1 = document.getElementById("newpass");
const checkOldPass = document.querySelector(".check-oldpass");
const checkNewPass = document.querySelector(".check-newpass");
const login_show = document.getElementById("showLogin");
const forGot = document.getElementById("forgot");
const bgr = document.getElementById("background");

var checkUser;
var checkPassword;
var valueOld;
var valueNew;
var isCheck = true;
var account = {
  accountUser: "admin",
  accountPw: "admin",
};

user.oninput = function (e) {
  checkUser = e.target.value;
  checkValueUser.innerHTML = "";
  alert1.innerHTML = "";
};
password.oninput = function (e) {
  checkPassword = e.target.value;
  checkValuePassword.innerHTML = "";
  alert1.innerHTML = "";
};

const onBlur = (cb1, cb2, message) => {
  cb1.onblur = function (e) {
    if (e.target.value === "") {
      cb2.innerHTML = `<p class='aler1'>Bạn cần nhập ${message}</p>`;
      isCheck = false;
    } else {
      cb2.innerHTML = "";
      isCheck = true;
    }
  };
};

onBlur(user, checkValueUser, "user");
onBlur(password, checkValuePassword, "password");

function showLogin() {
  isCheck = true;
  document.getElementsByTagName("form")[0].reset();
  loginCheck.innerHTML = "Login";
  alert1.innerHTML = "";
  checkValueUser.innerHTML = "";
  checkValuePassword.innerHTML = "";
  login_menu.classList.add("open");
  loginCheck.classList.remove("exit");
  btn.classList.add("exit");
  bgr.classList.add("open");
  change_menu.classList.remove("open");
}
function closeLogin() {
  login_menu.classList.remove("open");
  btn.classList.remove("exit");
  change_menu.classList.remove("open");
  bgr.classList.remove("open");
}
function check() {
  if (isCheck) {
    alert1.innerHTML = "";
    if (user.value === "" && password.value === "") {
      checkValueUser.innerHTML = "<p class='aler1'>Bạn cần nhập user</p>";
      checkValuePassword.innerHTML = "<p>Bạn cần nhập password</p>";
      console.log(user.value);
    } else if (user.value === "") {
      checkValueUser.innerHTML = "<p>Bạn cần nhập user</p>";
    } else if (password.value === "") {
      checkValuePassword.innerHTML = "<p>Bạn cần nhập password</p>";
    } else if (
      checkPassword === account.accountPw &&
      checkUser === account.accountUser
    ) {
      alert1.innerHTML = "";
      loginCheck.innerHTML = "--Loading--";
      setTimeout(() => {
        btn.classList.remove("exit");
        btn.innerHTML = "Đăng nhập thành công";
        btn.removeEventListener("click", showLogin);
        closeLogin();
      }, 500);
    } else if (checkUser === account.accountUser) {
      loginCheck.innerHTML = "--Loading--";
      setTimeout(() => {
        loginCheck.innerHTML = "Login";
        alert1.innerHTML = "<span>Mật khẩu không chính xác</span>";
        loginCheck.innerHTML = "Login";
      }, 500);
    } else {
      loginCheck.innerHTML = "--Loading--";
      setTimeout(() => {
        loginCheck.innerHTML = "Login";
        alert1.innerHTML = "<span>Sai thông tin đăng nhập</span>";
        loginCheck.innerHTML = "Login";
      }, 500);
    }
  }
}
btn.addEventListener("click", showLogin);
closeMenu1.addEventListener("click", closeLogin);
closeMenu2.addEventListener("click", closeLogin);
loginCheck.addEventListener("click", check);

forGot.onclick = () => {
  checkOldPass.innerHTML = "";
  checkNewPass.innerHTML = "";
  document.getElementsByTagName("form")[0].reset();
  document.getElementsByTagName("form")[1].reset();
  change_menu.classList.add("open");
  login_menu.classList.remove("open");
  alert2.innerHTML = "";
};

onBlur(oldPass, checkOldPass, "password");
onBlur(newPass1, checkNewPass, "password");

oldPass.oninput = function (e) {
  valueOld = e.target.value;
  checkOldPass.innerHTML = "";
  alert2.innerHTML = "";
};

newPass1.oninput = function (e) {
  valueNew = e.target.value;
  checkNewPass.innerHTML = "";
  alert2.innerHTML = "";
};

btnSave.onclick = () => {
  alert2.innerHTML = "";
  if (oldPass.value === "" && newPass1.value === "") {
    checkNewPass.innerHTML = "<p>Bạn cần nhập password</p>";
    checkOldPass.innerHTML = "<p>Bạn cần nhập password</p>";
  } else if (oldPass.value === "") {
    checkOldPass.innerHTML = "<p>Bạn cần nhập password</p>";
  } else if (newPass1.value === "") {
    checkNewPass.innerHTML = "<p>Bạn cần nhập password</p>";
  } else {
    btnSave.innerHTML = "--Loading--";
    setTimeout(() => {
      if (valueOld === account.accountPw) {
        if (valueNew === account.accountPw) {
          alert2.innerHTML =
            "<span>Password mới không đươc giống password cũ</span>";
          btnSave.innerHTML = "Save";
        } else {
          btnSave.innerHTML = "Save";
          account.accountPw = valueNew;
          Pass = valueNew;
          showLogin();
          alert1.innerHTML = "<span><i>Thay đổi mật khẩu thành công</i></span>";
        }
      } else {
        alert2.innerHTML = "<span>Mật khẩu không chính xác</span>";
        btnSave.innerHTML = "Save";
        document.getElementsByTagName("form")[1].reset();
      }
    }, 500);
  }
};

login_show.onclick = function () {
  showLogin();
};
