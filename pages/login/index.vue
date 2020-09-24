<template>
  <div class="container">
    <a-row style="padding-top: 50px">
      <a-col :span="24">
        <h1 style="text-align: center">xxx系统</h1>
      </a-col>
    </a-row>
    <a-row style="padding-top: 30px">
      <a-col
        :lg="{ span: 8, offset: 8 }"
        :xxl="{ span: 6, offset: 9 }"
        :label-col="{ span: 3 }"
        :wrapper-col="{ span: 21 }"
      >
        <a-form-model ref="form" :model="form.data">
          <a-form-model-item>
            <a-input v-model="form.data.username" placeholder="用户名">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-input
              v-model="form.data.password"
              type="password"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item style="text-align: center">
            <a-button type="primary" block icon="login" @click="submit">
              登录
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        data: {
          username: undefined,
          password: undefined
        },
        rule: {
          username: [{ required: true, message: '请输入用户名' }],
          password: [{ required: true, message: '请输入密码' }]
        }
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) return
        // TODO: 以下为模拟登录，请对接实际后端接口
        this.$message.success('登录成功')
        const timer = setTimeout(function() {
          clearTimeout(timer)
          window.location.href = '/home'
        }, 1000)
      })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
