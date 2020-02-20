<template>
  <div>
    <el-form
      :rules="rules"
      ref="RegisteForm"
      v-loading="loading"
      element-loading-text="PLS WAITING..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :model="RegisteForm"
      class="loginContainer">
      <h3 class="loginTitle">Registe Your Interview</h3>
      <el-form-item prop="name">
        <el-input size="normal" type="text" v-model="RegisteForm.name" auto-complete="off"
                  placeholder="Your name"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input size="normal" type="email" v-model="RegisteForm.email" auto-complete="off"
                  placeholder="Your email"></el-input>
      </el-form-item>
      <el-button size="normal" type="primary" style="width: 100%;" @click="submitLogin">Registe</el-button>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Registe",
      data() {
        return {
          loading: false,
          RegisteForm: {
            name: '',
            email: ''
          },
          rules: {
            name: [{required: true, message: 'Enter name', trigger: 'blur'}],
            email: [{required: true, message: 'Enter email', trigger: 'blur'}]
          },
        }
      },
      methods: {
        submitLogin: function () {
          this.$refs.RegisteForm.validate((valid) => {
            if (valid) {
              this.loading = true;
              this.postKeyValueRequest('/doRegiste',this.RegisteForm).then(res => {
                this.loading = false;
                if(res)
                {
                  console.log(res);
                  this.$message.success("We get your registe,please waiting the email");
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

<style scoped>

</style>
