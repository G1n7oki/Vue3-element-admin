<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <el-icon><Avatar /></el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <el-icon><Avatar /></el-icon>
        </span>
        <el-input placeholder="password" name="password"></el-input>
        <span class="show-pwd">
          <el-icon><Avatar /></el-icon>
        </span>
      </el-form-item>
      <el-button type="primary" class="login-button">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
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

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background-color: transparent;
        border: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: $light_gary;
        caret-color: $cursor;
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
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
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
