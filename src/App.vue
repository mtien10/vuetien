<template>
  <div>
    <LoginTien v-if="$route.name=='login'"></LoginTien>
    <AppStaff v-else-if="$route.path.startsWith('/staff')"></AppStaff>
    <AppEndUser v-else></AppEndUser>
  </div>    
</template>
<script>
import LoginTien from './LoginTien';
import AppEndUser from './AppEndUser';
import AppStaff from './AppStaff';

export default {
  components:{
    LoginTien,
    AppStaff,
    AppEndUser
  }
}
</script>