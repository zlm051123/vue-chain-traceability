<template>
  <div class="dashboard">
    <el-card>
      <h2>供应链溯源平台</h2>
      <p>基于区块链技术的商品全流程溯源管理系统，支持食品/药品/能源等商品的上链、购买、溯源全流程管理。</p>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <i class="el-icon-goods" style="font-size: 30px; color: #409eff;"></i>
            <h3>商品管理</h3>
            <p>管理员可添加/下架商品，记录商品基础信息</p>
            <el-button type="primary" @click="$router.push('/goods-manage')" v-if="$account.isOwner">进入管理</el-button>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <i class="el-icon-shopping-cart-2" style="font-size: 30px; color: #67c23a;"></i>
            <h3>商品购买</h3>
            <p>用户可购买上架商品，交易记录上链存证</p>
            <el-button type="success" @click="$router.push('/goods-buy')">立即购买</el-button>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <i class="el-icon-document-copy" style="font-size: 30px; color: #e6a23c;"></i>
            <h3>记录查询</h3>
            <p>查询商品购买记录，验证溯源信息</p>
            <el-button type="warning" @click="$router.push('/purchase-record')">查询记录</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DashBoard'
}
</script>

<style scoped>
.dashboard {
  padding: 20px 0;
}
.el-card {
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 10px;
}
</style>