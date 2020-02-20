<template>
  <div>
    <el-form
      :rules="rules"
      ref="loginForm"
      v-loading="loading"
      element-loading-text="PLS WAITING..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :model="loginForm"
      class="loginContainer">
      <h3 class="loginTitle">Login</h3>
      <el-form-item prop="username">
        <el-input size="normal" type="text" v-model="loginForm.username" auto-complete="off"
                  placeholder="enter username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="normal" type="password" v-model="loginForm.password" auto-complete="off"
                  placeholder="enter password"></el-input>
      </el-form-item>
      <el-checkbox size="normal" class="loginRemember" v-model="checked">Remember Me</el-checkbox>
      <el-button size="normal" type="primary" style="width: 100%;" @click="submitLogin">Login</el-button>
      <el-button class="regsite_button" style="width: 50%;" @click="toRegiste">Registe Interview</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loading: false,
        loginForm: {
          username: '',
          password: ''
        },
        checked: false,
        rules: {
          username: [{required: true, message: 'Enter Username', trigger: 'blur'}],
          password: [{required: true, message: 'Enter Password', trigger: 'blur'}]
        },
      }
    },
    methods: {
      toRegiste: function()
      {
        this.$router.push("/registe");
      },
      submitLogin: function () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            this.postKeyValueRequest('/doLogin',this.loginForm).then(res => {
              this.loading = false;
              if(res)
              {
                console.log(res);
                this.$store.commit('INIT_CURRENTHR',JSON.stringify(res.data.obj));
                window.sessionStorage.setItem("user",JSON.stringify(res.data.obj));
                let path = this.$route.query.redirect;
                this.$router.push((path == '/' || path == undefined) ? '/home':path );
              }
            })
          }else
          {
            this.$message.error("Entering is require");
            return false;
          }
        })
      }

    }
  }
</script>

<style>
  .loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .loginTitle {
    margin: 15px auto 20px auto;
    text-align: center;
    color: #505458;
  }
  .loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
  }
  .regsite_button
  {
    margin: 15px 0px 0px 0px;
  }

</style>
