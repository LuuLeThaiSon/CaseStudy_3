function login() {
     let userName = document.getElementById("userName").value;
     let password = document.getElementById("password").value;


     if (userName=="admin"&&password=="admin") {
          window.location.href= "index-2.html"
     } else {
          document.getElementById("mess").innerHTML = "Sai tên đăng nhập hoặc mật khẩu"
     }
}

function game() {
     window.location.href = "number-guessing.html"
}

