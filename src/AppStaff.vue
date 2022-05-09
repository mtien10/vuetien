<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-0">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :class="{active: $route.meta.page==1}" to="/staff">Quản lý nhóm sản phẩm</router-link>
                <router-link class="nav-item nav-link" :class="{active: $route.meta.page==2}" to="/staff/product">Quản lý sản phẩm</router-link>
                <router-link class="nav-item nav-link" :class="{active: $route.meta.page==3}" to="/staff/order">Quản lý đơn hàng </router-link>
            </div>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle p-0" data-toggle="dropdown" href="#">
                    <img class="rounded-circle" style="width:60px" src="https://raw.githubusercontent.com/pytutorial/html_samples/master/css_bootstrap/user.svg">
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                    Thông tin tài khoản
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                    Đăng xuất
                    </a>
                </div>
                </li>
            </ul>
            </nav>
            <router-view></router-view>
    </div>
</template>