
@extends('master.master')

@section('title', 'Bạn đang ở trang sản phẩm')

@section('content')

<div class="container">
        <div id="signin">
            <div class="Title">
                <p>Sign In</p>
            </div>
                <div class="intro">
                <p>Để tải nhạc thì trước tiên bạn phải đăng nhập tài khoản của mình</p>
                <p>Âm nhạc là nguồn cảm hứng của mọi người</p>
                <p>Nghiêm Cấm những hành vi xúc phạm người khác, Phân biệt vùng miền, xúc phạm nhà nước Việt Nam</p>
                </div>
                <form action="">
                    <input type="text" id="username" placeholder="Nhập Tên Tài Khoản">
                    <input type="password" id="password" placeholder="Nhập Mật Khẩu">
                        <div class="actions">
                            <input type="checkbox"  id ="Remember-me">
                            <label for="Remember-me">Remember Me</label>
                            <div class="signinBtn">
                                <a href="./VIP">Sign In</a>
                            </div>
                        </div>
                        <div class="signinMethods">
                            <div class="signin_facebook">
                                <img src="images/fb.png" alt="">
                                <p>Sign In With Facebook</p>
                            </div>
                            <div class="signin_google">
                                <img src="images/google.png" alt="">
                                <p>Sign In With Google</p>
                            </div>
                        </div>    
                </form>
        </div>
    </div>
@endsection