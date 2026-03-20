<template>
  <div class="purchase-record">
    <el-card>
      <h3>购买记录查询</h3>
      <el-divider></el-divider>

      <!-- 查询表单 -->
      <el-form :model="searchForm" label-width="80px" inline @submit.prevent="searchRecord">
        <el-form-item label="商品ID">
          <el-input v-model="searchForm.goodsId" type="number" placeholder="请输入商品ID"></el-input>
        </el-form-item>
        <el-form-item label="哈希值">
          <el-input v-model="searchForm.purchaseHash" placeholder="请输入购买哈希"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchRecord">查询</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 记录列表 -->
      <el-table :data="recordList" border style="width: 100%; margin-top: 20px;">
        <el-table-column prop="purchaseHash" label="购买哈希" width="400"></el-table-column>
        <el-table-column prop="goodsId" label="商品ID"></el-table-column>
        <el-table-column prop="goodsName" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="支付金额(wei)">
          <template slot-scope="scope">
            {{ scope.row.price }} ({{ scope.row.price / 1000000000000000000 }} ETH)
          </template>
        </el-table-column>
        <el-table-column prop="purchaseTime" label="购买时间">
          <template slot-scope="scope">
            {{ formatTime(scope.row.purchaseTime) }}
          </template>
        </el-table-column>
        <el-table-column prop="buyer" label="购买者地址"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PurchaseRecord',
  data() {
    return {
      searchForm: {
        goodsId: '',
        purchaseHash: ''
      },
      recordList: [
        // 模拟数据
        {
          purchaseHash: '0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
          goodsId: 2,
          goodsName: '医用口罩',
          price: 500000000000000000,
          purchaseTime: 1711123200,
          buyer: '0x1234567890abcdef1234567890abcdef12345678'
        },
        {
          purchaseHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
          goodsId: 1,
          goodsName: '有机大米',
          price: 1000000000000000000,
          purchaseTime: 1711209600,
          buyer: '0x1234567890abcdef1234567890abcdef12345678'
        }
      ]
    }
  },
  methods: {
    // 格式化时间
    formatTime(timestamp) {
      return new Date(timestamp * 1000).toLocaleString()
    },
    // 查询记录
    searchRecord() {
      // 模拟查询逻辑（实际需调用合约的 purchaseInfo 映射）
      let filteredList = [...this.recordList]
      if (this.searchForm.goodsId) {
        filteredList = filteredList.filter(item => item.goodsId === this.searchForm.goodsId)
      }
      if (this.searchForm.purchaseHash) {
        filteredList = filteredList.filter(item => item.purchaseHash.includes(this.searchForm.purchaseHash))
      }
      this.recordList = filteredList
      this.$message.info(`查询到 ${filteredList.length} 条记录`)
    },
    // 重置查询
    resetSearch() {
      this.searchForm = { goodsId: '', purchaseHash: '' }
      // 恢复原始数据
      this.recordList = [
        {
          purchaseHash: '0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
          goodsId: 2,
          goodsName: '医用口罩',
          price: 500000000000000000,
          purchaseTime: 1711123200,
          buyer: '0x1234567890abcdef1234567890abcdef12345678'
        },
        {
          purchaseHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
          goodsId: 1,
          goodsName: '有机大米',
          price: 1000000000000000000,
          purchaseTime: 1711209600,
          buyer: '0x1234567890abcdef1234567890abcdef12345678'
        }
      ]
    }
  }
}
</script>