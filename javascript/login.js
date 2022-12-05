

function pressLogin()
{
  let user = document.getElementById('username').value
  let pass = document.getElementById('password').value
  let formLogin=document.getElementById('demo')
  let demouser=document.getElementById('demo-user')
  let demopass=document.getElementById('demo-pass')
  if(user.length < 6 || pass.length < 6)
  {
    demouser.innerHTML="Nhập tài khoản trên 6 ký tự"
    demouser.style.fontSize="15px"
    demouser.style.color="red"
    demopass.innerHTML="Nhập mật khẩu trên 6 ký tự"
    demopass.style.fontSize="15px"
    demopass.style.color="red"

  }
  else
  {
    window.location.href="./index-sucess-login.html"
  }
}

