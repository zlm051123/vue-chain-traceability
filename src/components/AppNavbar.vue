<template>
  <el-header style="background-color: #2e3b4e; color: white; line-height: 60px;">
    <el-container>
      <el-header style="text-align: left; font-size: 20px; padding: 0;">
        供应链溯源区块链平台
      </el-header>
      <el-menu
        mode="horizontal"
        background-color="#2e3b4e"
        text-color="white"
        active-text-color="#ffd04b"
        style="line-height: 60px;"
      >
        <el-menu-item index="/">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="/goods-buy" v-if="$account.address">
          <router-link to="/goods-buy">商品购买</router-link>
        </el-menu-item>
        <el-menu-item index="/purchase-record" v-if="$account.address">
          <router-link to="/purchase-record">购买记录</router-link>
        </el-menu-item>
        <el-menu-item index="/goods-manage" v-if="$account.isOwner">
          <router-link to="/goods-manage">商品管理</router-link>
        </el-menu-item>
        <el-menu-item index="/withdraw" v-if="$account.isOwner">
          <router-link to="/withdraw">提现管理</router-link>
        </el-menu-item>
      </el-menu>
      <el-header style="text-align: right; font-size: 14px;">
        当前账户: {{ $account.address }}
      </el-header>
    </el-container>
  </el-header>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>