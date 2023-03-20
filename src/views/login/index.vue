<template>
  <div class="login-container">
    <el-form
      ref="formRef"
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <LangSelect class="lang-select" effect="light" />
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        >
          <template #prepend>
            <span class="svg-container">
              <svg-icon icon="user" />
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          :type="passwordType"
          name="password"
        >
          <template #prepend>
            <span class="svg-container">
              <svg-icon icon="password" />
            </span>
          </template>
          <template #suffix>
            <span class="show-pwd">
              <svg-icon
                :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
                @click="onChangePwdType"
              />
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-button
        type="primary"
        size="large"
        :loading="loading"
        class="login-button"
        @click="handleLogin"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
import LangSelect from '@/components/LangSelect'
import { useI18n } from 'vue-i18n'

const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const i18n = useI18n()

const loginRules = ref({
  username: [
    {
      required: true,
      message: computed(() => i18n.t('msg.login.usernameRule'))
    }
  ],
  password: [{ required: true, validator: validatePassword() }]
})

const passwordType = ref('password')
function onChangePwdType() {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

const loading = ref(false)
const store = useStore()
const formRef = ref(null)
function handleLogin() {
  formRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch((error) => {
        console.log(error)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gary: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .tips {
      font-size: 16px;
      color: #fff;
      line-height: 24px;
    }
    .svg-container {
      padding: 6px 0;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gary;
        margin: 0 auto 40px;
        text-align: center;
        font-weight: bold;
      }
    }
    .show-pwd {
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: #fff;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
    .login-button {
      width: 100%;
      height: 44px;
      margin-bottom: 30px;
    }
  }
}
</style>
