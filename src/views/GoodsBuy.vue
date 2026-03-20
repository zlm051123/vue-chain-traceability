<template>
  <div class="goods-buy">
    <el-card>
      <h3>商品购买</h3>
      <el-divider></el-divider>

      <!-- 商品列表 -->
      <el-table :data="goodsList" border style="width: 100%;">
        <el-table-column prop="goodsId" label="商品ID"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="价格(wei)">
          <template slot-scope="scope">
            {{ scope.row.price }} ({{ scope.row.price / 1000000000000000000 }} ETH)
          </template>
        </el-table-column>
        <el-table-column prop="productionTime" label="上架时间">
          <template slot-scope="scope">
            {{ formatTime(scope.row.productionTime) }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button 
              type="primary" 
              size="mini" 
              @click="buyGoods(scope.row)"
              :disabled="scope.row.sold"
            >
              {{ scope.row.sold ? '已售出' : '立即购买' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GoodsBuy',
  data() {
    return {
      goodsList: [
        // 模拟数据
        {
          goodsId: 1,
          name: '有机大米',
          price: 1000000000000000000,
          productionTime: 1710864000,
          sold: false
        },
        {
          goodsId: 2,
          name: '医用口罩',
          price: 500000000000000000,
          productionTime: 1710950400,
          sold: true
        },
        {
          goodsId: 3,
          name: '清洁能源包',
          price: 2000000000000000000,
          productionTime: 1711036800,
          sold: false
        }
      ]
    }
  },
  methods: {
    // 格式化时间
    formatTime(timestamp) {
      return new Date(timestamp * 1000).toLocaleString()
    },
    // 购买商品
    buyGoods(goods) {
      this.$confirm(`确定要购买【${goods.name}】吗？价格：${goods.price} wei`, '购买确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        // 模拟购买商品（实际需调用合约的 buyGoods 方法）
        const index = this.goodsList.findIndex(item => item.goodsId === goods.goodsId)
        this.goodsList[index].sold = true
        // 生成购买记录（模拟）
        const purchaseHash = '0x' + Math.random().toString(16).substr(2, 64)
        this.$message.success(`购买成功！购买记录哈希：${purchaseHash}`)
        // 跳转到购买记录页面
        this.$router.push('/purchase-record')
      }).catch(() => {
        this.$message.info('已取消购买')
      })
    }
  }
}
</script>