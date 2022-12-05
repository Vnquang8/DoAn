function checkEmail(){
    var email = document.getElementById("email").value
    var checkEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email !='' && email !=null){
        //Kiểm tra email đã đúng định dạng hay chưa
        if(email.match(checkEmail)){
            confirm("Email: "+email +" đã đăng ký nhận thông báo thành công")
        }
    }else{
        alert("Email không hợp lệ vui lòng thử lại.")
    }
}
function submitOrder(){
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value
    var emailOrder = document.getElementById("email-order").value
    var order= document.getElementById("wish").value
    var checkEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(name != '' && name != null && isNaN(name)==true){
        if(isNaN(phone)==false && phone !='' && phone !=null && phone.length >= 10){
            if(emailOrder!='' && emailOrder!=null){
                if(emailOrder.match(checkEmail)){
                    var orderCheck = prompt("Xác nhận lại số lượng mua hàng (Đây là kết quả cuối cùng)")
                    confirm("Tên Khách Hàng: "+name
                    +" \n Số điện thoại: "+phone
                    +" \n Email: "+emailOrder
                    +" \n Số lượng: "+orderCheck
                    +" \n Yêu cầu: "+order
                    +" \n Nhấn OK để xác nhận thông tin")
                    alert("Anh/Chị "+name+" đã đặt hàng thành công. Trở lại trang chủ")
                    window.location.href="./index.html"
                }else{
                    alert("Email không hợp lệ vui lòng thử lại.")
                }
            }else{
                alert("Vui Lòng nhập email")
            }
        }else{
            alert("Số điện thoại không hợp lệ")
        }
    }else{
        alert("Họ Tên không hợp lệ.")
    }
}
function sign() {
    var user = document.getElementById('user').value
    var accountName = document.getElementById('account-name').value
    var pass = document.getElementById('password').value
    var checkPass = document.getElementById('check-password').value
    var region = document.getElementById('region').value
    var sucess= document.getElementById('yes')
    var isSucess=sucess.checked;
    //Kiểm tra Họ Ten
    if(user.length == 0 || isNaN(user)==false){
        document.getElementById('form-info_user').innerHTML="Vui Lòng Nhập Họ Tên hợp lệ"
        document.getElementById('user').classList.add('error')
    }else if(user.length != '' && isNaN(user)==true){
        document.getElementById('user').classList.remove('error')
        document.getElementById('form-info_user').innerHTML=" "
    }
    //Kiểm tra Tên Đăng nhập
    if(accountName.length == 0 || accountName.length < 4){
        document.getElementById('form-info_account').innerHTML="Tên đăng nhập không hợp lệ"
        document.getElementById('account-name').classList.add('error')
    }else if(accountName.length !='' && accountName.length>4){
        document.getElementById('form-info_account').innerHTML=" "
        document.getElementById('account-name').classList.remove('error')
    }
    //Kiểm tra mật khẩu
    if(pass.length==0 || pass.length < 6 || pass!=checkPass){
        document.getElementById('form-info_pass').innerHTML="Mật khẩu phải trên 6 ký tự"
        document.getElementById('password').classList.add('error')
    }else if(pass.length!=null && pass.length>6){
        document.getElementById('form-info_pass').innerHTML=" "
        document.getElementById('password').classList.remove('error')
    }
    //Kiểm tra lại mật khẩu
    if(checkPass.length==0||checkPass!=pass){
        document.getElementById('form-info_checkpass').innerHTML="Mật khẩu không khớp với mật khẩu vừa nhập"
        document.getElementById('check-password').classList.add('error')
    }else if(checkPass.length!='' && checkPass==pass){
        document.getElementById('form-info_checkpass').innerHTML= " "
        document.getElementById('check-password').classList.remove('error')
    }
    //Kiểm tra selection/option
    if(region.length==0){
        document.getElementById('form-info_region').innerHTML="Bạn phải chọn khu vực sinh sống"
    }else if(region.length!=''){
        document.getElementById('form-info_region').innerHTML=" "
    }
    //Kiểm tra checkbox
    if(isSucess==false){
        document.getElementById('form-info_sucess').innerHTML="Bạn chưa đồng ý với <a href='#'>điều khoản</a> "
    }else if(isSucess){
        document.getElementById('form-info_sucess').innerHTML=" "
    }
    //Kiểm tra nếu form đúng thì chuyển sang trang đăng nhập
    if(user.length != '' && isNaN(user)==true && accountName.length !='' && accountName.length>4 && pass.length!=null && pass.length>6 
        && checkPass.length!='' && checkPass==pass && region.length!='' && isSucess==true){
            alert("Bạn đã đăng ký thành công account '"+accountName+"' . Nhấn OK để chuyển sang trang đăng nhập")
            window.location.href="login.html"
    }
}
function remove() {
    var user = document.getElementById('user').value
    var accountName = document.getElementById('account-name').value
    var pass = document.getElementById('password').value
    var checkPass = document.getElementById('check-password').value
    var region=document.getElementById('region').value
    var sucess= document.getElementById('yes')
    var isSucess=sucess.checked;
    if(user.length != '' && isNaN(user)){
        document.getElementById('user').classList.remove('error')
        document.getElementById('form-info_user').innerHTML=" "
    }
    if(accountName.length !='' && accountName.length > 4){
        document.getElementById('form-info_account').innerHTML=" "
        document.getElementById('account-name').classList.remove('error')
    }
    if(pass.length!=null && pass.length>6){
        document.getElementById('form-info_pass').innerHTML=" "
        document.getElementById('password').classList.remove('error')
    }
    if(checkPass.length!='' && checkPass==pass){
        document.getElementById('form-info_checkpass').innerHTML= " "
        document.getElementById('check-password').classList.remove('error')
    }
    if(region.length!=''){
        document.getElementById('form-info_region').innerHTML=" "
    }
    if(isSucess==true){
        document.getElementById('form-info_sucess').innerHTML=" "
    }
}
function login(){
    var accountName = document.getElementById('account-name').value
    var pass = document.getElementById('password').value
    var formLogin = document.getElementById('form-login')

    if(accountName.length==0 || pass.length==0){
        document.getElementById("account-name").classList.add('error')
        document.getElementById("password").classList.add('error')
        formLogin.innerHTML=" !!Tên đăng nhập hoặc mật khẩu không chính xác"
        formLogin.style.color="red"
        formLogin.style.fontSize="12px"
    }else{
        document.getElementById("account-name").classList.remove('error')
        document.getElementById("password").classList.remove('error')
        formLogin.innerHTML=" "
        window.location.href="./index-sucess-login.html"
    }
}
function removeLogin(){
    var accountName = document.getElementById('account-name').value
    var pass = document.getElementById('password').value

    if(accountName.length !='' && accountName.length > 4){
        document.getElementById('account-name').classList.remove('error')
    }
    if(pass.length!=null && pass.length > 6){
        document.getElementById('password').classList.remove('error')
    }
}
